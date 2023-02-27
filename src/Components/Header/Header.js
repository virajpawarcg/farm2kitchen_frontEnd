// import { Component } from "react";
// import logo3 from "../Images/logo3.png"
// import "../Header/Header.css"
// import 'bootstrap/dist/css/bootstrap.css';
// import { hover } from "@testing-library/user-event/dist/hover";
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import { cartUiActions } from "../../store/shopping-cart/cartUiSlice";
import {
  faRightToBracket,
  faIdCard,
  faShoppingBasket,
  faBars,
  faSearch,
  faShoppingCart,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import './Header.css';
import Navbarr from './Navbar/Navbarr';
import logo4 from '../Images/logo4.png'
import { useSelector, useDispatch } from "react-redux";

export default function Header() {
  const [activeMenu, setActiveMenu] = useState(false);
  const [activeSearch, setActiveSearch] = useState(false);
  const [activeShoppingCart, setActiveShoppingCart] = useState(false);
  const [activeUserForm, setActiveUserForm] = useState(false);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();
  window.onscroll = () => {
    setActiveUserForm(false);
    setActiveShoppingCart(false);
    setActiveSearch(false);
    setActiveMenu(false);
  };
  const handleMenuButton = () => {
    setActiveMenu(!activeMenu);
    setActiveSearch(false);
    setActiveShoppingCart(false);
    setActiveUserForm(false);
  };
  const handleSearchButton = () => {
    setActiveSearch(!activeSearch);
    setActiveShoppingCart(false);
    setActiveUserForm(false);
    setActiveMenu(false);
  };
  const handleShoppingCartButton = () => {
    setActiveShoppingCart(!activeShoppingCart);
    setActiveSearch(false);
    setActiveUserForm(false);
    setActiveMenu(false);
  };
  const handleUserFormButton = () => {
    setActiveUserForm(!activeUserForm);
    setActiveSearch(false);
    setActiveShoppingCart(false);
    setActiveMenu(false);
  };
  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };
  return (
    <header className="header">
      <a href="/home" className="logo">
       <i> <img src={logo4} width="50" hieght="20"/></i>
       Farm2Kitchen
      </a>
      <Navbarr active={activeMenu} />
      <div className="icons">
        <button type="button" id="menu-btn" onClick={handleMenuButton}>
          <FontAwesomeIcon className="fa-icon" icon={faBars} />
        </button>
        <Link to="/cart">
        <button onClick={toggleCart}> 
          <FontAwesomeIcon className="ri-shopping-basket-line" icon={faShoppingBasket} />
          </button>
          </Link>
        <Link to="/">
        <button >
          <FontAwesomeIcon className="fa-icon" icon={faRightToBracket} />
        </button>
        </Link>
      </div>
      
    </header>
  );
}





// import React from "react";
// import "./Header.css";


// import { Link } from "react-router-dom";
// import Navb from "./Navbar";
//  const Header = () => {
//   return (
//     <div>
//       <Navb/>
//     </div>
//   );
// };
// export default Header;

// export default function Header() {
//     return (
//       <nav className="navigation">
//         <a href="/" className="brand-name">
//           MacroSoft
//         </a>
//         <button className="hamburger">
//           {/* icon from heroicons.com */}
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-5 w-5"
//             viewBox="0 0 20 20"
//             fill="white"
//           >
//             <path
//               fillRule="evenodd"
//               d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
//               clipRule="evenodd"
//             />
//           </svg>
//         </button>
//         <div
//           className="navigation-menu">
//           <ul>
//             <li>
//               <a href="/home">Home</a>
//             </li>
//             <li>
//               <a href="/about">About</a>
//             </li>
//             <li>
//               <a href="/contact">Contact</a>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     );
//   }
// export default class Header extends Component{
//     render(){
//         return(
//             <nav class="navbar navbar-expand-lg bg-body-tertiary">
//   <div class="container-fluid">
//     <a class="navbar-brand" href="#"><img src={logo2} width="150" height="40" className="d-inline-block align-top" alt=""/> </a>
//     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
//       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//         <li class="nav-item">
//           <a class="nav-link active" aria-current="page" href="#">Home</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#">Link</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link disabled">Disabled</a>
//         </li>
//       </ul>
//       <form class="d-flex" role="search">
//         <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
//         <button class="btn btn-outline-success" type="submit">Search</button>
//       </form>
//     </div>
//   </div>
// </nav>
//         )
//     }
// }




// export default class Header extends Component{
//     render(){
//         return(
//   <nav className="navbar border-bottom border-success navbar-expand-lg" style={{border:"2px"}}>
//   <a className="navbar-brand" href="#">
//     <img src={logo3} width="150" height="40" className="d-inline-block align-top zoom" alt=""/> 
//   </a>
//   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
      
//     </button>
//   <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
//     <ul className="navbar-nav mr-auto">
//       <li className="nav-item" >
//         <a className="nav-link"  href="#">Home <span className="sr-only">(current)</span></a>
//       </li>
//       <li className="nav-item">
//         <a className="nav-link"  href="#">Cart</a>
//       </li>
//       <li className="nav-item">
//         <a className="nav-link"  href="#">Order History</a>
//       </li>
//     </ul>
//     <form className="form-inline my-2 my-lg-0">
//       <input className="form-control mr-sm-2"  type="search" placeholder="Search"/>
//       <button className="btn btn-outline-success" type="submit">Search</button>
//     </form>
//   </div>
//   <div class="collapse" id="navbarToggleExternalContent">
//       <div class="bg-dark p-4">
//         <h5 class="text-white h4">Collapsed content</h5>
//         <span class="text-muted">Toggleable via the navbar brand.</span>
//       </div>
//     </div>
// </nav>
// )
//     }
// }