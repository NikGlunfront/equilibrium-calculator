import {CharmActions} from './index';

export const CharmActionCreators = {
    setSomeCharmValue: (key, payload) => ({type: CharmActions.SET_CHARM_VALUE, key, payload}),
    setIsCalculatingCharm: (payload) => ({type: CharmActions.SET_IS_CHARM_CALCULATING, payload}),
    setCharmMax: () => ({type: CharmActions.SET_CHARM_MAX}),
    setCharmMin: () => ({type: CharmActions.SET_CHARM_MIN}),
    setCharmAvg: () => ({type: CharmActions.SET_CHARM_AVG}),
    setCharmResults: () => (dispatch) => {
        dispatch(CharmActionCreators.setCharmMax());
        dispatch(CharmActionCreators.setCharmMin());
        dispatch(CharmActionCreators.setCharmAvg());
    },
}