import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'


const Navbar = () => {
    return (
        <div>
            <header className='nav-bar'>
                <Link to='/'>Shoe Store</Link>
                <Link to='/'>Home</Link>
                <Link to='/prouduct'>Prouducts</Link>
                <Link to='/info'>Information</Link>
                <Link to='/contact'>Contact</Link>
            </header >
        </div>
    )
}

export default Navbar
