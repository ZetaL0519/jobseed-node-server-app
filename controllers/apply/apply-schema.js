import mongoose, { Schema }  from 'mongoose';
const schema = mongoose.Schema({
    // job: {type: Schema.Types.ObjectId, ref: "JobModel"},
    // collectBy: {type: Schema.Types.ObjectId, ref: "UserModel"},
    job: {type: Schema.Types.ObjectId, ref: "jobModel"},
    applyBy: {type: Schema.Types.ObjectId, ref: "userModel"}
}, {collection: 'applys'});
export default schema;