import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getproductsData, sortProductsByAsc, sortProductsByDsc } from "../Redux/actions";
import { SingleProductList } from "./SingleProduct";
import "./style/productlist.css"

export const Products = () => {

  const products=useSelector((state)=>state.products)
  console.log("products",products)
  var data=[];
     data=products
  console.log("productdata",data)

  
  const dispatch=useDispatch();
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
    var value=e.target.value;
    
    if(value=="asc"){
      console.log("1")
      const newProduct=products.sort((a,b)=>a.price-b.price)
    console.log("newProduct",newProduct)
      dispatch(sortProductsByAsc(newProduct))
    }else{
      const newProduct=products.sort((a,b)=>b.price-a.price)
      dispatch(sortProductsByDsc(newProduct))
    }

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
            return <SingleProductList key={item.key} item={item}/>;
          })}
      </div>
    </>
  );
};
