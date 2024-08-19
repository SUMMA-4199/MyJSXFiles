import '../pages/login.css'
import metaLogo from '../assets/metalogo.jpeg'
import '../pages/home.css'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { Footer } from './Footer';
import { Header } from './Header';

export const Login = () => {

  const [username, setusername] = useState("")
  const [password, setpassword] = useState("")
  const navigate = useNavigate()

  const handlesubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/login', { email: username, password })
        .then(response => {
            if (response.status === 200) {
                localStorage.setItem('username', username);
                console.log("Navigating");
                navigate('/'); 
            } else {
                console.log("Login failed");
            }
        })
        .catch(err => console.log(err)); 
};

  return (
    <>
      <Header/>

      <div className="container">

        <div className="header">
          <img className="logoimg" src={metaLogo} alt="" />
          <h2>Meteverse Login</h2>
        </div>

        <div className="form">
          <form onSubmit={handlesubmit}>

            <div className="group">
              <label>Email</label>
              <input 
                type="email" 
                onChange={(e) => setusername(e.target.value)} 
                required 
              />
            </div>

            <div className="group">
              <label>Password</label>
              <input 
                type="password" 
                onChange={(e) => setpassword(e.target.value)} 
                required 
              />
            </div>

            <div className="login-box">
              <button type='submit' className="button">LOGIN</button>
            </div>
          </form>
        </div>

      </div>

      <Footer/>
    </>
  )
}

export default Login;