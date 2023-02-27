import React from "react";

import "../../../styles/product-card.css";
import "../../Categories/Categories.css"
import { Link } from "react-router-dom";
// import "../../styles/product-details.css"
import { useDispatch } from "react-redux";
import "../../../styles/home.css";
import { cartActions } from "../../../store/shopping-cart/cartSlice";

const ProductCard = (props) => {
  const { id, title, image01, price } = props.item;
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        image01,
        price,
      })
      
    );
    var str= new String("Succesfully added to cart"+"\n1 kg of "+title+" added "+" go to cart for");
    alert(str);
  };

  return (
    <div className="product__item" style={{marginLeft:"-20px",marginTop:"10px"}}> 
      <div  style={{width:"100%"}}>
      <div className="product__img">
        <img src={image01} alt="product-img" className="w-50" />
      </div>
      <div className="product__content">
        <h5>
          <Link to={`/foods/${id}`}>{title}</Link>
        </h5>
        <div className=" d-flex align-items-center justify-content-between ">
          <span className="product__price">₹{price}</span>
          <button className="addTOCart__btn" onClick={addToCart}>
            Add to Cart
          </button>
        </div>
      </div>
      </div>
    </div>
  );
};


export default ProductCard;
