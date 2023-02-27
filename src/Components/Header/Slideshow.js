import { Component } from "react";
import ss5 from "../Images/ss5.jpg"
import ss2 from "../Images/ss2.jpg"
import ss6 from "../Images/ss6.jpg"
import ss7 from "../Images/ss7.jpg"
import "../Header/Slideshow.css"
export default class Slideshow extends Component{
    render(){
      
        return(
          <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" height={500}  src={ss5} alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" height={500} src={ss2} alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" height={500} src={ss6} alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
          




            )
        }
    }
    {/* //             <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
//   <div class="carousel-inner">
//     <div class="carousel-item active">
//       <img class="d-block w-100"  src={ss5} alt="First slide"/>
//       <div class="carousel-caption d-none d-md-block">
//     <h5>The more colorful the food, the better.</h5>
//     <p>Farm2kitchen</p>
//   </div>
//     </div>
//     <div class="carousel-item">
//       <img class="d-block w-100"  src={ss2} alt="Second slide"/>
//       <div class="carousel-caption d-none d-md-block">
//     <h5>Keep calm and eat more veggies.</h5>
//     <p>Farm2kitchen</p>
//   </div>
//     </div>
//     <div class="carousel-item">
//       <img class="d-block w-100"  src={ss6} alt="Third slide"/>
//       <div class="carousel-caption d-none d-md-block">
//     <h5>Eat your greens.</h5>
//     <p>Farm2kitchen</p>
//   </div>
//     </div>
//     <div class="carousel-item">
//       <img class="d-block w-100"   src={ss7} alt="Fourth slide"/>
//       <div class="carousel-caption d-none d-md-block">
//     <h5>Vegetables are my therapy.</h5>
//     <p>Farm2kitchen</p>
//   </div>
//     </div>
//   </div>
//   <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
//     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span class="sr-only">Previous</span>
//   </a>
//   <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
//     <span class="carousel-control-next-icon" aria-hidden="true"></span>
//     <span class="sr-only">Next</span>
//   </a>
// </div> */}