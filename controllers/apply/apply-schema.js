import mongoose, { Schema }  from 'mongoose';
import JobModel from '../jobs/jobs-model.js';
const schema = mongoose.Schema({
    job: {type: Schema.Types.ObjectId, ref: "jobModel"},
    applyBy: {type: Schema.Types.ObjectId, ref: "userModel"},
    accept: {type: String, default: "pending"}
}, {collection: 'applys'});
export default schema;