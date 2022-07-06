import {WeatherType} from "../models/IForecast";

export const getForecastIcon = (weather: WeatherType):string => {
  switch (weather) {
      case WeatherType.Clear:
          return 'img/forecast_sunny.svg'
      case WeatherType.Clouds:
          return 'img/forecast_cloudy.svg'
      case WeatherType.Rain:
          return 'img/forecast_rain.svg'
  }
}