import React from "react";
import "./Product.css";

export default function Product(props) {
  return (
    <div className="Product">
      <img src={props.imageUrl} alt="" />
      <div className='product-info'> 
        <p>{props.productName}</p>
        <p>{props.price}</p>
      </div> 
      <div className='product-buttons-row'>
        <button className='product-buttons'>Delete</button>
        <button className='product-buttons'>Edit</button>
      </div>
    </div>
  );
}
