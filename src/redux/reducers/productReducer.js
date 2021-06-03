import { ActionTypes } from "../constants/action_types";

const initialState ={
    products:[]
}


export const productsReducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case ActionTypes.SET_PRODUCT:

             return { ...state, products: payload };
    
        default:
            return state;
    }
    
};