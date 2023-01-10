import {loadingReducer} from './loadingReducer'
import {combineReducers, legacy_createStore} from 'redux'
import {themeReducer} from '../../hw12/bll/themeReducer'
import {counterReducer} from "../../../state/counterReducer";
import {loadState, saveState} from "../../../state/localStorage/localStorage";
import {debounce} from "@mui/material";

export const reducers = combineReducers({
    counter: counterReducer,
    loading: loadingReducer, // hw10
    theme: themeReducer, // hw12
})
const persistedState = loadState();
const store = legacy_createStore(reducers, persistedState)

store.subscribe(debounce(() => {
//задержка 1 секунда для обновления стэйта в localStorage
    saveState({
        counter: {
            counter: store.getState().counter.counter,
            error: store.getState().counter.error,
            mValue: store.getState().counter.mValue,
            maxValue: store.getState().counter.maxValue,
            page: store.getState().counter.page,
            sValue: store.getState().counter.sValue,
            startValue: store.getState().counter.startValue,
        },
        loading: undefined,
        theme: undefined,
    })
}, 1000))

export type AppStoreType = ReturnType<typeof reducers>


// @ts-ignore
window.store = store // for dev // для того чтобы автотесты видели состояние данных
export default store;