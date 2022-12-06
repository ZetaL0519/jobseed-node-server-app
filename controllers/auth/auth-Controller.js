import * as userDao from '../users/users-dao.js';
let currentUser = null;


  const signup = async (req, res) => {
    const user = req.body;
    const existingUser = await userDao
        .findUserByUsername(user.username)
    if(existingUser) {
        res.sendStatus(403)
        return
    }
    const currentUser = await userDao.createUser(user)
    req.session['currentUser'] = currentUser
    res.json(currentUser)
  }


  const signin = async (req, res) => {
    const credentials = req.body
    const existingUser = await userDao
        .findUserByCredentials(
            credentials.username, credentials.password)
    if(existingUser) {
        req.session['currentUser'] = existingUser
        res.json(existingUser)
        return
    }
    res.sendStatus(403)
  }


  const signout = (req, res) => {
    req.session.destroy()
    res.sendStatus(200)
  }

  export default (app) => {
  app.post("/api/auth/signup", signup)
  app.post("/api/auth/signout", signout)
  app.post("/api/auth/signin", signin);
  }