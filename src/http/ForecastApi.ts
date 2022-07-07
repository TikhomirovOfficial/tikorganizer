import axios from "axios";
import {IForecastHourlyResponse, IForecastDailyResponse} from "../models/IForecastRequest";
import {cfg} from "../config";
import {IDayForecastItem, IHoursForecastItem, WeatherType} from "../models/IForecast";
import {getCelsius} from "../utils/getCelsius";

const forecastInstance = axios.create({
    baseURL: 'https://community-open-weather-map.p.rapidapi.com/forecast',
    headers: {
        "X-RapidAPI-Host": cfg.API_HOST,
        "X-RapidAPI-Key": cfg.API_FORECAST_KEY
    }

})
export class ForecastApi {

    static async getHourlyForecast(city: string) {
        try {
            const {data} = await forecastInstance.get<IForecastHourlyResponse>(`/?cnt=${cfg.COUNT_DATA}&q=${city}`)

            const hoursForecastData: IHoursForecastItem[] = [
                ...data.list.map<IHoursForecastItem>(item => {
                    return {
                        date_time: item.dt,
                        deg: getCelsius(item.main.temp),
                        weather:  WeatherType[item.weather[0].main]
                    }
                })
            ]

            return hoursForecastData

        } catch (e: any) {
            throw new Error(e.message)
        }
    }

    static async getDailyForecast(city: string) {
        try {
            const {data} = await forecastInstance.get<IForecastDailyResponse>(`/daily?cnt=${cfg.COUNT_DATA}&q=${city}`)
            const weekForecastData: IDayForecastItem[] = [
                ...data.list.map<IDayForecastItem>(item => {
                        return {
                            date_time: item.dt,
                            weather: WeatherType[item.weather[0].main],
                            night_deg: getCelsius(item.temp.night),
                            day_deg: getCelsius(item.temp.day)
                        }
                    }
                )
            ]

            return weekForecastData
        } catch (e: any) {
            throw new Error(e.message)
        }

    }
}