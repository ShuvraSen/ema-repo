import React from 'react';
import './Product.css'

const Product = ({product}) => {
    console.log(product)
    return (
       <div className='product'>
         <div >
            {/* <h1>this is single product component</h1> */}
            <img src={product.img} alt="" />
            <h3 className='p-name'>name:{product.name}</h3>
            <p>price:{product.price}</p>
            <p>manufacturer:{product.seller}</p>
            <p>ratings:{product.ratings}</p>
            {/* <button className='btn-cart'>addtocart</button> */}
           
        </div>
        <button title="click" className='btn-cart'>addtocart</button>
       
       </div>
    );
};

export default Product;