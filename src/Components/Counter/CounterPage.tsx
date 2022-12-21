import React from 'react';
import {Settings} from "./Settings/Settings";
import {Counter} from "./Counter/Counter";

export const CounterPage = () => {
    const style = {
        backgroundColor: '#40646c',
        display: 'flex',
        paddingTop: '100px',
        paddingBottom: '200px',
        justifyContent: 'center',
        alignSelf: 'center',
    }

    return (
        <div style={style}>
            <Settings />
            <Counter />
        </div>
    );
};

