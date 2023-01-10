import React  from 'react';
import {Settings} from "./Settings/Settings";
import {Counter} from "./Counter/Counter";
import { useSelector} from "react-redux";
import {AppStoreType} from "../../s2-homeworks/hw10/bll/store";

export const CounterPage = () => {
    const style = {
        backgroundColor: '#40646c',
        display: 'flex',
        paddingTop: '100px',
        paddingBottom: '200px',
        justifyContent: 'center',
        alignSelf: 'center',
    }

    const page = useSelector<AppStoreType, boolean>(state => state.counter.page)

    return (
        <div style={style}>
            {page
                ? <Counter
                />
                : <Settings
                />}

        </div>
    );
};

