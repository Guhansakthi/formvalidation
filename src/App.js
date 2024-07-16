import { useFormik } from "formik";
import { useState } from "react";
import Poppup from './Poppup.js'

function App() {
  const[bool,setBool]=useState(0);
  const validate =values=>{
    const errors={}
    if(!values.firstname){
      errors.firstname="*Required First Name"
    }else if(values.firstname.length >8){
      errors.firstname="*Should be less then Eight"
    }if(!values.lastname){
      errors.lastname="*Required Last Name"
    }else if(values.lastname.length >8){
      errors.lastname="*Should be less then Eight"
    }if(!values.email){
      errors.email="*Required Email"
    }else if(!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(values.email)){
      errors.email="*Invalid Email Address"
    }if(!values.password){
      errors.password="*Required password"
    }else if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(values.password)){
      errors.password="*Invalid password"
    }if(!values.confirmpassword){
      errors.confirmpaassword="*Required confirm password"
    }else if(values.confirmpassword !== values.password){
      errors.confirmpassword="*pasword mismatch"
    }
    return errors;

  }
  const formik=useFormik({
    initialValues:{
      firstname:"",
      lastname:"",
      email:"",
      password:"",
      confirmpassword:""
    },
    validate,
    onSubmit : values =>{
      alert(`hello! ,${values.firstname} you Succesfully signedup!`)
    }
  })
  
  return (
    <div className="App">
        <div className="main">
          <h2>Sign Up</h2>
          <form className="signup" onSubmit={formik.handleSubmit}>
            
            <input type="text" name="firstname" placeholder="First name..." autoComplete="off" onChange={formik.handleChange} value={formik.values.firstname} onBlur={formik.handleBlur} />
            {formik.touched.firstname &&  formik.errors.firstname? <span>{formik.errors.firstname} </span> : null}
            <input type="text" name="lastname" placeholder="Last name..." autoComplete="off" onChange={formik.handleChange} value={formik.values.lastname} onBlur={formik.handleBlur}  />
            {formik.touched.lastname &&formik.errors.lastname? <span>{formik.errors.lastname} </span> : null}
            <input type="email" name="email" placeholder="Email id..." autoComplete="off" onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur}   />
            {formik.touched.email &&formik.errors.email? <span>{formik.errors.email} </span> : null}
            <input type="password" name="password" placeholder="Password" autoComplete="off"onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur} />
            {formik.touched.password &&formik.errors.password? <span>{formik.errors.password} </span> : null}
            <input type="password" name="confirmpassword" placeholder="Confirm Password" autoComplete="off" onChange={formik.handleChange} value={formik.values.confirmpassword} onBlur={formik.handleBlur}  />
            {formik.touched.confirmpassword &&formik.errors.confirmpassword? <span>{formik.errors.confirmpassword} </span> : null}
            <input type="submit" value="submit" />
          </form>
        </div>
        <div className="message-box">
          {
            bool? (<Poppup onClick = {formik.handleSubmit} />  ) :null
          }
        </div>

    </div>
  );
}

export default App;
