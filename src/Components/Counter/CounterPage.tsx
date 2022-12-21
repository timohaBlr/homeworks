import React, { useState} from 'react';
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
   /* let maValue: number = 0;
    useEffect(() => {
        let value = localStorage.getItem('maxValue')
        if (value) {
            maValue=JSON.parse(value)
        }
    }, [maValue])*/
    return (
        <div style={style}>
            <Settings
                error={error}
                setError={setError}
                maxValue={maxValue}
                setMaxValue={setMaxValue}
                startValue={startValue}
                setStartValue={setStartValue}
                setCounter={setCounter}
            />
            <Counter
                counter={counter}
                setCounter={setCounter}
                maxValue={maxValue}
                startValue={startValue}/>
        </div>
    );
};

