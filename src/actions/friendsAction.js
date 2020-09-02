import { LOAD_FRIENDS_DATA } from "./types";
import { FriendsData } from "../constData/friendsDetails";

export const loadFriendsData = () => async dispatch => {
    dispatch({
        type: LOAD_FRIENDS_DATA,
        payload: FriendsData
    });
}