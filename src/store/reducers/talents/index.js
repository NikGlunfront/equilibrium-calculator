const initialState = {
    expBooks: 0,
    expToms: 0,
    expCase: 0,
    bigCase: 0,
    atkBadge: 0,
    naukaBadge: 0,
    heartBadge: 0,
    politikaBadge: 0,
    sixBadge: 0,
}

export const TalentsActions = {
    SET_VALUE: "SET_VALUE",
    SET_IS_TALENTS_CALCULATING: "SET_IS_TALENTS_CALCULATING",
}

export default function talentsReducer (state = initialState, action) {
    switch (action.type) {
        case TalentsActions.SET_VALUE:
            return {...state, [action.key]: action.payload};

        case TalentsActions.SET_IS_TALENTS_CALCULATING:
            return {...state, isCalculating: action.payload};
    
        default:
            return state;
    }
}