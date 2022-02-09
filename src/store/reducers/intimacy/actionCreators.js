import {IntimacyActions} from './index';

export const IntimacyActionCreators = {
    setSomeIntimacyValue: (key, payload) => ({type: IntimacyActions.SET_INT_VALUE, key, payload}),
    setIsCalculatingIntimacy: (payload) => ({type: IntimacyActions.SET_IS_INT_CALCULATING, payload}),
    setIntimacyMax: () => ({type: IntimacyActions.SET_INT_MAX}),
    setIntimacyMin: () => ({type: IntimacyActions.SET_INT_MIN}),
    setIntimacyAvg: () => ({type: IntimacyActions.SET_INT_AVG}),
    setIntimacyResults: () => (dispatch) => {
        dispatch(IntimacyActionCreators.setIntimacyMax());
        dispatch(IntimacyActionCreators.setIntimacyMin());
        dispatch(IntimacyActionCreators.setIntimacyAvg());
    },
}