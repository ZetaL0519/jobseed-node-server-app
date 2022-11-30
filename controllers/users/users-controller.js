import * as userDao from "./users-dao.js"

const findUsers = async (req, res) => {
    const users = await userDao.findUsers();
    res.json(users)
}

const createUser = async(req, res) => {
    const user = req.body;

}

export default (app) => {
    app.get('/api/users', findUsers);
}