import JobModel from "./jobs-model.js"

export const findJobs = () => JobModel.find().populate("postBy").exec();

export const createJob = (uid, job) => JobModel.create({...job, postBy: uid});

export const updateJob = (uid, jid, job) => JobModel.updateOne({_id: jid, postBy: uid}, {$set: job})

export const findJobByKey = async (key) => {
    const reg = new RegExp(key, 'i')
    const jobs = await JobModel.find({$or: [{jobtitle: {$regex: reg}}, {location: {$regex: reg}}, {companyname: {$regex: reg}}]}).populate("postBy").exec();
    return jobs;
}

export const findJobBylocationtitle = async (lo, title) => {
    const jobs = await JobModel.find({$and: [{jobtitle: {$regex: title, $options:'i'}}, {location: {$regex: lo, $options: 'i'}}]}).populate("postBy").exec();
    return jobs;
}

export const findAllPostJobs = (uid) => JobModel.find({postBy: uid})