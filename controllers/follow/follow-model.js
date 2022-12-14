import mongoose from "mongoose";
import FollowSchema from "./follow-schema.js";

const FollowModel = mongoose.model("FollowModel", FollowSchema)

export default FollowModel