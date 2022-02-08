const initialState = {
    expBooks: {maxResult: 0, minResult: 0, avgResult: 0, maxConst: 0.25, minConst: 0.25},
    expToms: {maxResult: 0, minResult: 0, avgResult: 0, maxConst: 1, minConst: 1},
    expCase: {maxResult: 0, minResult: 0, avgResult: 0, maxConst: 0.5, minConst: 0.05},
    bigCase: {maxResult: 0, minResult: 0, avgResult: 0, maxConst: 6, minConst: 1},
    atkBadge: {maxResult: 0, minResult: 0, avgResult: 0, maxConst: 1, minConst: 1},
    naukaBadge: {maxResult: 0, minResult: 0, avgResult: 0, maxConst: 1, minConst: 1},
    heartBadge: {maxResult: 0, minResult: 0, avgResult: 0, maxConst: 1, minConst: 1},
    politikaBadge: {maxResult: 0, minResult: 0, avgResult: 0, maxConst: 1, minConst: 1},
    sixBadge: {maxResult: 0, minResult: 0, avgResult: 0, maxConst: 6, minConst: 6},
    points: {maxResult: 0, minResult: 0, avgResult: 0, maxConst: 0.25, minConst: 0.25},
    isCalculating: false,
    max: 0,
    min: 0,
    avg: 0
}

export const TalentsActions = {
    SET_VALUE: "SET_VALUE",
    SET_MAX : "SET_MAX",
    SET_MIN : "SET_MIN",
    SET_AVG : "SET_AVG",
    SET_IS_TALENTS_CALCULATING: "SET_IS_TALENTS_CALCULATING",
    SET_POINTS: "SET_POINTS",
}

export default function talentsReducer (state = initialState, action) {
    switch (action.type) {
        case TalentsActions.SET_VALUE:
            return {...state, [action.key]: {...state[action.key], minResult: Math.floor(action.payload * state[action.key].minConst), maxResult: Math.floor(action.payload * state[action.key].maxConst), avgResult: Math.floor(action.payload * (state[action.key].maxConst + state[action.key].minConst) / 2)} }

        case TalentsActions.SET_IS_TALENTS_CALCULATING:
            return {...state, isCalculating: action.payload};

        case TalentsActions.SET_MAX:
            return {
                ...state, 
                max: state.expBooks.maxResult + state.expToms.maxResult + state.expCase.maxResult + state.bigCase.maxResult + state.atkBadge.maxResult + state.naukaBadge.maxResult + state.heartBadge.maxResult + state.politikaBadge.maxResult + state.sixBadge.maxResult + state.points.maxResult
            }

        case TalentsActions.SET_MIN:
            return {
                ...state, 
                min: state.expBooks.minResult + state.expToms.minResult + state.expCase.minResult + state.bigCase.minResult + state.atkBadge.minResult + state.naukaBadge.minResult + state.heartBadge.minResult + state.politikaBadge.minResult + state.sixBadge.minResult + state.points.minResult
            }

        case TalentsActions.SET_AVG:
            return {
                ...state, 
                avg: state.expBooks.avgResult + state.expToms.avgResult + state.expCase.avgResult + state.bigCase.avgResult + state.atkBadge.avgResult + state.naukaBadge.avgResult + state.heartBadge.avgResult + state.politikaBadge.avgResult + state.sixBadge.avgResult + state.points.avgResult
            }
    
        default:
            return state;
    }
}