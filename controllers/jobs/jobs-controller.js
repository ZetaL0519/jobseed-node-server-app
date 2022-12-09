import * as jobDao from "./jobs-dao.js"

const findJobs = async (req, res) => {
    const jobs = await jobDao.findJobs();
    res.json(jobs)
}

const updateJob = async(req, res) => {
    const uid = req.params.uid;
    const jid = req.params.jid;
    const job = req.body;
    const status = await userDao.updateUser(uid, jid, job);
    res.json(status)
}

const findJobById = async(req, res) => {
    const jid = req.params.jid;
    const job = await jobDao.findJobById(jid);
    res.json(job);
}

const findJobByKey = async(req, res) => {
    const key = req.params.key;
    const jobs = await jobDao.findJobByKey(key);
    res.json(jobs);
}

const findJobBylocationtitle = async(req, res) => {
    const location = req.params.location;
    const title = req.params.title;
    const jobs = await jobDao.findJobBylocationtitle(location, title);
    res.json(jobs);
}

const findAllPostJobs = async(req, res) => {
    const uid = req.params.uid;
    const jobs = await jobDao.findAllPostJobs(uid);
    res.json(jobs);
}

const createJob = async(req, res) => {
    const job = req.body;
    const uid = req.params.uid;
    const newjob = await jobDao.createJob(uid, job);
    res.json(newjob)
}

export default (app) => {
    app.get('/api/jobs', findJobs);
    app.get('/api/jobs/onejob/:jid', findJobById)
    app.get('/api/users/:uid/jobs', findAllPostJobs);
    app.post('/api/users/:uid/jobs', createJob);
    app.put('/api/users/:uid/jobs/:jid', updateJob);
    app.get('/api/jobs/:key', findJobByKey)
    app.get('/api/jobs/:location/:title', findJobBylocationtitle)
}