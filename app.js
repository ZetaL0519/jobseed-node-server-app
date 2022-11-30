import express from 'express';
import mongoose from "mongoose";
import cors from 'cors';
import usersController from './controllers/users/users-controller.js';
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

const uri = `mongodb+srv://yi1w:${process.env.mongodbpw}@cluster0.hyy8m1u.mongodb.net/?retryWrites=true&w=majority`;
mongoose.connect(uri);
app.get('/', (req, res) =>
    res.send('<h1>App Loaded!</h1>'));

usersController(app);

const PORT = 4000;
app.listen(process.env.PORT || PORT);