import jobs from './jobs.json';

export const getJobs = () => jobs;

const JobsController = (app) => {

    const createJob = (req, res) => {
        const job = req.body
        job["_id"] = (new Date()).getTime() + ''
        job["likes"] = 0
        job["liked"] = false
        jobs.push(job)
        res.send(job)
    }

    const findAllJobs = (req, res) => {
        res.send(jobs)
    }

    const updateJob = (req, res) => {
        const jid = req.params['jid']
        const jobUpdates = req.body
        const jobIndex = jobs.findIndex(
            (j) => j._id === jid)
        jobs[jobIndex] = {
            ...jobs[jobIndex],
            ...jobUpdates
        }
        res.send(200)
    }

    const deleteJob = (req, res) => {
        const jid = req.params['jid']
        jobs = jobs.filter(
            (j) => j._id !== jid
        )
        res.send(200)
    }

    app.post('/jobs', createJob)
    app.get('/jobs', findAllJobs)
    app.put('/jobs/:jid', updateJob)
    app.delete('/jobs/:jid', deleteJob)
}

export default JobsController;