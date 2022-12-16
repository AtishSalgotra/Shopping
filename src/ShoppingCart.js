import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./css/cart.css";

function ShoppingCart({ cart, removeFromCart }) {
  const history = useHistory();
  if(!cart || cart.line_items===0){
    history.replace('/');
  }
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img src="./images/perfume.jpg" className="checkout__ad" />

        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>

          {
            cart?.line_items?.map(item => {
              return <div className="checkoutProduct" key={item.id}>
                <img src={item.image.url} className="checkoutProduct__img" />
                <div className="checkoutProduct__info">
                  <p className="checkoutProduct__title">{item.name}</p>
                  <p className="checkoutProduct__price">
                    <strong>
                      {item.price.formatted_with_symbol} * {item.quantity} = {cart.currency.symbol} {item.price.raw * item.quantity}
                    </strong>
                  </p>
                  <button onClick={() => removeFromCart(item.id)}>Remove from Basket</button>
                </div>
              </div>
            })
          }



        </div>
      </div>
      <div className="checkout__right">
        <div className="subtotal">
          <p>
            Subtotal ({cart?.total_items} items): <strong>{cart?.subtotal?.formatted_with_symbol}</strong>{" "}
          </p>
          <small className="subtotal__gift">
            <input type="checkbox" /> This order contains a gift
          </small>
        </div>
        <button onClick={() => history.push("/checkout")}>Proceed to checkout</button>
      </div>
    </div>
  );
}

export default ShoppingCart;
