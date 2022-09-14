import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import './Header.css'
function Header() {
  const auth = localStorage.getItem("Token")
  const navigate = useNavigate();
  const logout=()=>{
    localStorage.clear("Token");
    navigate("/login")
  }
  return (
    <div>
      <img
      alt="logo"
      className='logo'
      src="https://cdn1.vectorstock.com/i/1000x1000/07/75/food-delivery-logo-design-vector-24450775.jpg"/>
      {auth?
        <ul className='header-ul'>
            <li><Link to='/'>Products</Link></li>
            <li><Link to='/add'>Add Products</Link></li>
            <li><Link to='/update'>Update Products</Link></li>
            <li><Link to='/delete'>Delete Products</Link></li>
            <li><Link to='/profile'>Profile</Link></li>
            <li><Link onClick={logout} to='/login'>Logout</Link></li>  
        </ul>
        :
        <ul className='header-ul header-right'>
          <li><Link to='/signup'>Sign Up</Link></li>
          <li><Link to='/login'>Login</Link></li>
        </ul>
}

    </div>
  )
}

export default Header