import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { Reel } from "../models/reel.model.js";
import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../services/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const uploadReel = asyncHandler(async (req, res) => {
    const { title, description, category, tags } = req.body;

    if (!title || !category) {
        throw new ApiError(400, "Title and category are required");
    }

    const videoLocalPath = req.files?.videoFile?.[0]?.path;
    const thumbnailLocalPath = req.files?.thumbnail?.[0]?.path;

    if (!videoLocalPath) {
        throw new ApiError(400, "Video file is required");
    }

    if (!thumbnailLocalPath) {
        throw new ApiError(400, "Thumbnail file is required");
    }

    const video = await uploadOnCloudinary(videoLocalPath);
    const thumbnail = await uploadOnCloudinary(thumbnailLocalPath);

    if (!video || !thumbnail) {
        throw new ApiError(500, "Failed to upload video or thumbnail");
    }

    let parsedTags = [];
    if (tags) {
        try {
            parsedTags = JSON.parse(tags);
        } catch (e) {
            parsedTags = tags.split(',').map(tag => tag.trim());
        }
    }

    const reel = await Reel.create({
        creator: req.user._id,
        title,
        description: description || "",
        category,
        tags: parsedTags,
        videoUrl: video.url,
        thumbnailUrl: thumbnail.url
    });

    return res.status(201).json(new ApiResponse(201, reel, "Reel uploaded successfully"));
});

const getReelsFeed = asyncHandler(async (req, res) => {
    const { page = 1, limit = 10 } = req.query;

    const reels = await Reel.find()
        .populate("creator", "name username avatar")
        .sort({ createdAt: -1 })
        .skip((page - 1) * limit)
        .limit(parseInt(limit));

    return res.status(200).json(new ApiResponse(200, reels, "Reels feed fetched successfully"));
});

const getReelById = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const reel = await Reel.findById(id).populate("creator", "name username avatar");

    if (!reel) {
        throw new ApiError(404, "Reel not found");
    }

    // Increment view count when fetched
    reel.viewsCount += 1;
    await reel.save({ validateBeforeSave: false });

    return res.status(200).json(new ApiResponse(200, reel, "Reel fetched successfully"));
});

const getReelsByCategory = asyncHandler(async (req, res) => {
    const { category } = req.params;
    const { page = 1, limit = 10 } = req.query;

    const reels = await Reel.find({ category })
        .populate("creator", "name username avatar")
        .sort({ createdAt: -1 })
        .skip((page - 1) * limit)
        .limit(parseInt(limit));

    return res.status(200).json(new ApiResponse(200, reels, `Reels for category ${category} fetched`));
});

const getCreatorReels = asyncHandler(async (req, res) => {
    const { creatorId } = req.params;
    const { page = 1, limit = 10 } = req.query;

    const reels = await Reel.find({ creator: creatorId })
        .populate("creator", "name username avatar")
        .sort({ createdAt: -1 })
        .skip((page - 1) * limit)
        .limit(parseInt(limit));

    return res.status(200).json(new ApiResponse(200, reels, "Creator reels fetched successfully"));
});

const toggleLikeReel = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const userId = req.user._id;

    const user = await User.findById(userId);
    const reel = await Reel.findById(id);

    if (!reel) {
        throw new ApiError(404, "Reel not found");
    }

    const hasLiked = user.likedReels.includes(id);

    if (hasLiked) {
        // Unlike
        user.likedReels = user.likedReels.filter(reelId => reelId.toString() !== id.toString());
        reel.likesCount = Math.max(0, reel.likesCount - 1);
    } else {
        // Like
        user.likedReels.push(id);
        reel.likesCount += 1;

        // Optionally store liked category for personalized feed
        if (!user.likedCategories.includes(reel.category)) {
            user.likedCategories.push(reel.category);
        }
    }

    await Promise.all([user.save({ validateBeforeSave: false }), reel.save({ validateBeforeSave: false })]);

    return res.status(200).json(new ApiResponse(200, { liked: !hasLiked }, "Reel like status toggled"));
});

const addToWatchHistory = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const userId = req.user._id;

    const user = await User.findById(userId);

    // Remove if already exists to add to the top (latest)
    user.watchHistory = user.watchHistory.filter(reelId => reelId.toString() !== id.toString());
    
    // Add to the beginning of the array
    user.watchHistory.unshift(id);

    // Keep history manageable, e.g., max 100 items
    if (user.watchHistory.length > 100) {
        user.watchHistory.pop();
    }

    await user.save({ validateBeforeSave: false });

    return res.status(200).json(new ApiResponse(200, {}, "Added to watch history"));
});

const deleteReel = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const reel = await Reel.findById(id);

    if (!reel) {
        throw new ApiError(404, "Reel not found");
    }

    if (reel.creator.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
        throw new ApiError(403, "You don't have permission to delete this reel");
    }

    await Reel.findByIdAndDelete(id);

    return res.status(200).json(new ApiResponse(200, {}, "Reel deleted successfully"));
});

export {
    uploadReel,
    getReelsFeed,
    getReelById,
    getReelsByCategory,
    getCreatorReels,
    toggleLikeReel,
    addToWatchHistory,
    deleteReel
};
