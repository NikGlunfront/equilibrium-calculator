const initialState = {
    isCalculating: false,
}

export const CalculatingActions = {
    SET_IS_CALCULATING: "SET_IS_CALCULATING",
}

export default function talentsReducer (state = initialState, action) {
    switch (action.type) {
        case CalculatingActions.SET_IS_CALCULATING:
            return {...state, isCalculating: action.payload};
        default:
            return state;
    }
}