import React from 'react';
import './Cart.css'

const Cart = ({cartt}) => {
    console.log(cartt,"com cart");
    // [{}]
    let total=0;
    let totalShipping=0
    for(const product of cartt){
        total=total+product.price;
        totalShipping=totalShipping+product.shipping;
    }
    let tax=7*100/100
    let grandTotal=total+totalShipping+tax

    return (
        <div className='cart'>
            <h1>this is order sideeeee</h1>
                <p>selcted items:{cartt.length}</p>
                <p>total price:{total}</p>
                <p>Total shipping:{totalShipping}</p>
                <p>Tax:{tax}</p>
                <h3>Grand total:{grandTotal.toFixed(2)}</h3>
                {/* <h1>seller:{cartt.seller}</h1> */}
        </div>
    );
};

export default Cart;