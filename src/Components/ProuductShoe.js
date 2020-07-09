import React from 'react';
import shoes from './shoe';
import { useParams } from 'react-router';
import './ProuductShoe.css'
import NotFound from './NotFound';

const LaunchShoe = () => {
    const { slug } = useParams();
    const shoe = shoes[slug]

    if (!shoe) {
        return <NotFound />
    }
    const { name, img, price, rate } = shoe
    return (
        <div className='main-con'>
            <div className="mainCon">
                <div className="product-image">
                    <img src="http://co0kie.github.io/codepen/nike-product-page/nikeLogo.png" alt="" className="product-logo" />
                    <img src={img} alt="" className="product-pic" />
                    <div className="dots">
                        <a href="#!" className="activeDots"><i>1</i></a>
                        <a href="#!"><i>2</i></a>
                        <a href="#!"><i>3</i></a>
                        <a href="#!"><i>4</i></a>
                    </div>
                </div>
                <div className="product-details">
                    <header>
                        <h1 className="title">{name}</h1>
                        <div className="shoe-price">
                            <span className="current">{'$' + price}</span>
                        </div>
                        <div className="rate">
                            {rate.map(item => {
                                return <a href="#!" className="activeDots">{item}</a>;
                            })}
                        </div>
                    </header>
                    <article>
                        <h5>Description</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </article>
                    <div className="controls">
                        <div className="Shoe-color">
                            <h5>color</h5>
                            <ul>
                                <li><div href="#!" className="colors color-bdot1" /></li>
                                <li><div href="#!" className="colors color-bdot2" /></li>
                                <li><div href="#!" className="colors color-bdot3" /></li>
                                <li><div href="#!" className="colors color-bdot4" /></li>
                            </ul>
                        </div>
                        <div className="shoe-size">
                            <h5>size</h5>
                            <a href="#!" className="option">(UK 8)</a>
                        </div>
                        <div className="qty">
                            <h5>qty</h5>
                            <a href="#!" className="option">(1)</a>
                        </div>
                    </div>
                    <div className="footer">
                        <button type="button">
                            <img src="http://co0kie.github.io/codepen/nike-product-page/cart.png" alt="" />
                            <span>add to cart</span>
                        </button>
                        <a href="#!"><img src="http://co0kie.github.io/codepen/nike-product-page/share.png" alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LaunchShoe