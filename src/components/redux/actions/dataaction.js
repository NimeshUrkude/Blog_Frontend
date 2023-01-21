import {ActionType} from "../constants/action-types";

export const setData = function(data){
    return{
        type:ActionType.SET_DATA,
        payload:data,
    };
};
