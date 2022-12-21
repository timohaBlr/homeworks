import React from 'react';
import s from './Counter.module.css'
import {CustomButton} from "../CustomButton/CustomButton";

type CounterPropsType = {
    counter: number
    setCounter: (count: number) => void
    startValue: number
    maxValue: number
}


export const Counter = (props: CounterPropsType) => {

    const incrementHandler = () => {
        props.setCounter(props.counter + 1)
    }
    const resetHandler = () => {
        props.setCounter(props.startValue)
    }


    let counterClassName = props.counter !== props.maxValue
        ? s.display
        : s.display + ' ' + s.disabled
    return (
        <div className={s.counter}>
            <div className={counterClassName}>
                {props.counter}
            </div>
            <div className={s.buttons}>
                <CustomButton
                    onClick={incrementHandler}
                    disabled={props.counter === props.maxValue}>
                    Inc
                </CustomButton>
                <CustomButton
                    onClick={resetHandler}
                    disabled={!props.counter}
                >
                    Reset
                </CustomButton>
            </div>
        </div>
    );
};

