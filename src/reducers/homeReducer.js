import { LOAD_HOME_DATA } from "../actions/types";

const INITIAL_STATE = {
    homeItems: [],
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case LOAD_HOME_DATA:
            return { ...state, homeItems: action.payload }
        default:
            return state;
    }
}