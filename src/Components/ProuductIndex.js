import React from 'react';
import shoes from './shoe';
import './ProuductIndex.css'
import { Link } from 'react-router-dom';
const LaunchIndex = () => {

    return (
        // <div classNameName='main'>
        //     <ul classNameName='list grid-view'>
        //         {Object.entries(shoes).map(([slug, { name, img, price }]) => (
        //             <li key={slug}>
        //                 <ProductCard
        //                     photos={[img]}
        //                     price={'$' + price}
        //                     productName={name}
        //                     description='Donec lectus nulla, molestie aliquam nisl vitae, tempor placerat magna. Morbi dignissim in felis vel aliquet.'
        //                     buttonText='Add to cart'
        //                     rating={3}
        //                     url={`/prouduct/${slug}`}
        //                 />
        //             </li>
        //         ))}
        //     </ul>
        // </div>
        // <div>
        //     <ProductCard
        //         photos={['https://i.imgur.com/jRVDeI8.jpg']}
        //         price='$99'
        //         productName='Headphones'
        //         description='Donec lectus nulla, molestie aliquam nisl vitae, tempor placerat magna. Morbi dignissim in felis vel aliquet.'
        //         buttonText='Add to cart'
        //         rating={3}
        //     />
        // </div>
        <div className='grid-container'>
            {Object.entries(shoes).map(([slug, { name, img, price }]) => (
                <Link to={`/prouduct/${slug}`}>
                    <div class="container shoe">
                        <div class="productImage shoeImg"><img src={img} className='card-img' /></div>
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
                            <span>$150</span>
                        </div>
                        <div class="color shoeColor">
                            <h4>COLORS</h4>
                            <ul>
                                <li><span class="blue"></span></li>
                                <li><span class="yellow"></span></li>
                                <li><span class="red"></span></li>
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