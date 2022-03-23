import axios from "axios";
import { FAILURE, GET_PRODUCT_DATA, GET_PRODUCT_REQ, SORT, SORT_PRODUCTS, SORT_PRODUCTS_BY_ASC, SORT_PRODUCTS_BY_DSC, SUCCESS } from "./actionTypes";

// action for get products request
export const getProductsReq = () =>{
    
    return {
        type:GET_PRODUCT_REQ,
       
    }
}



// ({
//    type:GET_PRODUCT_REQ,
//    payload,
// });

// action for get products success

export const getProductsSuccess = (payload) => ({
    type:SUCCESS,
    payload:payload
});

// action for get products failure

export const getProductsFailure = () => ({
    type:FAILURE
});

// thunk call to fetch products  list
export const getproductsData = () => {
    return (dispatch) => {
      dispatch(getProductsReq());
      axios
        .get("https://movie-fake-server.herokuapp.com/products")
        .then((res) => {
          dispatch(getProductsSuccess(res.data));
        })
        .catch((err) => {
          dispatch(getProductsFailure());
          console.log(err);
        });
    };
  };

// action object for sort  feature
export const sort=(payload)=>({
   type:SORT,
   payload:payload,
});
