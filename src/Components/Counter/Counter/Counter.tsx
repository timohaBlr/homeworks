import React, {useEffect, useState} from 'react';
import s from './Counter.module.css'
import {CustomButton} from "../CustomButton/CustomButton";

type CounterPropsType = {}


export const Counter = (props: CounterPropsType) => {
    const [counter, setCounter] = useState<number>(0)


    useEffect(() => {
        let value = localStorage.getItem('startValue')
        if (value) {
            setCounter(JSON.parse(value))
        }
    }, )

    const incrementHandler = () => {
        setCounter(counter + 1)
    }
    const resetHandler = () => {
        setCounter(0)
    }

    let counterClassName = counter !== 5
        ? s.display
        : s.display + ' ' + s.disabled
    return (
        <div className={s.counter}>
            <div className={counterClassName}>
                {counter}
            </div>
            <div className={s.buttons}>
                <CustomButton
                    onClick={incrementHandler}
                    disabled={counter === 5}>
                    Inc
                </CustomButton>
                <CustomButton
                    onClick={resetHandler}
                    disabled={!counter}
                >
                    Reset
                </CustomButton>
            </div>
        </div>
    );
};

