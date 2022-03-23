import axios from "axios";
import { GET_PRODUCT_DATA, GET_PRODUCT_REQ, SORT_PRODUCTS, SORT_PRODUCTS_BY_ASC, SORT_PRODUCTS_BY_DSC } from "./actionTypes";

// action for get products request
export const getProductsReq = (payload) =>{
    const data=  payload;
   // console.log("dara",data)
    return {
        type:GET_PRODUCT_REQ,
        payload:data,
    }
}



// ({
//    type:GET_PRODUCT_REQ,
//    payload,
// });

// action for get products success

const getProductsSuccess = () => ({});

// action for get products failure

const getProductsFailure = () => ({});

// thunk call to fetch products  list
export const getproductsData = () =>async(dispatch)=> {
    const fetchData=async()=>{
        const res=await fetch("https://movie-fake-server.herokuapp.com/products")
        const data=await res.json();
        //console.log(data)
        return data;
    }
    try{
        const datas=await fetchData();
        dispatch(getProductsReq(datas))
    }catch(err){
        console.log(err)
    }
    
};

// action object for sort  feature

export const sortProductsByAsc = (payload) => ({
    type:SORT_PRODUCTS_BY_ASC,
    payload:payload,
});

export const sortProductsByDsc=(payload)=>({
    type:SORT_PRODUCTS_BY_DSC,
    payload:payload
})
