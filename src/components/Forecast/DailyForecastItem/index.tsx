import React, {FC} from 'react';
import {IDayForecastItem} from "../../../models/IForecast";
import {getWeekDay} from "../../../utils/getWeekDay";
import {getForecastIcon} from "../../../utils/getForecastIcon";

const DailyForecastItem: FC<IDayForecastItem> = ({day_deg, night_deg, date_time, weather}) => {

    return (
        <div className="forecast-daily__item flex-row-betw">
            <h2 className="fw-5">{getWeekDay(date_time)}</h2>
            <div className="d-f forecast-daily__degs js-between gap-20 al-center">
                <img src={getForecastIcon(weather)} alt=""/>
                <span className="fw-5">
                    {day_deg}°<span className="night-deg">/{night_deg}°</span>
                </span>
            </div>
        </div>
    );
};

export default DailyForecastItem;