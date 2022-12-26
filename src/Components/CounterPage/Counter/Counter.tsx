import React from 'react';
import s from './Counter.module.css'
import {CustomButton} from "../CustomButton/CustomButton";

type CounterPropsType = {
    counter: number
    setCounter: (count: number) => void
    startValue: number
    maxValue: number
    error: boolean
    setPage: (page: boolean) => void
}


export const Counter = (props: CounterPropsType) => {

    const incrementHandler = () => {
        props.setCounter(props.counter + 1)
    }
    const resetHandler = () => {
        props.setCounter(props.startValue)
    }
    const setHandler = () => {
        props.setPage(false)
    }

    const butIncDisabled = props.error ? props.error : props.counter === props.maxValue
    const butResDisabled = props.error ? props.error : !props.counter

    const counterClassName = props.counter !== props.maxValue
        ? s.display
        : s.display + ' ' + s.disabled
    const errorClassName = props.error
        ? s.display + ' ' + s.error
        : s.display

    return (
        <div className={s.counter}> {props.error
            ? <div className={errorClassName}>incorrect value</div>
            : <div className={counterClassName}>
                {props.counter}
            </div>}

            <div className={s.buttons}>
                <CustomButton
                    onClick={incrementHandler}
                    disabled={butIncDisabled}>
                    Inc
                </CustomButton>
                <CustomButton
                    onClick={resetHandler}
                    disabled={butResDisabled}
                >
                    Reset
                </CustomButton>
                <CustomButton
                    onClick={setHandler}
                >
                    Set
                </CustomButton>
            </div>
        </div>
    );
};

