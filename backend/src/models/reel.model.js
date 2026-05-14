import mongoose, {Schema} from "mongoose";

const reelSchema = new Schema(
    {
        creator: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        title: {
            type: String,
            required: true,
            trim: true
        },
        description: {
            type: String,
            trim: true,
            default: ""
        },
        category: {
            type: String,
            required: true,
            index: true
        },
        tags: [
            {
                type: String
            }
        ],
        videoUrl: {
            type: String, // cloudinary url
            required: true
        },
        thumbnailUrl: {
            type: String, // cloudinary url
            required: true
        },
        likesCount: {
            type: Number,
            default: 0
        },
        viewsCount: {
            type: Number,
            default: 0
        }
    },
    {
        timestamps: true
    }
)

export const Reel = mongoose.model("Reel", reelSchema)
