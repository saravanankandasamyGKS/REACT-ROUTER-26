import React from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Counter } from './Counter';

export function Product({ product, id, onAddCart }) {
  const [show, setShow] = useState(true);
  const summaryStyle = {
    display: show ? "block" : "none"
  };
  const styles = {
    color: product.rating > 4.5 ? "green" : "red"
  };
const navigate = useNavigate()
  return (
    <div className='product-container'>
      <img className="product-poster" src={product.poster} />
      <div className="product-spec">
        <h2 className="product-name">{product.name} -  { id } </h2>
        <p style={styles} className="product-rating">⭐{product.rating}</p>
      </div>
      <button onClick={() => setShow(!show)}>Toggle Description</button>
      <button onClick={()=> navigate("/ProductList/" + id)}>Info</button>
      {show ? <p style={summaryStyle} className="product-summary">{product.summary}</p> : " "}
      <div className="pricestyle">
        Price:<p className="product-price">₹{product.price}</p>
        <button onClick={() => onAddCart(product)}>Add to cart</button>
      </div>
      <Counter />
    </div>
  );
}
