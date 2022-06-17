import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IForecast} from "../models/IForecast";
import {ForecastApi} from "../http/ForecastApi";

const initialState = {} as IForecast

export const getForecast = createAsyncThunk(
    'forecast/getByCity',
    async (cityValue: string) => {
        const hourlyData = await ForecastApi.getHourlyForecast(cityValue)
        const dailyData = await ForecastApi.getDailyForecast(cityValue)

        const data: IForecast = {
            value: {
                today: hourlyData,
                week: dailyData
            }
        }
        return data
    }
)

export const ForecastSlice = createSlice({
    name: "forecast",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getForecast.fulfilled, (state, action) => {
            state.value = action.payload.value
        })
    }
})
export const ForecastReducer = ForecastSlice.reducer