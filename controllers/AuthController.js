
import UserDao from "./users/users-dao";
const bcrypt = require('bcrypt');
const saltRounds = 10;
const AuthenticationController = (app) => {
    const userDao = UserDao.getInstance();
    const signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const newUser = req.body;
        const password = newUser.password;
        const hash = yield bcrypt.hash(password, saltRounds);
        newUser.password = hash;
        const existingUser = yield userDao.findUserByUsername(req.body.username);
        if (existingUser) {
            res.sendStatus(403);
            return;
        }
        else {
            const insertedUser = yield userDao.createUser(newUser);
            insertedUser.password = '';
            // Uses the profile attribute to indicate currently logged-in user.
            req.session['profile'] = insertedUser;
            res.json(insertedUser);
        }
    });
    const logout = (req, res) => {
        req.session.destroy();
        res.sendStatus(200);
    };
    const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const user = req.body;
        const username = user.username;
        const password = user.password;
        const existingUser = yield userDao.findUserByUsername(username);
        if (!existingUser) {
            res.sendStatus(403);
            return;
        }
        const match = yield bcrypt.compare(password, existingUser.password);
        if (match) {
            existingUser.password = '*****';
            req.session['profile'] = existingUser;
            res.json(existingUser);
        }
        else {
            res.sendStatus(403);
        }
    });
    app.post("/api/auth/signup", signup);
    app.post("/api/auth/logout", logout);
    app.post("/api/auth/login", login);
};
export default AuthenticationController;
