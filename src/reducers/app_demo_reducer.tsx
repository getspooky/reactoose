import {GET_APP_DEMO} from "../actions/types";

const initialState = {
    users: []
};

const app_demo_reducer = function(state = initialState,action) {
    switch (action.type) {
        case GET_APP_DEMO:
            return {
                ...state.users
            };
        default:
            return state;
    }
};

export default app_demo_reducer;