import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css'
import Logo from '../../images/Google.svg'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SignUp = () => {
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
    const [confirmPassword, setConfirmPassword]=useState('')
    const [error, setError]=useState('')
    const navigate = useNavigate()

    const [createUserWithEmailAndPassword,hookError, user]=useCreateUserWithEmailAndPassword(auth)

    const handleEmailblur=event=>{
        setEmail(event.target.value)
    }
    const handlePasswordBlur=event=>{
        setPassword(event.target.value)
    }
    const handleConfirmPasswordBlur=event=>{
        setConfirmPassword(event.target.value)
    }
    if(user){
        navigate('/shop')
    }
    const handleCreateUser=event=>{
        event.preventDefault()

        if(password !== confirmPassword){
              setError('your two password did not match')
              return;
        }
        if(password.length <6){
            setError('password must be 6 charecter or longer')
            return;
        }
        createUserWithEmailAndPassword(email,password)
        .then(result=>{
           
            console.log('user created');
        })
    }
    return (
        <div className='form-container'>
        <div>
        <h2 className='form-title'>Sign Up</h2>
           <form onSubmit={handleCreateUser}>
                 <div className="input-group">
                     <label htmlFor="email">Email</label>
                     <input onBlur={handleEmailblur} type="email" name="email" id="" required/>
                 </div>
                 <div className="input-group">
                     <label htmlFor="password">Password</label>
                     <input onBlur={handlePasswordBlur} type="password" name="password" id="" required/>
                 </div>
                 <div className="input-group">
                     <label htmlFor="confirm-password">Confirm Password</label>
                     <input onBlur={handleConfirmPasswordBlur} type="password" name="confirm-password" id="" required/>
                 </div>
                 <p>{error}</p>
                 <p>{hookError}</p>

                 <input className='submit-btn' type="submit" value="Sign Up" />
           </form>
           <p> Already have an account? <Link className='form-link' to="/login">log in</Link></p>
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

export default SignUp;