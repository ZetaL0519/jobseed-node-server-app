import * as weatherDao from "./weather-dao.js"

const createWeather = async(req, res) => {
    const weather = await weatherDao.createWeather(req.body);
    res.json(weather)
}

const findWeather = async(req, res) => {
    const weathers = await weatherDao.findWeather();
    res.json(weathers);
}

export default (app) => {
    app.get('/api/weather', findWeather)
    app.post('/api/weather', createWeather)
}