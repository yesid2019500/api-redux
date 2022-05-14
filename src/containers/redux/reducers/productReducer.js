import { actionTypes } from "../contants/action-types";

const initialSate = {
    products: [
    //     {
    //     id: 1,
    //     title: "hey people",
    //     category: "programmer"
    // }
    ]
}

// vamos a desetructura del action el type y el payload

export const productReducer = (state = initialSate, { type, payload } ) => {
    switch (type) {
        case actionTypes.SET_PRODUCTS:
            return {
                ...state, products:payload
            }
            
        default:
           return state;
    }
}


// esta es para establecer la imagene seleccionada

export const selectedProductReducer = (state= {}, {type, payload}) => {
    switch (type) {
        case actionTypes.SELECTED_PRODUCTS:
            return {
                ...state,
                ...payload
            } 
    
        default:
            return state;
    }
}