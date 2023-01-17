import React, {useCallback} from 'react';
import s from './Counter.module.css'
import {CustomButton} from "../CustomButton/CustomButton";
import {useDispatch, useSelector} from "react-redux";
import {ChangePageAC,  ResetAC, IncrementAC} from "../../../state/counterReducer";
import {AppStoreType} from "../../../s2-homeworks/hw10/bll/store";

type CounterPropsType = {
    // error: boolean
}


export const Counter = (props: CounterPropsType) => {
    const dispatch = useDispatch()
    const counter = useSelector<AppStoreType, number>(state => state.counter.counter)
    const maxValue = useSelector<AppStoreType, number>(state => state.counter.maxValue)
    const startValue = useSelector<AppStoreType, number>(state => state.counter.startValue)
    // const error = useSelector<AppStoreType, boolean>(state => state.counter.error)

    const incrementHandler = useCallback(() => {
        dispatch(IncrementAC(counter))
    }, [counter])
    const resetHandler = useCallback(() => {
        dispatch(ResetAC())
    }, [])
    const setHandler = useCallback(() => {
        dispatch(ChangePageAC())
    }, [])


    const counterClassName = counter !== maxValue
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
                    disabled={counter === maxValue}>
                    Inc
                </CustomButton>
                <CustomButton
                    onClick={resetHandler}
                    disabled={counter === startValue}
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

