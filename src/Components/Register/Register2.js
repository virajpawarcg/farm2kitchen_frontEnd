import React from "react";
import * as yup from "yup";
import {useFormik} from 'formik';
import "yup-phone";
import Header from "../Header/Header.js"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import Footer from "../Footer/Footer.js"

import register from "../Images/register.png";
import RegisterService from '../../Service/RegisterService';
import "./Register2.css";

const Register = (props) => {

 const number = /^[0-9]{10}$/
 const Navigate = useNavigate();
 const registerFormSchema = yup.object().shape({
  fullName : yup.string().min(3).required(),
  userName : yup.string().min(6).required(),
  password : yup.string().min(8).required(),
  confirmPassword : yup.string().min(8).required(),
  email : yup.string().email().required(),
  mobile : yup.string().matches(number,'number is not valid').required()
});

const handleOnSubmit = (event) => {
  console.log("inside handleOnSubmit")  
  async function createCustomer(){
      try{
          
          RegisterService.saveRegister(formik.values).then(
              (res) => {
                  alert("Registration is done Successfully !")   
                Navigate('/')
              }
          )
      }catch(error){
          console.log(error);
      }
  }
  createCustomer();
};
const formik = useFormik({
  initialValues:{
      fullName : "",
      userName : "",
      password : "",
      confirmPassword : "",
      email : "",
      mobile : ""
  },
  validationSchema :registerFormSchema,
  onSubmit: handleOnSubmit,
});

const onUpdateField = useCallback(
  (key,value) => 
    formik.setValues({
        ...formik.values,
        [key]: value,
    }),
    [formik]
    ) ;
  return (
    <>

      <div className="min-vh-100 d-flex align-items-center marg mt-10" style={{width:"100%"}}>
        <div className="container">
          <div className="row ">
            <div className="col-sm-7 mx-auto">
              <div className="shadow-lg grd ">
                <div className="d-flex align-items-center backgrid">
                  <div className="p-4" id="formPanel">
                    <div className="text-center mb-5">
                      <h1 className="customHeading h3 text-uppercase">
                        Register Here
                      </h1>
                    </div>
                    <form onSubmit={formik.handleSubmit}>
                      <div className="custom-form-group mt-3">
                        <label className="text-uppercase" for="fullname">
                          Full Name
                        </label>
                        <input type="text" name="fullName" id="fullname" className="pb-1" 
                         value = {formik.values.fullName} 
                         onChange={(e) =>onUpdateField("fullName",e.target.value)}/>
                <small style={{color:"red"}}>{formik.errors.fullName}</small>
                      </div>
                      <div className="custom-form-group mt-3">
                        <label className="text-uppercase" for="userName">
                          User Name
                        </label>
                        <input type="text" id="userName" className="pb-1" name="userName"  
                        value = {formik.values.userName} 
                        onChange={(e) =>onUpdateField("userName",e.target.value)}/>
                 <small style={{color:"red"}}>{formik.errors.userName}</small>
                      </div>
                      <div className="custom-form-group mt-3">
                        <label className="text-uppercase" for="email">
                          Email
                        </label>
                        <input type="email" id="email" className="pb-1" name="email"  
                        value = {formik.values.email} 
                        onChange={(e) =>onUpdateField("email",e.target.value)}/>
                 <small style={{color:"red"}}>{formik.errors.email}</small>
                        
                      </div>
                      <div className="custom-form-group mt-3">
                        <label className="text-uppercase" for="mobile">
                          Mobile Number
                        </label>
                        <input type="tel" id="mobile" className="pb-1" name="mobile"  
                        onChange={(e) =>onUpdateField("mobile",e.target.value)}/>
                 <small style={{color:"red"}}>{formik.errors.mobile}</small>
                        
                        
                      </div>
                      <div className="custom-form-group mt-3">
                        <label className="text-uppercase" for="password">
                          Password
                        </label>
                        <input type="password" id="password" className="pb-1" name="password" 
                        value = {formik.values.password}  onChange={(e) =>onUpdateField("password",e.target.value)}/>
                 <small style={{color:"red"}}>{formik.errors.password}</small>
                      </div>
                      <div className="custom-form-group mt-3">
                        <label className="text-uppercase" for="confirmpassword">
                          Confirm Password
                        </label>
                        <input
                          type="password"
                          id="confirmpassword"
                          className="pb-1"
                          name="confirmPassword"  value = {formik.values.confirmPassword} 
                          onChange={(e) =>onUpdateField("confirmPassword",e.target.value)}/>
                          <small style={{color:"red"}}>{formik.errors.confirmPassword}</small>
                      </div>
                      <div className="mt-5">
        
                        <button type="submit" className="w-100 p-2 d-block custom-btn" disabled={!formik.isValid}>
                          Register
                        </button>
              
                      </div>
                      <p className="mt-3 link">
                        Already have a Acount?{" "}
                        <Link to="/">
                          <label className="linklabel"> Login Here</label>
                        </Link>
                      </p>
                    </form>
                  </div>
                  <div className="d-none d-md-block d-lg-block p-2">
                    <img src={register} className="objectFit" style={{borderRadius:"10%",borderColor:"#60b246"}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;