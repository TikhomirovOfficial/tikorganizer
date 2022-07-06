import React, {FC} from 'react';
import {IForecast, IHoursForecastItem} from "../../../models/IForecast";
import {getTime} from "../../../utils/getTime";
import {useAppSelector} from "../../../hooks/redux";
import {getForecastIcon} from "../../../utils/getForecastIcon";

const HourlyForecastItem:FC<IHoursForecastItem> = ({deg, date_time, weather}) => {

    return (
        <div className="forecast-hourly__item flex-column al-center">
            <img src={getForecastIcon(weather)} alt=""/>
            <h2 className="fw-6">{deg}°</h2>
            <p className="hourly-time">{getTime(date_time)}</p>
        </div>
    );
};

export default HourlyForecastItem;