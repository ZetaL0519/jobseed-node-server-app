import mongoose from 'mongoose';
const schema = mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    firstName: String,
    lastName: String,
    email: {type: String, required: true},
    avatar: String,
    biography: String,
    dateOfBirth: Date,
    resume: String,
    accountType: {type: String, enum: ["SEEKER", "EMPLOYER"]},
    isAdmin:{
        type: Boolean,
        default: false
    },
    location:{
        city: String,
        State: String
    }
}, {collection: 'users'});
export default schema;