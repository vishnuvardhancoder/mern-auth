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
    },
    profilePicture:{
        type: String,
        default:"https://imgs.search.brave.com/H2OqHIN2j3kQUDMnJgDxX3uAeUkWKYo_V6aDzyYRmB4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2LzYwLzkyLzc2/LzM2MF9GXzY2MDky/NzYyNl9IVGhnaWtt/Y2FxdFpmWlZPTndY/QmlQRGVDQ3hOWEJm/eC5qcGc"
    }
},{timestamps: true}) //time of creation and time of edit is automatically stored by mongodb

const User = mongoose.model('User', userSchema)

export default User