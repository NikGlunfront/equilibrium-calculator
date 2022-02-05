import {TalentsActions} from './index';

export const TalentsActionCreators = {
    setSomeTalentsValue: (key, payload) => ({type: TalentsActions.SET_VALUE, key, payload}),
    setIsCalculatingTalents: (payload) => ({type: TalentsActions.SET_IS_TALENTS_CALCULATING, payload}),
}