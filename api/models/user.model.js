import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    }
},{timestamps: true}) //time of creation and time of edit is automatically stored by mongodb

const User = mongoose.model('User', userSchema)

export default User