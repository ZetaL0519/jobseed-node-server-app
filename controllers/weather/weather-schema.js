import mongoose from 'mongoose';
const schema = mongoose.Schema({
    city:String,
    temp:String
}, {collection: 'weather'});
export default schema;