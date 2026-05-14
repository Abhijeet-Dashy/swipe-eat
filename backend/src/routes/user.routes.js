import { Router } from "express";
import { getUserProfile, getCreatorDashboard } from "../controllers/user.controller.js";
import { verifyJWT, authorizeRoles } from "../middleware/auth.middleware.js";

const router = Router();

router.use(verifyJWT); // Protect all routes below

router.route("/profile").get(getUserProfile);

// Creator only routes
router.route("/creator/dashboard").get(authorizeRoles("creator", "admin"), getCreatorDashboard);

export default router;
