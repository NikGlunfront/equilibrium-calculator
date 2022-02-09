const initialState = {
    intSunduk: {maxResult: 0, minResult: 0, avgResult: 0, maxConst: 2, minConst: 2, isPartnered: true},
    intMeshok: {maxResult: 0, minResult: 0, avgResult: 0, maxConst: 50, minConst: 10},
    bracelet1: {maxResult: 0, minResult: 0, avgResult: 0, maxConst: 5, minConst: 2},
    bracelet2: {maxResult: 0, minResult: 0, avgResult: 0, maxConst: 10, minConst: 6},
    intCase: {maxResult: 0, minResult: 0, avgResult: 0, maxConst: 10, minConst: 5, isPartnered: true},
    necklace1: {maxResult: 0, minResult: 0, avgResult: 0, maxConst: 5, minConst: 5},
    necklace2: {maxResult: 0, minResult: 0, avgResult: 0, maxConst: 10, minConst: 10},
    necklace3: {maxResult: 0, minResult: 0, avgResult: 0, maxConst: 20, minConst: 20},
    intAromaCase: {maxResult: 0, minResult: 0, avgResult: 0, maxConst: 5, minConst: 5, isPartnered: true},
    intAromaCase2: {maxResult: 0, minResult: 0, avgResult: 0, maxConst: 10, minConst: 10, isPartnered: true},
    intBuket: {maxResult: 0, minResult: 0, avgResult: 0, maxConst: 150, minConst: 50},
    intBuket2: {maxResult: 0, minResult: 0, avgResult: 0, maxConst: 9, minConst: 7, isPartnered: true},
    intRing: {maxResult: 0, minResult: 0, avgResult: 0, maxConst: 1, minConst: 1},
    intRing2: {maxResult: 0, minResult: 0, avgResult: 0, maxConst: 2, minConst: 2},
    udacha: {maxResult: 0, minResult: 0, avgResult: 0, maxConst: 0.4, minConst: 0.2},
    udachaBadge: {maxResult: 0, minResult: 0, avgResult: 0, maxConst: 4, minConst: 2},
    isCalculating: false,
    max: 0,
    min: 0,
    avg: 0
}

export const IntimacyActions = {
    SET_INT_VALUE: "SET_INT_VALUE",
    SET_INT_MAX : "SET_INT_MAX",
    SET_INT_MIN : "SET_INT_MIN",
    SET_INT_AVG : "SET_INT_AVG",
    SET_IS_INT_CALCULATING: "SET_IS_INT_CALCULATING",
    SET_INT_POINTS: "SET_INT_POINTS",
}

export default function charmReducer (state = initialState, action) {
    switch (action.type) {
        case IntimacyActions.SET_INT_VALUE: 
        return {...state, [action.key]: {...state[action.key], minResult: Math.floor(action.payload * state[action.key].minConst), maxResult: Math.floor(action.payload * state[action.key].maxConst), avgResult: Math.floor(action.payload * (state[action.key].maxConst + state[action.key].minConst) / 2)} }
            
        case IntimacyActions.SET_IS_INT_CALCULATING:
            return {...state, isCalculating: action.payload};

        case IntimacyActions.SET_INT_MAX:
            return {
                ...state,
                max: state.intSunduk.maxResult + state.intMeshok.maxResult + state.bracelet1.maxResult + state.bracelet2.maxResult + state.intCase.maxResult + state.necklace1.maxResult + state.necklace2.maxResult + state.necklace3.maxResult + state.intAromaCase.maxResult + state.intAromaCase2.maxResult + state.intBuket.maxResult + state.intBuket2.maxResult + state.intRing.maxResult + state.intRing2.maxResult + state.udacha.maxResult + state.udachaBadge.maxResult
            }

        case IntimacyActions.SET_INT_MIN:
            return {
                ...state,
                min: state.intSunduk.minResult + state.intMeshok.minResult + state.bracelet1.minResult + state.bracelet2.minResult + state.intCase.minResult + state.necklace1.minResult + state.necklace2.minResult + state.necklace3.minResult + state.intAromaCase.minResult + state.intAromaCase2.minResult + state.intBuket.minResult + state.intBuket2.minResult + state.intRing.minResult + state.intRing2.minResult + state.udacha.minResult + state.udachaBadge.minResult
            }

        case IntimacyActions.SET_INT_AVG:
            return {
                ...state,
                avg: state.intSunduk.avgResult + state.intMeshok.avgResult + state.bracelet1.avgResult + state.bracelet2.avgResult + state.intCase.avgResult + state.necklace1.avgResult + state.necklace2.avgResult + state.necklace3.avgResult + state.intAromaCase.avgResult + state.intAromaCase2.avgResult + state.intBuket.avgResult + state.intBuket2.avgResult + state.intRing.avgResult + state.intRing2.avgResult + state.udacha.avgResult + state.udachaBadge.avgResult
            }
    
        default:
            return state;
    }
}