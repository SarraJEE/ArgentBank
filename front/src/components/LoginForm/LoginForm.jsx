import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import auth_service from '../../redux/services/ApiService';



/**
 * Creates form component
 * @returns { HTMLElement }
 */
const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false); // Utilisez un état local pour la case à cocher "Remember me"
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const token = useSelector((state)=> state.login.token)
  const error = useSelector((state)=> state.login.error)
  
  const submitForm = (e) => {
    e.preventDefault();
    rememberMe ? localStorage.setItem("userEmail", email) : localStorage.removeItem("userEmail");
    // Utilisez la valeur de rememberMe dans la fonction login
    dispatch(auth_service.login(email, password, rememberMe));
  }
/**
	 * When the user clicks the checkbox, the value of the checkbox is set to the opposite of what it was
	 * before.
	 */
	const handleRememberMe = () => {
		setRememberMe(!rememberMe);
	};
  useEffect(()=>{
    if(token !== null || localStorage.getItem('token') !== null){
      navigate('/profile')
    }
  },[token, navigate])

  return (
    <section className="sign-in-content">
       <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
      <form onSubmit={submitForm}>
        <div className="input-wrapper">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" onChange={(e) => { setEmail(e.target.value) }} />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" onChange={(e) => { setPassword(e.target.value)}} />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" checked={rememberMe} onChange={handleRememberMe}/>
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button className="sign-in-button" type='submit'>Sign In</button>
        {error !== null ? <label className='error'>{error}</label> : ""}
      </form>
    </section>
  )
}

export default LoginForm;
