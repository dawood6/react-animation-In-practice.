import React from 'react';
import shoes from './shoe';
import './ProuductIndex.css'
import { Link } from 'react-router-dom';
const LaunchIndex = () => {

    return (

        <div className='grid-container'>
            {Object.entries(shoes).map(([slug, { name, img, price }]) => (
                <Link to={`/prouduct/${slug}`}>
                    <div class="container-shoe shoe">
                        <div class="productImage shoeImg"><img src={img} className='card-img' alt='' /></div>
                        <div class="size shoeSize">
                            <h4>SIZE</h4>
                            <ul>
                                <li>9</li>
                                <li>8</li>
                                <li>7</li>
                            </ul>
                        </div>
                        <div class="price shoePrice">
                            <h4>PRICE</h4>
                            <span>{'$' + price}</span>
                        </div>
                        <div class="color shoeColor">
                            <h4>COLORS</h4>
                            <ul>
                                <li><span class="color1"></span></li>
                                <li><span class="color2"></span></li>
                                <li><span class="color3"></span></li>
                                <li><span class="color4"></span></li>
                            </ul>
                        </div>
                        <div class="productName shoeName">
                            {name}
                        </div>
                    </div>
                </Link>
            ))}
        </div>

    )
}
export default LaunchIndex