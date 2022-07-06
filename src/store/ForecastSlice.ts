import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IForecast} from "../models/IForecast";
import {ForecastApi} from "../http/ForecastApi";
import {addToStorage} from "../utils/LocalStorageExplorer";

const initialState = {
    value: {
        today: [],
        week: [],
        city: ''
    },
    isLoading: false
} as IForecast

export const getForecast = createAsyncThunk(
    'forecast/getByCity',
    async (cityValue: string) => {
        const hourlyData = await ForecastApi.getHourlyForecast(cityValue)
        const dailyData = await ForecastApi.getDailyForecast(cityValue)

        const data: IForecast = {
            value: {
                today: hourlyData,
                week: dailyData,
                city: cityValue
            },
            isLoading: false
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
            addToStorage('target_city', action.payload.value.city)
            state.isLoading = false
        })
        builder.addCase(getForecast.pending, (state) => {
            state.isLoading = true
        })
    }
})
export const ForecastReducer = ForecastSlice.reducer