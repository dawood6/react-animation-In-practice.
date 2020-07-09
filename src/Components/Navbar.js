import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'


const Navbar = () => {
    return (
        <div className='storeNav'>
            <nav id="navbar" className="">
                <div className="nav-wrapper">
                    <div className="logo">
                        <a href="#home">Shoe Store</a>
                    </div>
                    <ul id="menu">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/prouduct'>Prouducts</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                    </ul>
                </div>
            </nav>
            {/* </header > */}
        </div >
    )
}

export default Navbar
