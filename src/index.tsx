import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'
import store from './s2-homeworks/hw10/bll/store'
import {Provider} from 'react-redux'
import HW1 from "./s2-homeworks/hw01/HW1";
import HW2 from "./s2-homeworks/hw02/HW2";
import HW3 from "./s2-homeworks/hw03/HW3";

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        {/*для дз 10*/}
        <Provider store={store}>
            <HW1/>
            <HW2/>
            <HW3/>
        </Provider>
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
