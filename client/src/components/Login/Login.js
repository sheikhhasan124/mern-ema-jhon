import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css'
import Logo from '../../images/Google.svg'

import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
    const navigate = useNavigate()

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
       const location = useLocation()
       const from = location?.state?.from?.pathname || '/';

    const handleEmailBlur= event=>{
         setEmail(event.target.value)
    }
     const handlePasswordBlur=event=>{
         setPassword(event.target.value)
     } 

     if(user){
        // navigate('/shop')
        navigate(from, {replace:true})
     }
     const handleUserSignIn=event=>{
         event.preventDefault()

         signInWithEmailAndPassword(email, password)
     }

    return (
        <div className='form-container'>
           <div>
           <h2 className='form-title'>login</h2>
              <form onSubmit={handleUserSignIn}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id=""required/>
                    </div>
                    <input className='submit-btn' type="submit" value="Login" />
                    <p>{error?.message}</p>
                    {
                        loading && <p>loading...</p>
                    }
              </form>
              <p>New to Ema-Jhon? <Link className='form-link' to="/signup">create an account</Link></p>
               <div className="form-horizontal">
                  <div className='hr'> </div>
                  <p>or</p>
                  <div className='hr'> </div>
               </div>
                <div>
                    <button className="google-btn"> <img src={Logo} alt="" /> <p>Continue with Google</p></button>
                </div>
           </div>
        </div>
    );
};

export default Login;