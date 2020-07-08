import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'


const Navbar = () => {
    return (
        <div className='storeNav'>
            {/* <Link to='/' className='logoStore' >Shoe Store</Link>
            <header className='nav-bar'>
                <Link to='/'>Home</Link>
                <Link to='/prouduct'>Prouducts</Link>
                <Link to='/info'>Information</Link>
                <Link to='/contact'>Contact</Link> */}
            <nav id="navbar" className="">
                <div className="nav-wrapper">
                    <div className="logo">
                        <a href="#home">Shoe Store</a>
                    </div>
                    <ul id="menu">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/prouduct'>Prouducts</Link></li>
                        <li><Link to='/info'>Information</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                    </ul>
                </div>
            </nav>
            {/* </header > */}
        </div >
    )
}

export default Navbar
