import mongoose from "mongoose";
import ApplySchema from "./apply-schema.js";

const applyModel = mongoose.model("ApplyModel", ApplySchema);
export default applyModel;