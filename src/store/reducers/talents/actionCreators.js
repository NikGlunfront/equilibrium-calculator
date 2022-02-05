import {TalentsActions} from './index';

export const TalentsActionCreators = {
    setSomeTalentsValue: (key, payload) => ({type: TalentsActions.SET_VALUE, key, payload}),
}