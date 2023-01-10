import React, {ChangeEvent, DetailedHTMLProps, FC, InputHTMLAttributes, useCallback} from 'react';
import s from './Settings.module.css'
import {CustomButton} from "../CustomButton/CustomButton";
import {useDispatch, useSelector} from "react-redux";
import {
    ChangePageAC,
    SetCountAC,
    SetErrorAC,
    SetMaxValueAC,
    SetMValueAC,
    SetStartValueAC, SetSValueAC
} from "../../../state/counterReducer";
import {AppStoreType} from "../../../s2-homeworks/hw10/bll/store";
import SuperInputText from "../../../s2-homeworks/hw04/common/c1-SuperInputText/SuperInputText";
import {SuperInput} from "./SuperInput";

type SettingsPropsType = {}

export const Settings = (props: SettingsPropsType) => {

    const dispatch = useDispatch()
    const mValue = useSelector<AppStoreType, number>(state => state.counter.mValue)
    const sValue = useSelector<AppStoreType, number>(state => state.counter.sValue)
    const error = useSelector<AppStoreType, boolean>(state => state.counter.error)


    const onChangeHandlerMax = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        dispatch(SetErrorAC(false))
        let value = Number(event.currentTarget.value);
        dispatch(SetMValueAC(value))
        dispatch(SetErrorAC(validator(value, sValue)))
    }, [])

    const onChangeHandlerStart = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        dispatch(SetErrorAC(false))
        let value = Number(event.currentTarget.value);
        dispatch(SetSValueAC(value))
        dispatch(SetErrorAC(validator(mValue, value)))
    }, [])
    const validator = (mValue: number, sValue: number) => {
        debugger
        if (mValue < 0) return true
        if (sValue < 0) return true
        if (mValue <= sValue) return true
        else return false
        // if (mValue < 0) return true
        // return ((mValue < 0) && (sValue < 0)) ? mValue <= sValue : false
    }
    const onClickHandler = () => {
        dispatch(SetMaxValueAC(mValue))
        dispatch(SetStartValueAC(sValue))
        dispatch(SetCountAC(sValue))
        dispatch(ChangePageAC())
    }
    const inputClassName = error ? s.input + ' ' + s.disabled : s.input
    return (

        <div className={s.counter}>
            <div className={s.display}>
                <SuperInput type={'number'}
                            className={inputClassName}
                            onChange={onChangeHandlerMax}
                            value={mValue}
                            label={'max value:'}/>
                <SuperInput type={'number'}
                            className={inputClassName}
                            onChange={onChangeHandlerStart}
                            value={sValue}
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



