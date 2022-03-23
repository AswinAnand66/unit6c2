import { sortProducts } from "./actions"
import { GET_PRODUCT_DATA, GET_PRODUCT_REQ, SORT_PRODUCTS, SORT_PRODUCTS_BY_ASC, SORT_PRODUCTS_BY_DSC } from "./actionTypes"


const initState = {
    products:[],
    isLoading:false,
    isError:false
}

export const Reducer = (state=initState,action)=>{
    
    
    // add the switch statement for different actions
switch(action.type){
    
    case GET_PRODUCT_REQ:
        console.log("payload",action.payload)
        return {
            ...state,
            products:action.payload
        }

    case SORT_PRODUCTS_BY_ASC:
       console.log("inn")
       console.log("payload",action.payload)
        return{
            ...state,
            products:action.payload
        }
    case SORT_PRODUCTS_BY_DSC:
        
        return{
            ...state,
            products:action.payload
        }
        default:
            return state
}
}