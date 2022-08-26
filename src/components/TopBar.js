
import React from 'react';
import './TopBar.css'

function TopBar() {
  return (
    <nav className="container-fluid sticky-top">
        <div className="navbar-collapse">
            <ul className="nav nav-tabs">
                <li className="navbar-nav text mt-1">         
                    <div className='topbar'>
                            <h3 className='appname'>Instagram</h3>
                            <button type="button" className ="btn btn-small dropdown-toggle" data-bs-toggle="dropdown"></button>
                            <ul className ="dropdown-menu dropdown-menu-end">
                            <li><a className ="dropdown-item" href="#">Following</a></li>
                            <li><a className ="dropdown-item" href="#">Favourites</a></li>
                            </ul>
                    </div>   
                </li>
                <li>
                    <input className="nav-item text-dark mb-2" placeholder='Search' />
                </li>
                <li>
                    <a className=" btn btn-primary btn-sm active log" href="#"><b>Log In</b></a>
                </li>
                <li>
                    <a className=" btn btn-sm text-primary sign" href="#"><b>Sign Up</b></a>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default TopBar;