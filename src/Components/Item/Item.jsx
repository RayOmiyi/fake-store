import React from 'react'
import "./Item.css";
import { Link } from "react-router-dom";


const Item = (props) => {
  let new_item = 30
  let old_item  = 100
  return (
    <div className="item">
      <Link to={`/product/${props.id}`}>
        <img onClick={window.scrollTo(0, 0)} src={props.image} alt="" />
      </Link>
      <p>{props.title}</p>
      <div className="item-prices">
        <div className="item-price-new">$ {new_item}</div>
        <div className="item-price-old">$ {old_item}</div>
      </div>
    </div>
  );
}

export default Item