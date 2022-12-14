import mongoose from "mongoose";
import WeatherSchema from "./weather-schema.js";
const weatherModel = mongoose.model("weatherSchema", WeatherSchema);
export default weatherModel;