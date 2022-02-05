import { CalculatingActions } from ".";

export const CalculatingActionCreators = {
    setIsCalculating: (payload) => ({type: CalculatingActions.SET_IS_CALCULATING, payload}),
}