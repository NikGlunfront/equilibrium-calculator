const initialState = {
    isModalVisible: false,
}

export const ModalsActions = {
    SET_MODAL_VISIBILITY: 'SET_MODAL_VISIBILITY',
}


export default function modalWindowReducer (state = initialState, action) {
    switch (action.type) {
        case ModalsActions.SET_MODAL_VISIBILITY:
            return {...state, isModalVisible: action.payload};
    
        default:
            return state;
    }
}