import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import Layout from './Components/Layout/Layout.js'
import Login from './Components/Login/login.js'
import Home from './Components/Home/Home.js'
import Register from './Components/Register/Register2.js'
import Products from "./Components/Products/Products"
import Cart from "./Components/Products/Cart"
// import ProductInfo from './Components/Products/Productsv/ProductInfo';
import Contact from './Components/Contacts/Contact';
import Checkout from './Components/payment and checkout/Checkout';
import Payment from './Components/payment and checkout/Payment';
import OTP from './Components/payment and checkout/OTP';
import { AdminHome } from './Admin/components/Home/Home';
import { ProductPage } from './Admin/components/ProductPage/ProductPage';
import Readmore from './Components/Features/Readmore.js'
import { OrderPage } from './Admin/components/OrderPage/OrderPage';
import { UserPage } from './Admin/components/UserPage/UserPage';
import AddProductComponent from './Admin/components/AddProductComponent';
// import ProductCard from './Components/Products/Products';
// import ProductsProvider from './Components/Products/productsC';
// import PHome from './Components/Products/PHome';
// import "./Components/Products/style.scss";
function App() {
  return (
    <div className='app'>
      
      <>
      {/* <ProductsProvider> */}
      <Router>
        <Routes>
          <Route>
          <Route path='/' element ={<Layout/>}/>
          <Route index element={<Login/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/products' element={<Products/>}/>
            <Route path='/Contact' element={<Contact/>}/>
            <Route path='/Cart' element={<Cart/>}/>
            <Route path='/Checkout' element={<Checkout/>}/>
            <Route path='/payment' element={<Payment/>}/>
            <Route path='/OTP' element={<OTP/>}/>
            <Route path='/admin' element={<AdminHome/>}/>
            <Route path="/Readmore" element={<Readmore/>}/>
            {/* Admin routes */}
            <Route exact path='/aProducts' element ={<ProductPage/>}/>
            <Route exact path='/AddProductComponent' element ={<AddProductComponent/>}/>
            <Route exact path='/aOrders' element ={<OrderPage/>}/>
            <Route exact path='/aUsers' element ={<UserPage/>}/>
          </Route>
        </Routes>
      </Router>
      {/* </ProductsProvider> */}
    </>
    </div>
  );
}

export default App;
