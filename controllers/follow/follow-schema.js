import mongoose, { Schema }  from 'mongoose';
const schema = mongoose.Schema({
        companyId: String,
        companyName: String,
        headquarters: String,
        industry: String,
        company_size: String,
        image_url: String,
        website: String,
        about_us: String,
    follower: {type: Schema.Types.ObjectId, ref: "userModel"},
}, {collection: 'follows'});
export default schema;