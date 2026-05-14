import mongoose, {Schema} from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true, 
            index: true
        },
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true, 
            index: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true, 
        },
        password: {
            type: String,
            required: [true, 'Password is required']
        },
        avatar: {
            type: String, // cloudinary url
            required: true,
        },
        bio: {
            type: String,
            default: ""
        },
        role: {
            type: String,
            enum: ['user', 'creator', 'admin'],
            default: 'user'
        },
        likedCategories: [
            {
                type: String
            }
        ],
        likedReels: [
            {
                type: Schema.Types.ObjectId,
                ref: "Reel"
            }
        ],
        watchHistory: [
            {
                type: Schema.Types.ObjectId,
                ref: "Reel"
            }
        ],
        creatorProfile: {
            creatorType: {
                type: String,
                enum: ['restaurant', 'individual', 'none'],
                default: 'none'
            },
            socials: {
                instagram: { type: String, default: "" },
                youtube: { type: String, default: "" }
            },
            totalViews: {
                type: Number,
                default: 0
            },
            totalLikes: {
                type: Number,
                default: 0
            }
        },
        refreshToken: {
            type: String
        }
    },
    {
        timestamps: true
    }
)

userSchema.pre("save", async function (next) {
    if(!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 10)
    next()
})

userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateAccessToken = function(){
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
            role: this.role
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

userSchema.methods.generateRefreshToken = function(){
    return jwt.sign(
        {
            _id: this._id,
            
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

export const User = mongoose.model("User", userSchema)
