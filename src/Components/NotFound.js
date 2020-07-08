import React from 'react';
import './NotFound.css'
import { Link } from 'react-router-dom';
const NotFound = () => {
    return (
        <div className='not-found'>
            <h1 className='h1'>Not Found</h1>
            <p className='p'>Sorry your page was not found</p>
            <button className='not-found-btn'>
                <Link to='/prouduct'> <span>Go Checkut Our Cool Prouducts</span></Link>
            </button>
        </div>
    )
}
export default NotFound