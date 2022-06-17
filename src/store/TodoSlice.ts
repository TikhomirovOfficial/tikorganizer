import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import ITodo from "../models/ITodo";

interface ITodos {
    value: ITodo[]
}

const initialState: ITodos = {
    value: []
}

export const TodoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<ITodo>) => {
            state.value.push(action.payload)
        }
    }


})
export const {addTodo} = TodoSlice.actions
export const TodoReducer = TodoSlice.reducer