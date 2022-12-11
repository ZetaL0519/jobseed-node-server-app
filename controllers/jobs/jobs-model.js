import mongoose from "mongoose";
import JobSchema from "./jobs-schema.js"
const jobsModel = mongoose.model("jobModel", JobSchema);
export default jobsModel;