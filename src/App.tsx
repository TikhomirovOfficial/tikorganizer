import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {addTodo} from "./store/TodoSlice";
import {addToStorage} from "./utils/LocalStorageExplorer";
import {getForecast} from "./store/ForecastSlice";

const App = () => {
    const [titleTodo, setTitleTodo] = useState<string>('')
    const dispatch = useAppDispatch()
    const todos = useAppSelector(state => state.todos.value)

    const handleAddTodo = () => {
        dispatch(addTodo({id: Date.now(), completed: false, title: titleTodo}))
    }

    useEffect(() => {
        dispatch(getForecast('Moscow'))
    }, [])

    useEffect(() => {
        addToStorage('todos', todos)
    }, [todos])

    return (
        <div className="w-100p f-center-row">
            <div>
                <input type="text" onChange={event => setTitleTodo(event.target.value)}/>
                <button onClick={handleAddTodo}>
                    Добавить
                </button>
            </div>

        </div>
    );
};

export default App;
