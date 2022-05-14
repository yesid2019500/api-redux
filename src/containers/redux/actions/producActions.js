import { actionTypes } from "../contants/action-types"

// ACCIONES

export const setProducts = (product) => {
    return {
        type: actionTypes.SET_PRODUCTS,
        payload: product
    }
}

export const selectedProducts = (product) => {
    return {
        type: actionTypes.SELECTED_PRODUCTS,
        payload: product
    }
}