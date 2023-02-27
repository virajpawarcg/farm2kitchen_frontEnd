import React from "react";
import { useNavigate } from "react-router-dom";
import CommonSection from "../UI/common-section/CommonSection";
import Helmet from "../Helmet/Helmet";
import "../../styles/cart-page.css";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import { cartActions } from "../../store/shopping-cart/cartSlice";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faRightToBracket,
  faIdCard,
  faShoppingBasket,
  faBars,
  faDeleteLeft,
  faTrash,
  faSearch,
  faShoppingCart,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const navigate = useNavigate();
  const navtocheckout =()=>{
    var e = cartItems.length;
    if(e===0){
      alert("Cart is empty");
    }else{
      navigate("/checkout");
    }
  }
  const clearcart=()=>{
    
  }
  return (
    <Helmet title="Cart">
      <Header/>
      <CommonSection title="Your Cart"  />
      <section >
        <Container>
          <Row>
            <Col lg="12">
              {cartItems.length === 0 ? (
                <h5 className="text-center">Your cart is empty</h5>
              ) : (
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Product Title</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <Tr item={item} key={item.id} />
                    ))}
                  </tbody>
                </table>
              )}

              <div className="mt-4">
                <h6>
                  Subtotal: ₹
                  <span className="cart__subtotal">{totalAmount}</span>
                </h6>
                <p>Taxes and shipping will calculate at checkout</p>
                <div className="cart__page-btn">
                  <button className="addTOCart__btn me-4">
                    <Link to="/home" style={{color:"#fff"}}>Continue Shopping</Link>
                  </button>
                  <button className="addTOCart__btn" onClick={navtocheckout} style={{float:"right"}}>
                    Proceed to checkout
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer/>
    </Helmet>
  );
};

const Tr = (props) => {
  const { id, image01, title, price, quantity } = props.item;
  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(cartActions.removeItem(id));
  };
  return (
    <tr>
      <td className="text-center cart__img-box">
        <img src={image01} alt="" />
      </td>
      <td className="text-center">{title}</td>
      <td className="text-center">₹{price}</td>
      <td className="text-center">{quantity}kg</td>
      <td className="text-center cart__item-del">
        <FontAwesomeIcon class="ri-delete-bin-line" onClick={deleteItem} height="20px" icon={faTrash} />
      </td>
    </tr>
  );
};

export default Cart;
