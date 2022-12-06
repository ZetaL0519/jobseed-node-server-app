import mongoose from "mongoose";
import ApplySchema from "./apply-schema.js";

const ApplyModel = mongoose.model("ApplyModel", ApplySchema);
export default ApplyModel;