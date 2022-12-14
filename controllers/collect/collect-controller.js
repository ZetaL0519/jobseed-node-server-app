import * as collectDao from "./collect-dao.js";

const findAllCollect = async(req, res) => {
    const collects = await collectDao.findAllCollects();
    res.json(collects);
}

const findAllCollectByUser = async(req, res) => {
    const user = req.params.uid;
    const collects = await collectDao.findAllCollectByUser(user);
    res.json(collects);
}

const createCollectByUser = async(req, res) => {
    const uid = req.params.uid;
    const jid = req.params.jid;
    const existCollect  = await collectDao.findOneCollect(uid, jid);
    if(existCollect){
        res.json(existCollect);
    }else{
        const collect = await collectDao.createCollectByUser(uid, jid);
        res.json(collect);
    }
}

const deleteCollect = async(req, res) => {
    const uid = req.params.uid;
    const jid = req.params.jid;
    const status = await collectDao.deleteCollect(uid, jid);
    res.json(status);
}

const findOneCollect = async(req, res) => {
    const uid = req.params.uid;
    const jid = req.params.jid;
    const collect = await collectDao.findOneCollect(uid, jid);
    res.json(collect);
}

export default (app) => {
    app.get('/api/collects', findAllCollect);
    app.get('/api/:uid/collects', findAllCollectByUser);
    app.post('/api/:uid/collects/:jid', createCollectByUser);
    app.get('/api/:uid/collects/:jid', findOneCollect);
    app.delete('/api/:uid/collects/:jid', deleteCollect);
}