import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import Slideshow from '../Header/Slideshow.js';
import { Outlet } from 'react-router-dom'
// import Frequnent from '../Components/Home/Frequnent';
import Features from '../Features/Features.js';
import Categories from '../Categories/Categories';
import { Provider } from 'react-redux/es/exports.js';
function Home(){
    return(
        <div >
            <Header/>
        <Outlet />
         <Slideshow/>
         <br/>
         <Features/>
         
         <Categories/>

         <Footer/></div>
    )
 }
 export default Home;