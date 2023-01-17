export type InitialStateType = typeof initState

const initState = {
    isLoading: false,
}

export const loadingReducer = (state:InitialStateType = initState, action: LoadingActionType): InitialStateType => { // fix any
    switch (action.type) {
        // пишет студент  // need to fix
            case 'CHANGE_LOADING' : {

                return {...state, isLoading: action.isLoading}
            }
        default:
            return state
    }
}

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})

