import mongoose from "mongoose";
import UserSchema from "./users-schema.js";
const usersModel = mongoose.model("userModel", UserSchema);
export default usersModel;