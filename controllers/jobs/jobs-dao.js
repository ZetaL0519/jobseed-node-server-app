import JobModel from "./jobs-model.js"

export const findJobs = () => JobModel.find();

export const updateJob = (jid, job) => JobModel.updateOne({_id: jid}, {$set: job})

export const findJobByKey = async (key) => {
    const reg = new RegExp(key, 'i')
    const jobs = await JobModel.find({$or: [{jobtitle: {$regex: reg}}, {location: {$regex: reg}}, {companyname: {$regex: reg}}]});
    return jobs;
}

export const findJobBylocationtitle = async (lo, title) => {
    const jobs = await JobModel.find({$and: [{jobtitle: {$regex: title, $options:'i'}}, {location: {$regex: lo, $options: 'i'}}]});
    return jobs;
}