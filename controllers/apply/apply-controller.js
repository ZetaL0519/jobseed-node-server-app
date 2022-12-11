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
    const existApply = await applyDao.findOneApply(uid, jid);
    if(existApply){
        res.json(existApply);
    }else{
        const apply = await applyDao.createApplyByUser(uid, jid);
        res.json(apply);
    }
    
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

const findOneApply = async(req, res) => {
    const uid = req.params.uid;
    const jid = req.params.jid;
    const apply = await applyDao.findOneApply(uid, jid);
    res.json(apply);
}

const deleteApplyById = async(req, res) => {
    const aid = req.params.aid;
    const status = await applyDao.deleteApplyById(aid)
    res.json(status)
}

export default (app) => {
    app.get('/api/applys', findAllApply);
    app.get('/api/:uid/applys', findAllApplyByUser);
    app.get('/api/applys/:jid', findAllUserApplyJob);
    app.get('/api/:uid/applys/:jid', findOneApply);
    app.post('/api/:uid/applys/:jid', createApplyByUser);
    app.delete('/api/:uid/applys/:jid', deleteApply);
    app.delete('/api/applys/:aid', deleteApplyById)
    app.put('/api/users/:uid/accept/:jid/', acceptApply);
    app.get('/api/applys/accept', findAllAcceptedApplys);
}