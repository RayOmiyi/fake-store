import React from "react";
import "./BreadCrumb.css";
import arrow_icon from "../Assets/breadcrum_arrow.png";
const BreadCrumb = (props) => {
  const { product } = props;
  return (
    <div className="BreadCrumb">
      HOME <img src={arrow_icon} alt="arrow-icon" />
      SHOP <img src={arrow_icon} alt="arrow" />
      {product.category} <img src={arrow_icon} alt="arrow" /> {product.name}
    </div>
  );
};

export default BreadCrumb;
