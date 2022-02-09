const initialState = {
    partners: 0,
}

export const PartnerActions = {
    CHANGE_AMOUNT: 'CHANGE_AMOUNT',
}


export default function languageReducer (state = initialState, action) {
    switch (action.type) {
        case PartnerActions.CHANGE_AMOUNT:
            return {...state, partners: action.payload};
    
        default:
            return state;
    }
}