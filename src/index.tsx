import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import './styles/freedom.css'
import App from './App';
import {Provider} from "react-redux";
import {globalStore} from "./store/RootStore";

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <Provider store={globalStore}>
        <App />
    </Provider>

);
