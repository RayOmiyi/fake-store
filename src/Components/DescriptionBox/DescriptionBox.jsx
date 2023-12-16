import React from "react";
import "./DescriptionBox.css";
const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          An e-commerce website is an online platform for buying and selling
          goods. Users browse diverse products, make secure purchases, and
          manage orders through personalized accounts. These sites feature
          secure payment methods, product descriptions, and images. Shopping
          carts aid in item selection, while promotions and customer reviews
          enhance the shopping experience. Responsive design ensures
          accessibility across devices, and integration with shipping services
          ensures efficient order fulfillment. Analytics help optimize the user
          journey, making e-commerce sites dynamic hubs for online transactions.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
