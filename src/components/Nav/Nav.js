import React, { useState } from 'react'
import "./Nav.css"
import logo from "../../assets/logo.svg"

const Nav = () => {
  const [search,setSearch]=useState(true);
  const [menu,setMenu]=useState(true);

  return (
    <div className='nav-container'>
      <div className='navbar'>
        <div className='logo'>
            <img src={logo} alt="logo" />
        </div>
        <div className='nav-items'>
                <li className='active'>home</li>
                <li>pages</li>
                <li>portfolio</li>
                <li>blog</li>
                <li>shop</li>
        </div>
        <div className='nav-right'>
            <div className='button' onClick={()=>{setSearch(!search)}}>
              <i className= "fa-solid fa-magnifying-glass" ></i>
            </div>
            <div className='menu' onClick={()=>{setMenu(!menu)}}>
              <i className= "fa-solid fa-bars" ></i>
            </div>
        </div>
      </div>

      <div className={search ?  "search-body" : 'search-body active'}>
        <div className='searchs'>
          <i className="fa-solid fa-magnifying-glass glass"></i>
          <input type="text"/>
        </div>
        <div className='close' onClick={()=>{setSearch(!search)}} >
           <i className="fas fa-times"></i>
        </div>
      </div>
      <div className={menu ? 'menu-body':"menu-body active"}>
        <div className='menus'>
                <li className='active'>home</li>
                <li>pages</li>
                <li>portfolio</li>
                <li>blog</li>
                <li>shop</li>
        </div>
        <div className='menu-close' onClick={()=>{setMenu(!menu)}} >
           <i className="fas fa-times"></i>
        </div>
      </div>
    </div>
  )
}

export default Nav
