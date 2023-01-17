import React, { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";

export const Register = (props) => {
    const [pass, setPass] = useState('');
    const [verified,setVerified] = useState(false);
    

    const setfullName = (event) => {
      console.log(event.target.value)
      let value = event.target.value;
      console.log(value)
      setregisterForm({ ...registerForm, text:value})
      console.log(registerForm)     
  }

    //recaptcha function
   function onChange(value) {
      console.log("Captcha value:", value);
      setVerified(true);
    }

    const [registerForm, setregisterForm] = useState({name:"",email:"",password:""});
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(registerForm)

        if(registerForm.confirmPassword !== registerForm.password){
          alert("Password does not match!");
        }
        

    }

    //Confirm Password
    const setPassword = (event) => {
      console.log(event.target.value);
      let value = event.target.value;
      setregisterForm({ ...registerForm , password:value})
    }
    
    const setConfirmPassword = (event) => {
      console.log(event.target.value);
      let value = event.target.value;
      setregisterForm({ ...registerForm , confirmPassword:value})
    }

    const setEmail = (event) => {
            console.log(event.target.value)
            let value = event.target.value;
            setregisterForm({ ...registerForm , email:value})
    }

  return (
    <div className='auth-form-container'>
      <form className='register-form' onSubmit={handleSubmit}>
          <label htmlFor='name'>Full Name</label>
          <input value={registerForm.text} name='name' type="text" id='name' placeholder='Full Name' onChange={setfullName}/>
          <label htmlFor="email" >Email</label>
          <input value={registerForm.email} type="email" placeholder='example@example.com' id="email" name="email" onChange={setEmail}/>
          <label htmlFor="password" >Password</label>
          <input value={registerForm.password} type="password" placeholder='********' id="password" name="password" onChange={setPassword}/>
          <label htmlFor="password" >Confirm Password</label> 
          <input value={registerForm.confirmPassword} type="password" placeholder='********' id="confirmPassword" name="confirmPassword" onChange={setConfirmPassword}/>
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
