import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../pages/admin.css'
import metaLogo from '../assets/metalogo.jpeg'
export const Admin = () => {

  const[name,setname]=useState('')
  const[email,setemail]=useState('')
  const[pasword,setpasword]=useState('')


  const handlesubmit = (e) => {
    e.preventDefault();
   
};


  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          Metaverse Association
        </div>
        <div className="navbarlinks">
          <Link to="/admin01">Admin</Link>
          <Link to="/dashbord">Dashbord</Link>
        </div>
      </nav>
      
      <div className="container">
        <div className="header">
            <img className="logoimg" src={metaLogo} alt="" />
            <h2> Metaverse Admin</h2>
          </div>
          <div className="form">
          <form onSubmit={handlesubmit}>

            <div className="group">
              <label>Name</label>
              <input 
                type="email" 
                onChange={(e) => setname(e.target.value)} 
                required 
              />
            </div>

            <div className="group">
              <label>Email</label>
              <input 
                type="email" 
                onChange={(e) => setpasword(e.target.value)} 
                required 
              />
            </div>
            <div className="group">
              <label>Password</label>
              <input 
                type="text" 
                onChange={(e) => setpasword(e.target.value)} 
                required 
              />
            </div>

            <div className="login-box">
              <button type='submit' className="button">REGISTER</button>
            </div>
          </form>
        </div>
      </div>
      
    </>
  )
}
export default Admin;