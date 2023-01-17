export type ActionType = IncrementActionType | ResetActionType | ChangePageActionType | SetErrorActionType
    | SetMaxValueActionType | SetStartValueActionType | SetCountActionType
export type CounterStateType = {
    counter: number
    maxValue: number
    startValue: number
    error: boolean
    page: boolean,
    maxInput: number
    startInput: number
}

const initialSate: CounterStateType = {
    counter: 0,
    error: false,
    maxInput: 5,
    maxValue: 5,
    page: true,
    startInput: 2,
    startValue: 2,
}

export enum ACTIONS_TYPE {
    INCREMENT_TYPE = 'Counter/INCREMENT_TYPE',
    RESET_TYPE = 'Counter/RESET_TYPE',
    CHANGE_PAGE = 'Counter/CHANGE_PAGE',
    SET_ERROR = 'Counter/SET_ERROR',
    SET_MAX_VALUE = 'Counter/SET_MAX_VALUE',
    SET_START_VALUE = 'Counter/SET_START_VALUE',
    SET_COUNT = 'Counter/SET_COUNT',
}

export const counterReducer = (state: CounterStateType = initialSate, action: ActionType): CounterStateType => {
    switch (action.type) {
        case ACTIONS_TYPE.INCREMENT_TYPE:
            return {...state, counter: action.payload.counter + 1}
        case ACTIONS_TYPE.SET_COUNT:
            return {...state, counter: action.payload.counter}
        case ACTIONS_TYPE.RESET_TYPE:
            return {...state, counter: state.startValue}
        case ACTIONS_TYPE.CHANGE_PAGE:
            return {...state, page: !state.page}
        case ACTIONS_TYPE.SET_ERROR:
            return {...state, error: action.payload.error}
        case ACTIONS_TYPE.SET_MAX_VALUE:
            return {...state, maxValue: action.payload.counter}
        case ACTIONS_TYPE.SET_START_VALUE:
            return {...state, startValue: action.payload.counter}
        default:
            return state
    }
}
type IncrementActionType = ReturnType<typeof IncrementAC>
export const IncrementAC = (counter: number) => {
    return {
        type: ACTIONS_TYPE.INCREMENT_TYPE,
        payload: {
            counter,
        },
    } as const
}
type SetCountActionType = ReturnType<typeof SetCountAC>
export const SetCountAC = (counter: number) => {
    return {
        type: ACTIONS_TYPE.SET_COUNT,
        payload: {
            counter,
        },
    } as const
}
type ResetActionType = ReturnType<typeof ResetAC>
export const ResetAC = () => {
    return {
        type: ACTIONS_TYPE.RESET_TYPE,
    } as const
}
type ChangePageActionType = ReturnType<typeof ChangePageAC>
export const ChangePageAC = () => {
    return {
        type: ACTIONS_TYPE.CHANGE_PAGE,
    } as const
}
type SetErrorActionType = ReturnType<typeof SetErrorAC>
export const SetErrorAC = (error: boolean) => {
    return {
        type: ACTIONS_TYPE.SET_ERROR,
        payload: {
            error,
        },
    } as const
}
type SetMaxValueActionType = ReturnType<typeof SetMaxValueAC>
export const SetMaxValueAC = (counter: number) => {
    return {
        type: ACTIONS_TYPE.SET_MAX_VALUE,
        payload: {
            counter,
        },
    } as const
}
type SetStartValueActionType = ReturnType<typeof SetStartValueAC>
export const SetStartValueAC = (counter: number) => {
    return {
        type: ACTIONS_TYPE.SET_START_VALUE,
        payload: {
            counter,
        },
    } as const
}

