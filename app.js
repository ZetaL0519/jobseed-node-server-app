import express from 'express';
import mongoose from "mongoose";
import cors from 'cors';
import session from "express-session";

import usersController from './controllers/users/users-controller.js';
import JobsController from './controllers/jobs/jobs-controller.js';
import ApplyController from "./controllers/apply/apply-controller.js";
import CollectController from "./controllers/collect/collect-controller.js";
import FollowController from "./controllers/follow/follow-controller.js";
import * as dotenv from 'dotenv';
import AuthController from "./controllers/AuthController.js";
dotenv.config()
const app = express();
// Sets the Access-Control-Allow-Origin response header to the req origin.
const corsConfig = {
    credentials: true,
    origin: true,
};
app.use(cors(corsConfig));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
let sess = {
    secret: process.env.SECRET,
    cookie: {
        secure: false,
        resave: false,
        saveUninitialized: false,
        // Enables cross-site delivery between Netlify and Heroku.
        sameSite: process.env.NODE_ENV === "production" ? 'none' : 'lax'
    },
    resave: true,
    saveUninitialized: true
 }
 
 if (process.env.ENV === 'PRODUCTION') {
    app.set('trust proxy', 1) // trust first proxy
    sess.cookie.secure = true // serve secure cookies
 }
app.use(session(sess));

const uri = `mongodb+srv://yi1w:${process.env.mongodbpw}@cluster0.hyy8m1u.mongodb.net/?retryWrites=true&w=majority`;
mongoose.connect(uri);
app.get('/', (req, res) =>
    res.send('<h1>App Loaded!</h1>'));

usersController(app);
JobsController(app);
ApplyController(app);
CollectController(app);
AuthController(app);
FollowController(app);

const PORT = 4000;
app.listen(process.env.PORT || PORT);