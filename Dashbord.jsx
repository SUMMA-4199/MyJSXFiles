import React from 'react'
import { Link } from 'react-router-dom';
export const Dhashbord = () => {
  return (
    <nav className="navbar">
    <div className="navbar-logo">
      Metaverse Association
    </div>
    <div className="navbarlinks">
      <Link to="/admin01">Admin</Link>
      <Link to="/dashbord">Dashbord</Link>
    </div>
  </nav>
  )
}
export default Dhashbord