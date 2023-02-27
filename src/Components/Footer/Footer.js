import React from 'react'
import './Footer.css'
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <section className="">
    <div className="container text-center text-md-start mt-5">
      
      <div className="row mt-3">
        
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          
          <h6 className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3 text-secondary"></i>Farm2Kitchen
          </h6>
          <div>
            <p>
              <Link to="/home" style={{color:"#60b246"}}>
              Farm2Kitchen<br/>
              </Link>
            </p>
            <p>
              <a >F2K Farm Stories</a><br/>
            </p>
            <p>
              <a >Customer Testimonials</a><br/>
            </p>
                                                   
              </div>
        </div>
        

        
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
         
          <h6 className="text-uppercase fw-bold mb-4">
           Contact us
            </h6>
          <p>
            <a href="#!" className="text-reset">FAQS</a>
          </p>
          <p>
            <a href="#!" className="text-reset">F2K Pricing Policy</a>
          </p>
          <p>
              <a >Terms & Conditions</a><br/>
            </p> 
        </div>
        

       
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          
          <h6 className="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <a href="#!" className="text-reset">Pricing</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Settings</a>
            </p>
          <p>
            <a href="#!" className="text-reset">Orders</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Help</a>
          </p>
        </div>
       
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
         
          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          <p>
            <i className="fas fa-envelope me-3 text-secondary"></i>
            farm2kitchen@gmail.com
          </p>
          <p><i className="fas fa-phone me-3 text-secondary"></i> + 91 823 456 788</p>
          <p><i className="fas fa-print me-3 text-secondary"></i> + 91 823 456 789</p>
        </div>
        
      </div>
      
    </div>
  </section>
  <p className="text-center mx-auto">© 2023 Farm2Kitchen - Vegetable Store </p>
  
  
      
  </div>

  )
}

export default Footer