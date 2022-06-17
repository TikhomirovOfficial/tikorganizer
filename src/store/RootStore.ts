import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {TodoReducer} from "./TodoSlice";
import {ForecastReducer} from "./ForecastSlice";

const rootReducer = combineReducers({
    todos: TodoReducer,
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