import React from 'react';
import s from './Counter.module.css'
import {CustomButton} from "../CustomButton/CustomButton";
import {useDispatch, useSelector} from "react-redux";
import {ChangePageAC, IncrementAC, ResetAC} from "../../../state/counterReducer";
import {AppStoreType} from "../../../s2-homeworks/hw10/bll/store";

type CounterPropsType = {
    error: boolean
}


export const Counter = (props: CounterPropsType) => {
    const dispatch = useDispatch()
    const counter = useSelector<AppStoreType, number>(state => state.counter.counter)
    const maxValue = useSelector<AppStoreType, number>(state => state.counter.maxValue)

    const incrementHandler = () => {
        dispatch(IncrementAC(counter + 1))
    }
    const resetHandler = () => {
        dispatch(ResetAC())
    }
    const setHandler = () => {
        dispatch(ChangePageAC())
    }

    const butIncDisabled = props.error ? props.error : counter === maxValue
    const butResDisabled = props.error ? props.error : !counter

    const counterClassName = counter !== maxValue
        ? s.display
        : s.display + ' ' + s.disabled
    const errorClassName = props.error
        ? s.display + ' ' + s.error
        : s.display

    return (
        <div className={s.counter}> {props.error
            ? <div className={errorClassName}>incorrect value</div>
            : <div className={counterClassName}>
                {counter}
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

