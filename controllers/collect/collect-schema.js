import mongoose, { Schema }  from 'mongoose';
const schema = mongoose.Schema({
    job: {type: Schema.Types.ObjectId, ref: "jobModel"},
    collectBy: {type: Schema.Types.ObjectId, ref: "userModel"},
}, {collection: 'collects'});
export default schema;