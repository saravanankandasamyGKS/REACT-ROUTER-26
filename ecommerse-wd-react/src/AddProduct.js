import  { useState } from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';


export function AddProduct({productList, setProductList}) {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [price, setPrice] = useState("");
  const [summary, setSummary] = useState("");
  const [rating, setRating] = useState("");
  const navigate = useNavigate("")
  
  return (
    <div className="add-product-form">
      <h1>Add Product</h1>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Enter Name"
      />
      <input
        type="text"
        value={poster}
        onChange={(event) => setPoster(event.target.value)}
        placeholder="Enter Poster"
      />
      <input
        type="text"
        value={price}
        onChange={(event) => setPrice(event.target.value)}
        placeholder="Enter Price"
      />
      <input
        type="text"
        value={summary}
        onChange={(event) => setSummary(event.target.value)}
        placeholder="Enter Summary"
      /> 
      <input
        type="text"
        value={rating}
        onChange={(event) => setRating(event.target.value)}
        placeholder="Enter Rating"
      />
      <button onClick={()=>{
        const newProduct={
          name,
          poster,
          price,
          summary,
          rating,
        }
        setProductList([...productList, newProduct])
        navigate("/Product")
      }}>Add Button</button>
    </div>
    
  );
}
