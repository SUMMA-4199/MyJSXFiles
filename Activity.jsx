import React from 'react'
import '../pages/activity.css'
import { Link } from 'react-router-dom';
import { Header } from './Header';

export const Activity = () => {

  const handlesubmit=()=>{

  }
  return (
    <>
   <Header/>
   <div className="container">
    <h3>Today Activity</h3>
    <div className="form">
          <form onSubmit={handlesubmit}>

            <div className="group">
              <label>TITLE</label>
              <input 
                type="email" 
                onChange={(e) => setusername(e.target.value)} 
                required 
              />
            </div>

            <div className="group">
              <label>SCREENSHOT</label>
              <input 
                type="file" 
                onChange={(e) => setpassword(e.target.value)} 
                required 
              />
            </div>

            <div className="login-box">
              <button type='submit' className="button">SUBMIT</button>
            </div>
          </form>
        </div>
   </div>

    </>
  )
}
export default Activity;

