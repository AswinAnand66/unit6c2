import { act } from "react-dom/test-utils"
import { sortProducts } from "./actions"
import { FAILURE, GET_PRODUCT_DATA, GET_PRODUCT_REQ, SORT, SORT_PRODUCTS, SORT_PRODUCTS_BY_ASC, SORT_PRODUCTS_BY_DSC, SUCCESS } from "./actionTypes"


const initState = {
    products:[],
    filter:[],
    isLoading:false,
    isError:false
}


export const Reducer = (state=initState,action)=>{
  
    
    // add the switch statement for different actions
switch(action.type){
    
    case GET_PRODUCT_REQ:
       
        return {
            ...state,
            isLoading:true
        }
   
   case FAILURE:
       return{
           ...state,
           isError:true,
       }
   case SUCCESS:
           return{
               ...state,
               isLoading:false,
               products:[...action.payload],
               filter:[...action.payload]
           }

    case SORT:
        if(action.payload=="--sort by --")
        return {
            ...state,
            filter:[...state.products]
        }
        if(action.payload=="asc")
        return {
            ...state,
            filter:[...state.filter.sort((a,b)=>a.price-b.price)]
        }
        if(action.payload=="desc")
        return{
            ...state,
            filter:[...state.filter.sort((a,b)=>b.price-a.price)]
        }
    default:
            return state
}
}