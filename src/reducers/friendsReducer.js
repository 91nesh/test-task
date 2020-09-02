import { LOAD_FRIENDS_DATA } from "../actions/types";

const INITIAL_STATE = {
    friendsData: [],
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case LOAD_FRIENDS_DATA:
            return { ...state, friendsData: action.payload }
        default:
            return state;
    }
}