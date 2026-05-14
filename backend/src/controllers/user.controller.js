import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import { Reel } from "../models/reel.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const getUserProfile = asyncHandler(async(req, res) => {
    const user = await User.findById(req.user?._id).select("-password -refreshToken");

    if (!user) {
        throw new ApiError(404, "User not found");
    }

    return res.status(200).json(new ApiResponse(200, user, "User profile fetched successfully"));
});

const getCreatorDashboard = asyncHandler(async(req, res) => {
    // Ensure the user is a creator
    if (req.user?.role !== 'creator' && req.user?.role !== 'admin') {
        throw new ApiError(403, "Access denied. Creators only.");
    }

    const creatorId = req.user._id;

    // Aggregate reels by this creator
    const stats = await Reel.aggregate([
        {
            $match: {
                creator: creatorId
            }
        },
        {
            $group: {
                _id: null,
                totalReels: { $sum: 1 },
                totalViews: { $sum: "$viewsCount" },
                totalLikes: { $sum: "$likesCount" }
            }
        }
    ]);

    const dashboardStats = stats.length > 0 ? stats[0] : { totalReels: 0, totalViews: 0, totalLikes: 0 };
    delete dashboardStats._id;

    // Fetch the recent reels
    const recentReels = await Reel.find({ creator: creatorId }).sort({ createdAt: -1 }).limit(10);

    return res.status(200).json(new ApiResponse(200, {
        stats: dashboardStats,
        recentReels
    }, "Creator dashboard fetched successfully"));
});

export {
    getUserProfile,
    getCreatorDashboard
}
