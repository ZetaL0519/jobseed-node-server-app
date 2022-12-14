import * as weatherDao from "./weather-dao.js"

const createWeather = async(req, res) => {
    const weather = await weatherDao.createWeather(req.body);
    res.json(weather)
}

export default (app) => {
    app.post('/api/weather', createWeather)
}