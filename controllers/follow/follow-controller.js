import * as followDao from "./follow-dao.js"

const createFollow = async(req, res) => {
    const uid = req.params.uid;
    const company = req.body;
    const follow = await followDao.createFollow(company, uid)
    res.json(follow)
}

const deleteFollow = async(req, res) => {
    const fid = req.params.fid;
    const status = await followDao.deleteFollow(fid)
    res.json(status)
}

const findFollowsByUid = async(req, res) => {
    const uid = req.params.uid;
    const follows = await followDao.findFollowsByUid(uid)
    res.json(follows)
}

export default (app) => {
    app.post('/api/follows/:uid', createFollow)
    app.delete('/api/follows/:fid', deleteFollow)
    app.get('/api/follows/:uid', findFollowsByUid)
}