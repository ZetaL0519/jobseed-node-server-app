import * as jobDao from "./jobs-dao.js"

const findJobs = async (req, res) => {
    const jobs = await jobDao.findJobs();
    res.json(jobs)
}

const updateJob = async(req, res) => {
    const jid = req.params.jid;
    const job = req.body;
    const status = await userDao.updateUser(jid, job);
    res.json(status)
}

const findJobByTitle = async(req, res) => {
    const jobTitle = req.params.jobTitle;
    const jobs = await jobDao.findJobByTitle(jobTitle);
    res.json(jobs);
}

const findJobBylocationtitle = async(req, res) => {
    const location = req.params.location;
    const title = req.params.title;
    const jobs = await jobDao.findJobBylocationtitle(location, title);
    res.json(jobs);
}

export default (app) => {
    app.get('/api/jobs', findJobs);
    app.put('/api/jobs/:jid', updateJob);
    app.get('/api/jobs/:jobTitle', findJobByTitle)
    app.get('/api/jobs/:location/:title', findJobBylocationtitle)
}