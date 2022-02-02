import { LanguageActions } from ".";

export const LanguageActionCreators = {
    changeLanguageAction: (payload) => ({type: LanguageActions.CHANGE_LANGUAGE, payload: payload}),
}