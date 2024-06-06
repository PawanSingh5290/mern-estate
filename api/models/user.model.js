import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type:String,
        required:true,
        unique:true,
    },
    email: {
        type:email,
        required:true,
        unique:true,
    },
    password: {
        type:password,
        required:true,
        
    }
},{timestamps:true});

const User = mongoose.model('User',userSchema);
export default User;