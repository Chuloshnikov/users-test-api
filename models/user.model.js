import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    isConfirmed: {
        type: Boolean,
        default: false
    }
});


const User = mongoose.model("User", usersSchema);

export default User;