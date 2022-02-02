const initialState = {
    language: 'rus',
}

export const LanguageActions = {
    CHANGE_LANGUAGE: 'CHANGE_LANGUAGE',
}


export default function languageReducer (state = initialState, action) {
    switch (action.type) {
        case LanguageActions.CHANGE_LANGUAGE:
            return {...state, language: action.payload};
    
        default:
            return state;
    }
}