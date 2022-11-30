import express from 'express';
import mongoose from "mongoose";
import cors from 'cors';
import usersController from './controllers/users/users-controller.js';
// import AuthController from "./controllers/AuthController.js";

const app = express();
// Sets the Access-Control-Allow-Origin response header to the req origin.
const corsConfig = {
    credentials: true,
    origin: true,
};
app.use(cors(corsConfig));
app.use(express.json());

const uri = 'mongodb://localhost:27017/jobseed';
mongoose.connect('mongodb://localhost:27017/jobseed');
app.get('/', (req, res) =>
    res.send('<h1>App Loaded!</h1>'));

usersController(app);

const PORT = 4000;
app.listen(process.env.PORT || PORT);