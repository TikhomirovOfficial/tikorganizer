import './forecast.scss'
import {FC, useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import HourlyForecastItem from "../../components/Forecast/HourlyForecastItem";
import {IForecast} from "../../models/IForecast";
import DailyForecastItem from "../../components/Forecast/DailyForecastItem";
import {getForecast} from "../../store/ForecastSlice";
import {getFromStorage} from "../../utils/LocalStorageExplorer";


const Forecast: FC = () => {
    const dispatch = useAppDispatch()
    const forecastData = useAppSelector<IForecast>(state => state.forecast)
    const [targetCity, setTargetCity] = useState<string>('')

    const getForecastInfo = () => {
        dispatch(getForecast(targetCity))
    }
    if (forecastData.isLoading) {
        return (
            <div className="h-100p w-100p f-center-col">
                <h1 className="c-white">Загрузка...</h1>
            </div>
        )
    }
    return (
        <div className="forecast js-between ml-auto flex-column">
            <div className="forecast__search d-f jc-center ">
                <input onChange={event => setTargetCity(event.target.value)} value={targetCity}
                       placeholder="Введите город" type="text" className="c-white"/>
                <button onClick={getForecastInfo} className="cur-pointer c-white">
                    Найти
                </button>
            </div>
            {
                forecastData.value.city ?
                    <>
                        <div className="forecast__main c-white flex-row-betw">
                            <div className="flex-column">
                                <h1 className="fw-6">{forecastData.value.today[0].deg}°</h1>
                                <h2 className="fw-4">{forecastData.value.week[0].day_deg}°/{forecastData.value.week[0].night_deg}°</h2>
                                <div className="forecast__geo d-f al-center gap-5">
                                    <img src="img/geo.svg" alt=""/>
                                    <span>{forecastData.value.city}</span>
                                </div>
                            </div>
                            <img className="forecast__img" src="img/forecast_sunny.svg" alt=""/>
                        </div>
                        <div className="forecast-hourly flex-row-betw">
                            {
                                forecastData.value.today.map(item => (
                                    <HourlyForecastItem date_time={item.date_time} weather={item.weather} deg={item.deg}/>
                                ))
                            }
                        </div>
                        <div className="forecast-daily flex-column gap-5">
                            {
                                forecastData.value.week.map((item, index) => (
                                    index > 0 &&
                                    <DailyForecastItem
                                        date_time={item.date_time}
                                        night_deg={item.night_deg}
                                        day_deg={item.day_deg}
                                        weather={item.weather}/>
                                ))
                            }
                        </div>
                    </>     :
                    <div className="h-100p w-100p f-center-col">
                        <div className="f-center-col c-white gap-30">
                            <div className="d-f al-center gap-30">
                                <img src="img/is_empty.svg" alt=""/>
                                <h1 className="empty__title">Пусто</h1>
                            </div>
                            <p className="empty__text">Выберите населенный пункт.</p>
                        </div>
                    </div>

            }

        </div>
    );
};

export default Forecast;