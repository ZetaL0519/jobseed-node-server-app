import mongoose,{Schema} from 'mongoose';
const schema = mongoose.Schema({
    postBy: {type: Schema.Types.ObjectId, ref: "userModel"},
    jobtitle: {type: String, required: true},
    date: {type: String, required: true},
    companyname: {type: String, required: true},
    email: {type: String, required: true},
    location: String,
    salary: String,
    url: String,
    resume: String,
    summary: String
}, {collection: 'jobs'});
export default schema;