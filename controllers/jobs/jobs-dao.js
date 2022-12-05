import JobModel from "./jobs-model.js"

export const findJobs = () => JobModel.find();

export const updateJob = (jid, job) => JobModel.updateOne({_id: jid}, {$set: job})

export const findJobByTitle = async (jt) => {
    const jobs = await JobModel.find({jobtitle: {$regex: jt, $options:'i'} })
    return jobs;
}

export const findJobBylocationtitle = async (lo, title) => {
    const jobs = await JobModel.find({$and: [{jobtitle: {$regex: title, $options:'i'}}, {location: {$regex: lo, $options: 'i'}}]});
    return jobs;
}