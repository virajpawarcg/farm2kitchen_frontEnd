import { Footer } from "../Footer/Footer"
import {Navbar} from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import { UserComponent } from "../UserComponent"

export const UserPage=()=>{
    return(
        <div>
         <Navbar/>
         <div style={{display:"flex" , flexDirection : "row"}}>
        <Sidebar/>
        <UserComponent/>
        </div>
        
        </div>
    )
}