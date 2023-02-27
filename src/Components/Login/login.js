import './login.css'
import { Link, useNavigate } from "react-router-dom";
import register from "../Images/login2.png";
import React, {useCallback } from "react";
import {useFormik} from 'formik';
import * as yup from "yup";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import LoginService from "../../Service/LoginService"

function Login(){

const Nav=useNavigate();
const registerFormSchema = yup.object().shape({
  email : yup.string().email().required("Email is a required field"),
  password : yup.string().min(8).required("Please enter password of atleast 10 charaters"),
});

// const handleOnSubmit = (values) => {
//   const fullData = Object.keys(values)
//                           .map((key) => values[key])
//                           .join(" ");
//   Nav("/home")
// {/*alert(`User Data = ${fullData}`);*/}
// };
const handleOnSubmit = (values) => {
  console.log("inside handleOnSubmit")
  
  if(values.email==="admin@f2k.com"&&values.password==="f2kstore"){
    Nav("/admin")
  }else{
  async function saveLogin(){
      try{
          
        LoginService.saveLogin(formik.values).then(
              (res) => {
                console.log(JSON.stringify(res)) 
                  alert(res.data.status)   
                  if(res.data.status==="Successfully Logged In"){
                  Nav('/home')
                  }
              }
          )
      }catch(error){
          console.log(error);
      }
  }
  saveLogin();
}
  
};
const formik = useFormik({
  initialValues:{
      email : "",
      password : "",
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
        <div class="container" id='login'  style={{marginTop:"2%"}}>
            <h1 id='h1' style={{paddingTop:'10%'}} >Login</h1>
        <div className='row'> 
          <div className='col' id='col1'>    
          <form onSubmit={formik.handleSubmit}>
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
                      <div className="mt-5">
                        <button type="submit" className="w-100 p-2 d-block custom-btn" disabled={!formik.isValid}>
                          Login
                        </button>
                      </div>
                      <p className="mt-3 link">
                        Don't have a Acount?{" "}
                        <Link to="/register">
                          <label className="linklabel"> SignUp Here</label>
                        </Link>
                      </p>
                    </form>
            </div>
            <div className='col' id='col2' style={{marginTop:'-12%'}}>
                      <div className="d-none d-md-block d-lg-block p-2">
                          <img className="objectFit" src={register} />
                      </div>
                  </div>
          </div>
        </div>  
        </>
    );
}

export default Login;