import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {ForecastReducer} from "./ForecastSlice";

const rootReducer = combineReducers({
    forecast: ForecastReducer
})

const rootStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}


export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof rootStore>
export type AppDispatch = AppStore['dispatch']

export const globalStore = rootStore()