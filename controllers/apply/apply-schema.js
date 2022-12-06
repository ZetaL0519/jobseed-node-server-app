import mongoose, { Schema }  from 'mongoose';
const schema = mongoose.Schema({
    job: {type: Schema.Types.ObjectId, ref: "JobModel"},
    collectBy: {type: Schema.Types.ObjectId, ref: "UserModel"},
}, {collection: 'applys'});
export default schema;