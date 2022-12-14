import weatherModel from "./weather-model.js"

export const createWeather = (w) => weatherModel.create({...w})

