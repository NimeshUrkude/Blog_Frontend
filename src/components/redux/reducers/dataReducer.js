import {ActionType} from "../constants/action-types";

const initialState = {
    dataary:[],
}

export const dataReducer = function(state = initialState,action){
    switch(action.type){
        case ActionType.SET_DATA:
            return {...state,data:action.payload};

        default:
            return state;
    }
}