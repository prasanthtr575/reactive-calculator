const calcReducer = (state = {
    num: null,
    lastValues: []
}, action) => {
    switch (action.type) {
        case "CAPTURE_KEY":
            state = {
                ...state,
                num: state.num ? state.num + action.payload : action.payload,
                lastValues: [...state.lastValues, action.payload]
            };
            break;
        case "CLEAR_ALL":
            state = {
                ...state,
                num: null,
                lastValues:[]
            };
            break;
        case "CLEAR_LAST":
            state = {
                ...state,
                num: state.num && state.num.length > 0 ? state.num.substring(0, state.num.length-1) : null
            };
            break;
    }
    return state;
};

export default calcReducer;