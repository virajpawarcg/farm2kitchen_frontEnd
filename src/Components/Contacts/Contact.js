import React from "react";
import * as yup from "yup";
import {useFormik} from 'formik';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useCallback } from "react";
import './contact.css';
import Header from "../Header/Header";

const Contact = (props) => {
  const registerFormSchema = yup.object().shape({
    name : yup.string().min(3).required(),
    subject : yup.string().min(6).required(),
    message : yup.string().min(10).required(),
     
    email : yup.string().email().required(),
    // mobile : yup.number().equals().required()
    
  
  // mobile: yup.string().matches(phoneRegExp, 'Phone number is not valid')
  });
  const Navigate = useNavigate();
  
  const handleOnSubmit = (values) => {
    const fullData = Object.keys(values)
                            .map((key) => values[key])
                            .join(" ");
    Navigate("/home")
                            // alert(`User Data = ${fullData}`);
  };
  const formik = useFormik({
    initialValues:{
        name : "",
        subject : "",
        message : "",
        email : ""
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
    <Header/>
        <div className="min-vh-100 d-flex align-items-center  mt-10">
        <div className="container ">
          <div className="row ">
            <div className="col-sm-7 mx-auto ">
              <div className="shadow-lg grd back">
                <div className="d-flex align-items-center">
                 
                  <div className="p-4" id="formPanel">
                    <div className="text-center mb-5">
                      <h1 className="customHeading h3 text-uppercase">Contact Us</h1>
                    </div>
                    <form className="form" onSubmit={formik.handleSubmit}>
                      <div className="custom-form-group">
                        <label className="text-uppercase" for="name">
                          Name
                        </label>
                        <input type="text" id="name" className="pb-1" name="name"value = {formik.values.name} onChange={(e) =>onUpdateField("name",e.target.value)}/>
                <small style={{color:"red"}}>{formik.errors.name}</small>
                        
                      </div>
                      <div className="custom-form-group">
                        <label className="text-uppercase" for="email">
                          Email
                        </label>
                        <input type="text" id="email" className="pb-1" name="email"value = {formik.values.email} onChange={(e) =>onUpdateField("email",e.target.value)}/>
                <small style={{color:"red"}}>{formik.errors.email}</small>
                        
                      </div>
                      <div className="custom-form-group">
                        <label className="text-uppercase" for="subject">
                          Subject
                        </label>
                        <input type="text" id="subject" className="pb-1" name="subject" value = {formik.values.subject} onChange={(e) =>onUpdateField("subject",e.target.value)}/>
                <small style={{color:"red"}}>{formik.errors.subject}</small>
                        
                      </div>
                      <div className="custom-form-group">
                        <label className="text-uppercase" for="message">
                          Message
                        </label>
                        
                        <input type="text" id="message" className="pb-1" name="message" value = {formik.values.message} onChange={(e) =>onUpdateField("message",e.target.value)}/>
                <small style={{color:"red"}}>{formik.errors.message}</small>
                        
                      </div>
                      <div className="mt-5">
                      <p className="mt-3 link ms-3">
                       We will try to connect with you soon!
                      </p>
                        <button type="submit" className="w-100 p-2 d-block custom-btn">
                          Send Message
                        </button>
                      </div>
                      
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact