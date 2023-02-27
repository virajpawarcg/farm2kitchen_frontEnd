import './Register.css'
import { Container } from "react-bootstrap";
import React, {useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import register from "../Images/register.png";
import {useFormik} from 'formik';
import * as yup from "yup";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import RegisterService from '../../Service/RegisterService';


const Signup = (props) =>{
    
    const phoneRegExp = /^[0-9]{10}$/
    const Navigate = useNavigate();
    const registerFormSchema = yup.object().shape({
        fullName : yup.string().min(3).required("Name must be at least 3 characters"),
        userName : yup.string().min(6).required("Username must be at least 6 characters"),
        email : yup.string().email().required("Email is a required field"),
        mobile : yup.string().matches(phoneRegExp, 'Phone number is not valid').required("10 digit mobile number is a required field"),
        password : yup.string().min(8).required("Please enter password of atleast 10 charaters"),
        confirmPassword : yup.string().min(8).required("Please enter Confirm Password same as above Password"),
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
        email : "",
        mobile : "",
        password : "",
        confirmPassword : "",

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
    
    return(
    <>
    <Container id='signup' style={{marginTop:"10px"}} >
        <h1 >SignUp</h1>
            <div className='row'>
                <div className='col'>
                    <form className='from' onSubmit={formik.handleSubmit}>
                        <div className="custom-form-group mt-3">
                            <label className="text-uppercase" for="fullname">
                            Full Name
                            </label>
                            <input type="text" name="fullName" id="fullname"
                            className="pb-1"
                            value = {formik.values.fullName} 
                            onChange={(e) =>onUpdateField("fullName",e.target.value)}/>
                            <small style={{color:'red'}}>{formik.errors.fullName}</small>
                        </div>
                        <div className="custom-form-group mt-3">
                            <label className="text-uppercase" for="userName">
                            User Name
                            </label>
                            <input type="text" id="userName"
                            className="pb-1" 
                            name="userName"  
                            value = {formik.values.userName} 
                            onChange={(e) =>onUpdateField("userName",e.target.value)}/>
                            <small style={{color:'red'}}>{formik.errors.userName}</small>
                        </div>
                        <div className="custom-form-group mt-3">
                            <label className="text-uppercase" for="email">
                            Email
                            </label>
                            <input type="text" id="email"
                            className="pb-1" 
                            name="email"  
                            value = {formik.values.email} 
                            onChange={(e) => onUpdateField("email",e.target.value)}/><br/>
                            <small style={{color:'red'}}>{formik.errors.email}</small>
                            
                        </div>
                        <div className="custom-form-group mt-3">
                            <label className="text-uppercase" for="mobile">
                            Mobile Number
                            </label>
                            <input type="tel" id="mobile"
                            className="pb-1" 
                            name="mobile"  
                            value = {formik.values.mobile} 
                            onChange={(e) => onUpdateField("mobile",e.target.value)} /><br/>
                            <small style={{color:'red'}}>{formik.errors.mobile}</small>
                            
                        </div>
                        <div className="custom-form-group mt-3">
                            <label className="text-uppercase" for="password">
                            Password
                            </label>
                            <input type="password" id="password"
                            className="pb-1" 
                            name="password"  
                            value = {formik.values.password} 
                            onChange={(e) => onUpdateField("password",e.target.value)}/>
                            <small style={{color:'red'}}>{formik.errors.password}</small>
                        </div>
                        <div className="custom-form-group mt-3">
                            <label className="text-uppercase" for="confirmpassword">
                            Confirm Password
                            </label>
                            <input
                            type="password"
                            id="confirmpassword"
                            className="pb-1"
                            name="cpassword"  
                            value = {formik.values.confirmPassword} 
                            onChange={(e) => onUpdateField("confirmPassword",e.target.value)}/>
                            <small style={{color:'red'}}>{formik.errors.confirmPassword}</small>
                        </div>
                        <div className="mt-5">
                            
                            <button  type="submit" className="w-100 p-2 d-block custom-btn" disabled={!formik.isValid}>
                            SignUp
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
                <div className='col' style={{marginTop:'-4%'}}>
                    <div className="d-none d-md-block d-lg-block p-2">
                        <img src={register} className="objectFit" />
                    </div>
                </div>
            </div>    
        </Container>
        </>
        );
}
export default Signup;