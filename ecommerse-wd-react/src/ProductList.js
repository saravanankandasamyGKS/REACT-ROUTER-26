import React from 'react';
import { useState } from 'react';
import { Product } from './Product';
import { Cart } from './Cart';
import { INITIAL_PRODUCT_LIST } from './App';


 export function ProductList({productList}) {
//  const productList = INITIAL_PRODUCT_LIST;
 
  const [cart, setCart] = useState([]);

  const handleCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <button>Cart {cart.length}</button>
      <Cart cartItem={cart} />
      <div className="product-list">
        {productList.map((product,index) => (
          <Product key={index} product={product} id={index} onAddCart={handleCart} />
        ))}
      </div>
      
    </div>
  );
}
