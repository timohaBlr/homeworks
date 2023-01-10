import React, {ChangeEvent} from 'react';
import s from './Settings.module.css'
import {CustomButton} from "../CustomButton/CustomButton";
import {useDispatch, useSelector} from "react-redux";
import {
    ChangePageAC,
    IncrementAC,
    SetErrorAC,
    SetMaxValueAC,
    SetMValueAC,
    SetStartValueAC, SetSValueAC
} from "../../../state/counterReducer";
import {AppStoreType} from "../../../s2-homeworks/hw10/bll/store";

type SettingsPropsType = {
    error: boolean
}

export const Settings = (props: SettingsPropsType) => {

    const dispatch = useDispatch()
    const mValue = useSelector<AppStoreType, number>(state => state.counter.mValue)
    const sValue = useSelector<AppStoreType, number>(state => state.counter.sValue)


    const onChangeHandlerMax = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(SetErrorAC(false))
        let value = Number(event.currentTarget.value);
        dispatch(SetMValueAC(value))
        dispatch(SetErrorAC(proverka(value, sValue)))
    }
    const onChangeHandlerStart = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(SetErrorAC(false))
        let value = Number(event.currentTarget.value);
        dispatch(SetSValueAC(value))
        dispatch(SetErrorAC(proverka(mValue, value)))
    }
    const proverka = (maxValue: number, startValue: number) => {
        return (maxValue < 0 || startValue < 0) ? true : maxValue <= startValue
    }
    const onClickHandler = () => {
        dispatch(SetMaxValueAC(mValue))
        dispatch(SetStartValueAC(sValue))
        dispatch(IncrementAC(sValue))
        dispatch(ChangePageAC())
    }
    return (

        <div className={s.counter}>
            <div className={s.display}>
                <div>max value:
                    <input type={'number'}
                           className={s.input}
                           onChange={onChangeHandlerMax}
                           value={mValue}>
                    </input>
                </div>
                <div> start value:
                    <input type={"number"}
                           className={s.input}
                           onChange={onChangeHandlerStart}
                           value={sValue}>
                    </input>
                </div>
            </div>
            <div className={s.buttons}>
                <CustomButton
                    onClick={onClickHandler}
                    disabled={false}>
                    Set
                </CustomButton>
            </div>
        </div>

    );
};

