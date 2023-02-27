import {AddProductComponent} from "../AddProductComponent"
import { Footer } from "../Footer/Footer"
import {Navbar} from "../Navbar/Navbar"

import Sidebar from "../Sidebar/Sidebar"






export const AddProductPage=()=>{
    return(
        <div>
         <Navbar/>
        <div style={{display:"flex" , flexDirection : "row"}}>
        <Sidebar/>
        <AddProductComponent/>
        </div>
        
        </div>
    )
}