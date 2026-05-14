import { Router } from "express";
import { 
    uploadReel, 
    getReelsFeed, 
    getReelById, 
    getReelsByCategory, 
    getCreatorReels, 
    toggleLikeReel, 
    addToWatchHistory, 
    deleteReel 
} from "../controllers/reel.controller.js";
import { verifyJWT, authorizeRoles } from "../middleware/auth.middleware.js";
import { upload } from "../middleware/multer.middleware.js";

const router = Router();

// Public routes (or partially protected if you want)
// For feed, we might want it public, but personalized feed requires auth.
// We'll protect feed for personalization, but you can make it public by removing verifyJWT
router.route("/feed").get(getReelsFeed);
router.route("/category/:category").get(getReelsByCategory);
router.route("/creator/:creatorId").get(getCreatorReels);
router.route("/:id").get(getReelById);

// Secured routes
router.use(verifyJWT);

router.route("/upload").post(
    authorizeRoles("creator", "admin"),
    upload.fields([
        { name: "videoFile", maxCount: 1 },
        { name: "thumbnail", maxCount: 1 }
    ]),
    uploadReel
);

router.route("/:id/like").post(toggleLikeReel);
router.route("/:id/watch").post(addToWatchHistory);
router.route("/:id").delete(deleteReel);

export default router;
