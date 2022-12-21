import React, {ChangeEvent, useState} from 'react';
import s from './Settings.module.css'
import {CustomButton} from "../CustomButton/CustomButton";

type SettingsPropsType = {

}

export const Settings = (props: SettingsPropsType) => {
    const [maxValue, setMaxValue] = useState<number>(1);
    const [startValue, setStartValue] = useState<number>(0);
    const [error, setError] = useState<boolean>(false);

    const onChangeHandlerMax = (event: ChangeEvent<HTMLInputElement>) => {
        setError(false)
        let value = Number(event.currentTarget.value);
        setMaxValue(value)
        setError(proverka(value, startValue))
    }
    const onChangeHandlerStart = (event: ChangeEvent<HTMLInputElement>) => {
        setError(false)
        let value = Number(event.currentTarget.value);
        setStartValue(value)
        setError(proverka(maxValue, value))
    }
    const proverka = (maxValue: number, startValue: number) => {
        return (maxValue < 0 || startValue < 0) ? true : maxValue <= startValue
    }
const onClickHandler = () => {
    localStorage.setItem('maxValue', JSON.stringify(maxValue))
    localStorage.setItem('startValue', JSON.stringify(startValue))
    }
    return (

        <div className={s.counter}>
            <div className={s.display}>
                <div>max value:
                    <input type={'number'}
                           className={s.input}
                           onChange={onChangeHandlerMax}
                           value={maxValue}>
                    </input>
                </div>
                <div> start value:
                    <input type={"number"}
                           className={s.input}
                           onChange={onChangeHandlerStart}
                           value={startValue}>
                    </input>
                </div>

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

