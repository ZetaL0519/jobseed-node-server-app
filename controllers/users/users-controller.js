import * as userDao from "./users-dao.js"

const findUsers = async (req, res) => {
    const users = await userDao.findUsers();
    res.json(users)
}

const createUser = async(req, res) => {
    const user = req.body;
    const newuser = await userDao.createUser(user);
    res.json(newuser);
}

const deleteUser = async (req, res) =>{
    const uid = req.params.uid;
    const status = await userDao.deleteUser(uid);
    res.sendStatus(200);
}

const updateUser = async (req, res) => {
    const uid = req.params.uid;
    const user = req.body;
    const status = await userDao.updateUser(uid, user);
    res.json(status)
}

const findUserById = async(req, res) => {
    const uid = req.params.uid;
    const user = await userDao.findUserById(uid);
    res.json(user);
}

export default (app) => {
    app.get('/api/users', findUsers);
    app.get('/api/users/:uid', findUserById);
    app.post('/api/users', createUser);
    app.delete('/api/users/:uid', deleteUser);
    app.put('/api/users/:uid', updateUser)
}