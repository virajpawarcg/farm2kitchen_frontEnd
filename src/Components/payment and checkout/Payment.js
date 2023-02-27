import "./Payment.css"
import { useSelector } from "react-redux";


const Payment =()=>{
    // var price = localStorage.getItem("total")
    // document.querySelector(".tAmt2").innerHTML = price;
    // var len = localStorage.getItem("length")
    const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
    // document.querySelector(".tItems2").innerHTML = len;
    const shippingCost = 20;

  const totalAmount = cartTotalAmount + Number(shippingCost);
    // var option = document.querySelector("#cardPayment").value;
    // console.log("card",option)
    // var option = document.querySelector("#UPI").value;
    const crossCheck=(event)=> {
        event.preventDefault();
        var cardNum = document.querySelector("#cardNum").value;
        var ccv = document.querySelector("#ccv").value;
        var expiry = document.querySelector("#exp").value;

        // console.log(cardNum,ccv,expiry);

        if (cardNum == "9999999999999999" && ccv == "1234" && expiry == "2023-05") {
            alert("OTP Send Successfully");
            window.location.href = "/OTP";
        } else {
            alert("Enter Valid Card Details")
            window.location.reload();
        }


    }
    // document.querySelector("#form2").addEventListener("submit", crossCheck);
    const visiblecard=()=> {
        // console.log("checked");
        var change1 = document.querySelector(".UPIPay");
        change1.style.contentVisibility = "hidden";
        var btn = document.querySelector("#UPI");
        btn.checked = "";

        var change = document.querySelector(".cardPay");
        change.style.contentVisibility = "visible"

    }
    const visibleUPI=()=> {
        // console.log("checked");
        var change = document.querySelector(".cardPay");
        change.style.contentVisibility = "hidden";
    
        var btn = document.querySelector("#cardPayment");
        btn.checked = "";

        var change1 = document.querySelector(".UPIPay");
        change1.style.contentVisibility = "visible";
    }


    return(
        <div className="container">
        <section id="containerSec">
        <h1>Select Payment option</h1>
        <section id="contData">
            <div id="containerBox">
                <form action="">
                    <div class="containerPay">
                        <div>
                            <input type="checkbox" id="cardPayment" onClick={visiblecard}/>
                            <label for=""> Card Payment</label>
                        </div>
                        <div class="cardPayOption">
                            <span><img
                                    src="https://www.freepnglogos.com/uploads/visa-card-and-mastercard-logo-png-28.png"
                                    alt=""/></span>
                            <span><img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6khjRtYsB5ttPcwhErq0fVPNTDGGeXBZgkYXOhy-60Iyd8btTY_f6U2q-oOnzm2px_lw&usqp=CAU"
                                    alt=""/></span>
                            <span><img
                                    src="https://d28wu8o6itv89t.cloudfront.net/images/mastercardlogopng-1579603310730.png"
                                    alt=""/></span>


                        </div>
                    </div>
                    <div class="containerPay">
                        <div>
                            <input type="checkbox" id="UPI" onClick={visibleUPI}/>
                            <label for="">UPI Payment</label>
                        </div>
                        <div class="cardPayOption">
                            <span><img src="https://logodix.com/logo/1763558.jpg" alt=""/></span>
                            <span><img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNP1yGGI3Z9E4y3V9B4vo1CIEKu215W5RumQ&usqp=CAU"
                                    alt=""/></span>
                            <span><img
                                    src="https://www.howtogeek.com/wp-content/uploads/2020/11/Google-Pay-hero.png?height=200p&trim=2,2,2,2"
                                    alt=""/></span>
                            <span><img src="https://mma.prnewswire.com/media/1607489/PhonePe_Logo.jpg?p=twitter"
                                    alt=""/></span>


                        </div>
                    </div>

                </form>

            </div>
            <div className="displaycard"><div class="cardPay">
                <form id="form2">
                    <h2>Payment Details</h2>
                    <label for="">Credit / Debit / ATM Card</label> <br/>
                    <input id="cardNum" type="text" name="cardNumber" maxlength="16" autocomplete="cc-number"
                        placeholder="Enter Card number"/> <br/>
                    <label for="">CCV</label> <br/>
                    <input id="ccv" type="password" name="ccv" autocomplete="cc-csc" maxlength="4"
                        placeholder="Enter mobile number"/> <br/>
                    <label for=""> Expiry data</label> <br/>
                    <input id="exp" type="month" name="month" placeholder="Enter month"/> <br/>
                    <label for="">Name as per Card</label><br/>
                    <input id="name" type="text" placeholder="Enter your name"/> <br/>
                    <input id="sendOtp" type="submit" onClick={crossCheck} value="Send OTP"/>
                </form>
            </div>
            <div class="UPIPay">
                <form id="form3">
                    <h2>Payment Details</h2>
                    <label for="">UPI</label> <br/>
                    <input id="UPIID" type="text" name="UPI ID" autocomplete="cc-number" placeholder="Enter UPI ID"/>
                    <br/>

                    <input id="placeOrder" type="submit" value="Place order"/>
                </form>
            </div></div>
            <div id="totalValue">
                <h3>Order Summary</h3>
                <div class="tAmt">
                    <div>Total Amount:{cartTotalAmount}</div>
                    <div class="tAmt2"></div>
                </div>

                <div class="checkout">
                    <button onclick="checkout()">Place order</button>
                </div>
            </div>
        </section>
    </section>
    </div>
    );

}
export default Payment;