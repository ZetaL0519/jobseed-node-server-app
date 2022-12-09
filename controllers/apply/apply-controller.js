import * as applyDao from "./apply-dao.js";

const findAllApply = async(req, res) => {
    const applys = await applyDao.findAllApplys();
    res.json(applys);
}

const findAllApplyByUser = async(req, res) => {
    const user = req.params.uid;
    const applys = await applyDao.findAllApplyByUser(user);
    res.json(applys);
}

const createApplyByUser = async(req, res) => {
    const uid = req.params.uid;
    const jid = req.params.jid;
    const apply = await applyDao.createApplyByUser(uid, jid);
    res.json(apply);
}

const deleteApply = async(req, res) => {
    const uid = req.params.uid;
    const jid = req.params.jid;
    const status = await applyDao.deleteApply(uid, jid);
    res.json(status);
}

const findAllUserApplyJob = async(req, res) => {
    const jid = req.params.jid;
    const users = await applyDao.findAllUserApplysJob(jid);
    res.json(users);
}

const acceptApply = async(req, res) => {
    const uid = req.params.uid;
    const jid = req.params.jid;
    const apply = await applyDao.acceptApply(uid, jid);
    res.json(apply);
}

const findAllAcceptedApplys = async(req, res) => {
    const applys = await applyDao.findAllAcceptedApplys();
    res.json(applys);
}


export default (app) => {
    app.get('/api/applys', findAllApply);
    app.get('/api/:uid/applys', findAllApplyByUser);
    app.get('/api/applys/:jid', findAllUserApplyJob);
    app.post('/api/:uid/applys/:jid', createApplyByUser);
    app.delete('/api/:uid/applys/:jid', deleteApply);
    app.put('/api/users/:uid/accept/:jid/', acceptApply);
    app.get('/api/applys/accept', findAllAcceptedApplys);
}