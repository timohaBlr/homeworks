import React, {ChangeEvent, useState} from 'react';
import s from './Settings.module.css'
import {CustomButton} from "../CustomButton/CustomButton";

type SettingsPropsType = {
    error: boolean
    setError: (error: boolean) => void
    maxValue: number
    setMaxValue: (value: number) => void
    startValue: number
    setStartValue: (value: number) => void
    setCounter: (counter: number) => void
    setPage: (page: boolean) => void
}

export const Settings = (props: SettingsPropsType) => {
    const [mValue, setMValue] = useState<number>(1);
    const [sValue, setSValue] = useState<number>(0);

    const onChangeHandlerMax = (event: ChangeEvent<HTMLInputElement>) => {
        props.setError(false)
        let value = Number(event.currentTarget.value);
        setMValue(value)
        props.setError(proverka(value, sValue))
    }
    const onChangeHandlerStart = (event: ChangeEvent<HTMLInputElement>) => {
        props.setError(false)
        let value = Number(event.currentTarget.value);
        setSValue(value)
        props.setError(proverka(mValue, value))
    }
    const proverka = (maxValue: number, startValue: number) => {
        return (maxValue < 0 || startValue < 0) ? true : maxValue <= startValue
    }
    const onClickHandler = () => {
        props.setMaxValue(mValue)
        props.setStartValue(sValue)
        props.setCounter(sValue)
        localStorage.setItem('maxValue', JSON.stringify(mValue))
        localStorage.setItem('startValue', JSON.stringify(sValue))
        props.setPage(true)
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

