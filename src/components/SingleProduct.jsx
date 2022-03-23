export const SingleProductList = ({item}) => {


    // make a request to get the details
  return <div>
      <h2>
        {item.brand}
      </h2>
      <p>{item.price}</p>
      <p>{item.title}</p>
      <img src={item.image} alt="" />
  </div>;
};
