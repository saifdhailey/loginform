import React, { useState } from 'react'

export const Login = (props) => {
    async function loginUser(credentials) {
        console.log(credentials,"^^^^^^^^^^^^^^^^^^^^^^^");
        return fetch('https://www.mecallapi.com/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
        })
        .then(data => data.json())
    }
        
        const [loginForm, setloginForm] = useState({email:"",password:""});
        const handleSubmit = async (e) => {
            e.preventDefault();
            
        console.log(loginForm,"**************");
            const r1 = await loginUser(
                loginForm
            )
            console.log(r1,"r1")
            // console.log(email);
        }
        const setEmail = (event) => {
            console.log(event.target.value)
            let value = event.target.value;
            // setloginForm()
            setloginForm({ ...loginForm , email:value})
        }

        const setPassword = (event) => {
            console.log(event.target.value);
            let value = event.target.value;
            setloginForm({ ...loginForm , password:value})
        }

  return (
      <div className='auth-form-container'>
      <form className='login-form' onSubmit={handleSubmit}>
          <label htmlFor="email" >Email</label>
          <input value={loginForm.email} type="email" placeholder='example@example.com' id="email" name="email" onChange={setEmail} required/>
          <label htmlFor="password" >Password</label>
          <input value={loginForm.password} placeholder='********' id="password" name="password" onChange={setPassword} required/>
          <button type='submit'>Log In</button>
      </form>
      <button className='link-btn' onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
      </div>
    )
}
