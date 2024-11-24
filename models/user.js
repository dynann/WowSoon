import mongoose from "mongoose";


//create column in database
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    }, 
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
   },
   {timestamps: true}
)

//create one if not exist yet
const User = mongoose.models.User || mongoose.model("User", userSchema)
export default User