import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getproductsData, sort, sortProductsByAsc, sortProductsByDsc } from "../Redux/actions";
import { SingleProductList } from "./SingleProduct";
import "./style/productlist.css"

export const Products = () => {
  const [addData,setAllData]=useState([])
  const data=useSelector(state=>state.filter)
  console.log("data",data);
  
  const dispatch=useDispatch();
  
  // const filterdata=useSelector(state=>state.filter)
  // console.log("fielte",filterdata)
 
  // to get all products list on component mounts
  useEffect(() => {
    //   dispatch an action to the store
    // dont make call here
    // handle it as thunk call in actions.js
    dispatch(getproductsData())
    
  }, [dispatch]);


  
  

  
  //    sort by price

  const handleSort = (e) => {
    // dispach handle sort action to the store
    console.log("sorty")
    var value=e.target.value.trim();
    console.log("value",value)
    dispatch(sort(value))

  };
  
  
  return (
    <>
      <h2>Products</h2>
      <select onChange={handleSort}>
        <option>--sort by --</option>
        <option value="asc">low to high</option>
        <option value="desc">high to low</option>
      </select>
      <div className="products-list">
        {/* map throught th products  list and display the results */}
        {data &&
          data.map((item) => {
            return <SingleProductList key={item.id} item={item}/>;
          })}
      </div>
    </>
  );
};
