import React, {useEffect, useState} from 'react';
import {Settings} from "./Settings/Settings";
import {Counter} from "./Counter/Counter";

export const CounterPage = () => {
    const style = {
        backgroundColor: '#40646c',
        display: 'flex',
        paddingTop: '100px',
        paddingBottom: '200px',
        justifyContent: 'center',
        alignSelf: 'center',
    }
    const [counter, setCounter] = useState<number>(0);
    const [maxValue, setMaxValue] = useState<number>(1);
    const [startValue, setStartValue] = useState<number>(0);
    const [error, setError] = useState<boolean>(false);
    const [page, setPage] = useState<boolean>(true) // этот стейт для условного рендеринга

    useEffect(() => {   // для извлечения и установки данных из localStorage
        let value = localStorage.getItem('maxValue')
        if (value) {
            setMaxValue(JSON.parse(value))
        }
        let value1 = localStorage.getItem('startValue')
        if (value1) {
            setCounter(JSON.parse(value1))
        }
        let value2 = localStorage.getItem('startValue')
        if (value2) {
            setStartValue(JSON.parse(value2))
        }
    }, [])

    return (
        <div style={style}>
            {page
                ? <Counter
                    counter={counter}
                    setCounter={setCounter}
                    maxValue={maxValue}
                    startValue={startValue}
                    error={error}
                    setPage={setPage}
                />
                : <Settings
                    error={error}
                    setError={setError}
                    maxValue={maxValue}
                    setMaxValue={setMaxValue}
                    startValue={startValue}
                    setStartValue={setStartValue}
                    setCounter={setCounter}
                    setPage={setPage}
                />}

        </div>
    );
};

