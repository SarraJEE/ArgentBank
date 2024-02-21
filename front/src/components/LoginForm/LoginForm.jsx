import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import auth_service from '../../redux/services/ApiService';

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.login.token);
  const error = useSelector((state) => state.login.error);
  const isAuth = useSelector((state) => state.login.isAuth);
  // useEffect pour pré-remplir les champs d'e-mail et de mot de passe après la déconnexion
  useEffect(() => {
    const savedEmail = localStorage.getItem("userEmail");
    const savedPassword = localStorage.getItem("userPassword");

    // Vérifie si la case "Remember me" était cochée lors de la connexion précédente
    const rememberMeChecked = savedEmail && savedPassword;

    /***  Si la case "Remember me" était cochée, pré-remplit les champs d'e-mail et de mot de passe ***/
    if (rememberMeChecked) {
      setEmail(savedEmail);
      setPassword(savedPassword);
      setRememberMe(true); 
    
     
    } else {
      /***  Sinon, réinitialise les champs d'e-mail et de mot de passe ***/
      setEmail("");
      setPassword("");
      setRememberMe(false);
    }
    if (isAuth) {
      navigate('/profile');
  } else {
      console.log("User not authenticated.");
      // Optionally handle the case where user is not authenticated
  }
  }, [token,navigate,isAuth]); /*** Exécuter lorsque le token change, c'est-à-dire après la déconnexion ***/

  const submitForm = (e) => {
    e.preventDefault();
    rememberMe
      ? localStorage.setItem("userEmail", email)
      : localStorage.removeItem("userEmail");
    rememberMe
      ? localStorage.setItem("userPassword", password)
      : localStorage.removeItem("userPassword");
    dispatch(auth_service.login(email, password, rememberMe));
   
  };
  const handleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <form onSubmit={submitForm}>
        <div className="input-wrapper">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="input-remember">
          <input
            type="checkbox"
            id="remember-me"
            checked={rememberMe}
            onChange={handleRememberMe}
          />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button className="sign-in-button">
          Sign In
        </button>
        {error !== null ? <label className="error">{error}</label> : ""}
      </form>
    </section>
  );
};

export default LoginForm;