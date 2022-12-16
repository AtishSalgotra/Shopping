import React from 'react'
import "./css/checkout.css"
import { useHistory } from 'react-router-dom'

function Thankyou({orderDetails}) {
    const history = useHistory();

    if(!orderDetails){
        history.replace('/');
    }
    return (
        <div className="order__confirm">
            <h1>Hello {orderDetails?.customer?.firstname} {orderDetails?.customer?.lastname}, Thank you for your order</h1>
            <h3>Your order number is {orderDetails?.customerReference}</h3>
            {/* <h4>Total Amount: {orderDetails?.order.subtotal?.formatted_with_symbol}</h4> */}
            <button onClick={()=>history.push('/')}>Continue Shopping</button>
        </div>
    )
}

export default Thankyou
