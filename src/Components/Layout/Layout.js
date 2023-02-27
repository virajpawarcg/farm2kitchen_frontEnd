import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import Slideshow from '../Header/Slideshow.js';
import { Outlet } from 'react-router-dom'
// import Frequnent from '../Components/Home/Frequnent';
import Features from '../Features/Features.js';
import Categories from '../Categories/Categories';

function Layout(){
   return(
   <><Header/>
   <Outlet />
    <Footer/></>
   )
}
export default Layout;