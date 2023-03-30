import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
const [productts,setProducts]=useState([])
//console.log(productts,"productssssssss");[]
//event handler er jonno alada ekta state declair becaue, manush ei product add korte o pare ba na o pare
const [cartt,setCart]=useState([])//shopping collection rakhbo tai empty array dite hobe

useEffect(()=>{
    fetch('products.json')
    .then(res=>res.json())
    .then(data=>setProducts(data))
},[])

const handletoCart=(product)=>{
// console.log(product);
const newCart=[...cartt,product];
setCart(newCart);


}
//console.log(products);

//data load korar jonno amader 2ta jinis korte hoy/
// 1.first ----->data load-----[ei jonne use effet kore baire theke data load korte hoy.outside theke data load korte gelei useEffect kora lage]
//2.second---->loaded data kono variable e rakhar jonno useState kora lage.useState er 2nd parameter e fetchkora data or loaded data set kora hoy.
//and 1st parameter e set kora rakha joma thake
    return (
        <div className='shop-container'>
            <div className='products-container'>
               {
                productts.map(product=><Product
                key={product.id}
                product={product}
                handletoCart={handletoCart}

                ></Product>)
               }
            </div>
            <div className='cart-container'>
               <Cart cartt={cartt}></Cart>
            </div>
            
        </div>
    );
};

export default Shop;