import express from 'express';
import mongoose from "mongoose";
import cors from 'cors';
import usersController from './controllers/users/users-controller.js';
import JobsController from './controllers/jobs/jobs-controller.js';
import ApplyController from "./controllers/apply/apply-controller.js"
import CollectController from './controllers/collect/collect-controller.js';
import * as dotenv from 'dotenv';

dotenv.config()
// import AuthController from "./controllers/AuthController.js";

const app = express();
// Sets the Access-Control-Allow-Origin response header to the req origin.
const corsConfig = {
    credentials: true,
    origin: true,
};
app.use(cors(corsConfig));
app.use(express.json());

const uri = `mongodb+srv://yi1w:yi1w@cluster0.hyy8m1u.mongodb.net/?retryWrites=true&w=majority`;
// const uri = "mongodb://127.0.0.1:27017/jobsearch"
mongoose.connect(uri);
app.get('/', (req, res) =>
    res.send('<h1>App Loaded!</h1>'));

usersController(app);
JobsController(app);
ApplyController(app);
CollectController(app);

const PORT = 4000;
app.listen(process.env.PORT || PORT);