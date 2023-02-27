import { Footer } from "../Footer/Footer"
import {Navbar} from "../Navbar/Navbar"
import OrderComponent from "../OrderComponent"
import Sidebar from "../Sidebar/Sidebar"

export const OrderPage=()=>{
    return(
        <div>
         <Navbar/>
         <div style={{display:"flex" , flexDirection : "row"}}>
        <Sidebar/>
        <OrderComponent/>
        </div>
        
        </div>
    )
}