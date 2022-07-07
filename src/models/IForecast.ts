export enum WeatherType {
    Clear = "Clear",
    Clouds = "Clouds",
    Rain = "Rain"
}

export interface IDayForecastItem {
    date_time: number
    night_deg: number,
    day_deg: number,
    weather: WeatherType
}

export interface IHoursForecastItem {
    date_time: number,
    weather: WeatherType,
    deg: number

}

export interface IForecast {
    value: {
        today: IHoursForecastItem[]
        week: IDayForecastItem[]
        city: string
    }
    isLoading: boolean,
    isRejected: boolean


}