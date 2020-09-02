import { LOAD_HOME_DATA } from "./types";
import { HomeData } from "../constData/homeDetails";

export const loadHomeData = () => async dispatch => {
    dispatch({
        type: LOAD_HOME_DATA,
        payload: HomeData
    });
}