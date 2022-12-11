import mongoose from "mongoose";
import CollectSchema from "./collect-schema.js";

const CollectModel = mongoose.model("CollectModel", CollectSchema);
export default CollectModel;