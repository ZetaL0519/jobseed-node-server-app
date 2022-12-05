import mongoose from 'mongoose';
const schema = mongoose.Schema({
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