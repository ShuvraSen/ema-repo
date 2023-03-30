import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    //console.log(props)
    const{img,name,seller,ratings,price}=props.product
    const handletoCart=props.handletoCart;
    //add eventhandler
     
    return (
       <div className='product'>
         <div >
            {/* <h1>this is single product component</h1> */}
            <img src={img} alt="" />
            <h3 className='p-name'>name:{name}</h3>
            <p>price:{price}</p>
            <p>manufacturer:{seller}</p>
            <p>ratings:{ratings}</p>
            {/* <button className='btn-cart'>addtocart</button> */}
           
        </div>
        <button onClick={()=>handletoCart(props.product)} className='btn-cart'>
            addtocart
            <FontAwesomeIcon icon={faShoppingBasket} />
            </button>
       
       </div>
    );
};

export default Product;