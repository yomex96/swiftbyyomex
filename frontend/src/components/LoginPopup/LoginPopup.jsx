import React, { useContext, useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import axios from "axios"
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useNavigate } from 'react-router-dom';



const LoginPopup = ({ setShowLogin }) => {
  const { url, setToken } = useContext(StoreContext);

  const [currState, setCurrState] = useState("Login");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [showPassword, setShowPassword] = useState(false); // State to track password visibility
  const [notification, setNotification] = useState({ message: '', type: '' });

  const navigate = useNavigate();


  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }));
  };

  const showNotification = (message, type) => {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification({ message: '', type: '' });
    }, 3000);
  };

  const onLogin = async (event) => {
    event.preventDefault();
    let newUrl = url;
    if (currState === "Login") {
      newUrl += "/api/user/login";
    } else {
      newUrl += "/api/user/register";
    }

    try {
      const response = await axios.post(newUrl, data);

      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem('token', response.data.token);
        showNotification('Login successful!', 'success');
        setTimeout(() => {
          setShowLogin(false);
        }, 2000);
      } else {
        showNotification('Incorrect password or email. Please try again.', 'error');
      }
    } catch (error) {
      console.error('An error occurred during login:', error);
      showNotification('An error occurred. Please try again later.', 'error');
    }
  };



  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };



  return (
    <div className='login-popup'>
      {notification.message && (
        <div className={`notification ${notification.type}`}>
          {notification.message}
        </div>
      )}
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="Close" />
        </div>
        <div className="login-popup-inputs">
          {currState !== 'Login' && (
            <input
              name='name'
              onChange={onChangeHandler}
              value={data.name}
              type="text"
              placeholder='Your name'
              required
            />
          )}
          <input
            name='email'
            onChange={onChangeHandler}
            value={data.email}
            type="email"
            placeholder='Your email'
            required
          />
         <div className="password-input-container">
          <input
              name='password'
              onChange={onChangeHandler}
              value={data.password}
              type={showPassword ? 'text' : 'password'}
              placeholder='Password'
              required
            />
            <span className="password-toggle-icon" onClick={toggleShowPassword}>
            <i className={showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'}></i>
          </span>
          </div>
          <span id='sp' style={{ color: '#157ae1', cursor: 'pointer' }} onClick={()=>navigate('/forgetpassword')}>
              Forgot Password ?{' '}
            </span>
        </div>
        
        <button type='submit'>{currState === 'Sign Up' ? 'Create account' : 'Login'}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p className='continuee'>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
        {currState === 'Login'
          ? <p>Create a new account? <span onClick={() => setCurrState('Sign Up')}>Click here</span></p>
          : <p>Already have an account? <span onClick={() => setCurrState('Login')}>Login here</span></p>
        }
      </form>
    </div>
  );
};



export default LoginPopup;


