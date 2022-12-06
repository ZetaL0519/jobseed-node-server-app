import mongoose from "mongoose";
import CollectSchema from "./collect-schema.js"

const collectModel = mongoose.model("CollectModel", CollectSchema);
export default collectModel;