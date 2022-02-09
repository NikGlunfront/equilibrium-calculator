const initialState = {
    sunduk: {maxResult: 0, minResult: 0, avgResult: 0, maxConst: 5, minConst: 5, isPartnered: true},
    meshok: {maxResult: 0, minResult: 0, avgResult: 0, maxConst: 50, minConst: 10},
    greben1: {maxResult: 0, minResult: 0, avgResult: 0, maxConst: 5, minConst: 2},
    greben2: {maxResult: 0, minResult: 0, avgResult: 0, maxConst: 10, minConst: 6},
    greben3: {maxResult: 0, minResult: 0, avgResult: 0, maxConst: 20, minConst: 11},
    brosh1: {maxResult: 0, minResult: 0, avgResult: 0, maxConst: 5, minConst: 5},
    brosh2: {maxResult: 0, minResult: 0, avgResult: 0, maxConst: 10, minConst: 10},
    brosh3: {maxResult: 0, minResult: 0, avgResult: 0, maxConst: 20, minConst: 20},
    casualCase: {maxResult: 0, minResult: 0, avgResult: 0, maxConst: 10, minConst: 5, isPartnered: true},
    bigCharmCase: {maxResult: 0, minResult: 0, avgResult: 0, maxConst: 10, minConst: 10, isPartnered: true},
    aromat: {maxResult: 0, minResult: 0, avgResult: 0, maxConst: 150, minConst: 50},
    aromatCase: {maxResult: 0, minResult: 0, avgResult: 0, maxConst: 9, minConst: 7, isPartnered: true},
    ears: {maxResult: 0, minResult: 0, avgResult: 0, maxConst: 1, minConst: 1},
    earsx2: {maxResult: 0, minResult: 0, avgResult: 0, maxConst: 2, minConst: 2},
    isCalculating: false,
    max: 0,
    min: 0,
    avg: 0
}

export const CharmActions = {
    SET_CHARM_VALUE: "SET_CHARM_VALUE",
    SET_CHARM_MAX : "SET_CHARM_MAX",
    SET_CHARM_MIN : "SET_CHARM_MIN",
    SET_CHARM_AVG : "SET_CHARM_AVG",
    SET_IS_CHARM_CALCULATING: "SET_IS_CHARM_CALCULATING",
    SET_CHARM_POINTS: "SET_CHARM_POINTS",
}

export default function charmReducer (state = initialState, action) {
    switch (action.type) {
        case CharmActions.SET_CHARM_VALUE: 
        return {...state, [action.key]: {...state[action.key], minResult: Math.floor(action.payload * state[action.key].minConst), maxResult: Math.floor(action.payload * state[action.key].maxConst), avgResult: Math.floor(action.payload * (state[action.key].maxConst + state[action.key].minConst) / 2)} }
            
        case CharmActions.SET_IS_CHARM_CALCULATING:
            return {...state, isCalculating: action.payload};

        case CharmActions.SET_CHARM_MAX:
            return {
                ...state,
                max: state.sunduk.maxResult + state.meshok.maxResult + state.greben1.maxResult + state.greben2.maxResult + state.greben3.maxResult + state.brosh1.maxResult + state.brosh2.maxResult + state.brosh3.maxResult + state.bigCharmCase.maxResult + state.aromat.maxResult + state.aromatCase.maxResult + state.ears.maxResult + state.earsx2.maxResult + state.casualCase.maxResult
            }

        case CharmActions.SET_CHARM_MIN:
            return {
                ...state,
                min: state.sunduk.minResult + state.meshok.minResult + state.greben1.minResult + state.greben2.minResult + state.greben3.minResult + state.brosh1.minResult + state.brosh2.minResult + state.brosh3.minResult + state.bigCharmCase.minResult + state.aromat.minResult + state.aromatCase.minResult + state.ears.minResult + state.earsx2.minResult + state.casualCase.minResult
            }

        case CharmActions.SET_CHARM_AVG:
            return {
                ...state, 
                avg: state.sunduk.avgResult + state.meshok.avgResult + state.greben1.avgResult + state.greben2.avgResult + state.greben3.avgResult + state.brosh1.avgResult + state.brosh2.avgResult + state.brosh3.avgResult + state.bigCharmCase.avgResult + state.aromat.avgResult + state.aromatCase.avgResult + state.ears.avgResult + state.earsx2.avgResult + state.casualCase.avgResult
            }
    
        default:
            return state;
    }
}