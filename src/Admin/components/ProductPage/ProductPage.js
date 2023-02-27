import { Footer } from "../Footer/Footer"
import {Navbar} from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import ProductComponent from "../ProductComponent"





export const ProductPage=()=>{
    return(
        <div>
        <Navbar/>
         <div style={{display:"flex" , flexDirection : "row"}}>
        <Sidebar/>
        <ProductComponent/>
        </div>
        </div>
    )
}