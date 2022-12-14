import * as followDao from "./follow-dao.js"

const createFollow = async(req, res) => {
    const uid = req.params.uid;
    const company = req.body;
    const existedFollow = followDao.findOneFollow(company.companyId, uid)
    if(existedFollow){
        res.json(existedFollow)
    }else{
        const follow = await followDao.createFollow(company, uid)
        res.json(follow)
    }
}

const deleteFollow = async(req, res) => {
    const uid = req.params.uid;
    const cid = req.params.cid;
    const status = await followDao.deleteFollow(cid, uid)
    res.json(status)
}

const findFollowsByUid = async(req, res) => {
    const uid = req.params.uid;
    const follows = await followDao.findFollowsByUid(uid)
    res.json(follows)
}

const findAllFollows = async(req, res) => {
    const follows = await followDao.findAllFollows()
    res.json(follows)
}

export default (app) => {
    app.get('/api/follows', findAllFollows)
    app.post('/api/follows/:uid', createFollow)
    app.delete('/api/follows/:uid/:cid', deleteFollow)
    app.get('/api/follows/:uid', findFollowsByUid)
}