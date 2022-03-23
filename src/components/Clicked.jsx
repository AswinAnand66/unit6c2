import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams, useRoutes } from "react-router"
import { SingleProductList } from "./SingleProduct";



export const Clicked=()=>{
   

  let params=useParams();
  const data=useSelector(state=>state.products)
  let [showData,setShowData]=useState([]);


  useEffect(()=>{
    filterData();
  },[]);

  const filterData=()=>{
    let newData=data.filter((e)=>(e.id==params.id));
    setShowData(newData);
  }

    return (
      <div>
        <h1>
          {showData.map((item)=>{
            return <SingleProductList key={item.id} item={item}/>
          })}
        </h1>
      </div>
    )
}