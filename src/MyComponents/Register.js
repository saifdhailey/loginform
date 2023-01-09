import React, { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";

export const Register = (props) => {
    const [pass, setPass] = useState('');
    const [verified,setVerified] = useState(false);
    

    const setfullName = (event) => {
      console.log(event.target.value)
      let value = event.target.value;
      setregisterForm({ ...registerForm, text:value})
  }

    //recaptcha function
   function onChange(value) {
      console.log("Captcha value:", value);
      setVerified(true);
    }

    const [registerForm, setregisterForm] = useState({name:"",email:"",password:""});
    const handleSubmit = (e) => {
        e.preventDefault();
    }


  return (
    <div className='auth-form-container'>
      <form className='register-form' onSubmit={handleSubmit}>
          <label htmlFor='name'>Full Name</label>
          <input value={registerForm.text} name='name' id='name' placeholder='Full Name'></input>
          <label htmlFor="email" >Email</label>
          <input type="email" placeholder='example@example.com' id="email" name="email"/>
          <label htmlFor="password" >Password</label>
          <input type="password" placeholder='********' id="password" name="password"/>
          <label htmlFor="password" >Confirm Password</label> 
          <input type="password" placeholder='********' id="password" name="password"/>
          <label for="birthday">Date of Birth:</label>
          <input type="date" id="birthday" name="birthday"/>
          <ReCAPTCHA
          sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
          onChange={onChange}
          />
          <button className='convert' type="submit" disabled={!verified}>Register</button>
      </form>
      <button className='link-btn' onClick={() => props.onFormSwitch('login')} >Already have an account? Log In here.</button>
    </div>
  )
}
