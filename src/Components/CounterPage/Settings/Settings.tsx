import React, {useCallback, ChangeEvent} from 'react';
import s from './Settings.module.css'
import {CustomButton} from "../CustomButton/CustomButton";
import {useDispatch, useSelector} from "react-redux";
import {
    ChangePageAC,
    SetCountAC,
    SetErrorAC,
    SetMaxValueAC,
    SetStartValueAC,
} from "../../../state/counterReducer";
import {AppStoreType} from "../../../s2-homeworks/hw10/bll/store";
import {SuperInput} from "./SuperInput";

type SettingsPropsType = {}

export const Settings = (props: SettingsPropsType) => {

    const dispatch = useDispatch()
    const maxValue = useSelector<AppStoreType, number>(state => state.counter.maxValue)
    const startValue = useSelector<AppStoreType, number>(state => state.counter.startValue)
    const error = useSelector<AppStoreType, boolean>(state => state.counter.error)


    const onChangeHandlerMax = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        dispatch(SetErrorAC(false))
        let value = Number(event.currentTarget.value);
        dispatch(SetErrorAC(validator(value, startValue)))
        dispatch(SetMaxValueAC(value))
    }, [maxValue, startValue])


    const onChangeHandlerStart = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        dispatch(SetErrorAC(false))
        let value = Number(event.currentTarget.value);
        dispatch(SetErrorAC(validator(maxValue, value)))
        dispatch(SetStartValueAC(value))
    }, [maxValue, startValue])

    const validator = useCallback((maxValue: number, startValue: number) => {
        if (maxValue < 0) return true
        else if (startValue < 0) return true
        else if (maxValue <= startValue) return true
        else return false
    }, [startValue, maxValue])

    const onClickHandler = () => {
        dispatch(SetCountAC(startValue))
        dispatch(ChangePageAC())
    }
    const inputClassName = error ? s.input + ' ' + s.disabled : s.input
    return (

        <div className={s.counter}>
            <div className={s.display}>
                <SuperInput
                    // type="text"
                    // inputMode="numeric" pattern="[0-9]*"
                    type={'number'}
                    className={inputClassName}
                    onChange={onChangeHandlerMax}
                    value={maxValue}
                    label={'max value:'}/>
                <SuperInput type={'number'}
                            className={inputClassName}
                            onChange={onChangeHandlerStart}
                            value={startValue}
                            label={'start value:'}/>
            </div>
            <div className={s.buttons}>
                <CustomButton
                    onClick={onClickHandler}
                    disabled={error}>
                    Set
                </CustomButton>
            </div>
        </div>

    );
};



