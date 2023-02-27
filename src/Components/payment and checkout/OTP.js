import { useNavigate } from "react-router-dom"

const OTP = () =>{
    const Nav=useNavigate();
    const succesfully=()=>{
        alert("Payment Succesfull"+"\n Order Placed");
        Nav("/home")
    }
    return(
        <form id="form2">
        <h2>OTP Varification</h2>
        <label for="">Enter OTP sent to your mobile number +91-xxxxxx6746</label> <br/>
        <input id="otp" type="text" name="OTP" placeholder="Enter OTP"/> <br/>
       
        <input id="sendOtp" type="submit" onClick={succesfully} value="Place order"/>
    </form>
    )
}
export default OTP;