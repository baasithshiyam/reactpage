import {ActionTypes} from "../constants/action_types"

export const setProducts =(products) =>{
    return{
        type:ActionTypes.SET_PRODUCT,
        payload: products

    }
}

export const selectedProducts =(products) =>{
    return{
        type:ActionTypes.SET_PRODUCT,
        payload: products

    }
}

