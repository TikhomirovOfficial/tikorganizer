import {WeatherType} from "./IForecast";

interface IWeatherObject {
    main: WeatherType
}

export interface IForecastDailyResponseItem {
    dt: number
    temp: {
        day: number,
        night: number
    },
    weather: IWeatherObject[]
}

export interface IForecastHourlyResponseItem {
    dt: number,
    main: {
        temp: number
    },
    weather: IWeatherObject[]
}

export interface IForecastHourlyResponse {
    list: IForecastHourlyResponseItem[]
}

export interface IForecastDailyResponse {
    list: IForecastDailyResponseItem[]
}