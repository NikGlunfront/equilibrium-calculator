import {TalentsActions} from './index';

export const TalentsActionCreators = {
    setSomeTalentsValue: (key, payload) => ({type: TalentsActions.SET_TALENTS_VALUE, key, payload}),
    setIsCalculatingTalents: (payload) => ({type: TalentsActions.SET_IS_TALENTS_CALCULATING, payload}),
    setTalentsMax: () => ({type: TalentsActions.SET_TALENTS_MAX}),
    setTalentsMin: () => ({type: TalentsActions.SET_TALENTS_MIN}),
    setTalentsAvg: () => ({type: TalentsActions.SET_TALENTS_AVG}),
    setTalentsResults: () => (dispatch) => {
        dispatch(TalentsActionCreators.setTalentsMax());
        dispatch(TalentsActionCreators.setTalentsMin());
        dispatch(TalentsActionCreators.setTalentsAvg());
    },
}