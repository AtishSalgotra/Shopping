import React, { useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import "./css/product.css";

function Product({ productsList, addToCart, fetchProductsByCategroy}) {
  let {slug} = useParams()

  useEffect(()=> {
    if(slug) { fetchProductsByCategroy(slug)}
  },[slug])
  
  return (
    <div className="products_wrap">
      {productsList && productsList.map((items) => {
        return (
          <div className="product" key={items.id}>
            <img src={items.image.url} alt="product"/>
            <h3>{items.name}</h3>
            <p>{items.price.formatted_with_symbol}</p>
            <button onClick={()=>addToCart(items.id, 1)}>Add to Cart</button>
          </div>
        );
      })}
    </div>
  );
}

export default Product;
