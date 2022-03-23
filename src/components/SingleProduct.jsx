import { useNavigate } from "react-router";

export const SingleProductList = ({item}) => {

let navigate=useNavigate();

  const handleClick=(id)=>{
    
       navigate(`/products/${id}`)
  }

    // make a request to get the details
  return <div onClick={()=>handleClick(item.id)}>
      <h2>
        {item.brand}
      </h2>
      <p>{item.price}</p>
      <p>{item.title}</p>
      <img src={item.image} alt="" />
  </div>;
};
