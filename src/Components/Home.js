import React from 'react';
import './Home.css'
import mainImg from '../main-img.png'
import logoImg from '../nike-logo.png'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <main>
                <section className="intro">
                    <div className="intro-img"> <img src={mainImg} alt="illustration-intro" /></div>
                    <div className="intro-content">
                        <h1>JORDAN BRAND WINGS</h1>
                        <p className="lg-p mt-2">"Through our Jordan Wings Program, we have been focused on providing access to education,
                        mentorship and opportunity for Black youth facing the obstacles of systemic racism. But we know
                        we can do more. We must join forces with the community, government and civic leaders to create a
                        lasting impact together,” said Craig Williams, President of Jordan Brand. “There is still more work
                        for us to do to drive real impact for the Black Community. We embrace the responsibility.”
                         </p>
                        <button className="btn mt-2"> Get Started</button></div>
                </section>
                <section className="features">
                    <div className="features-item">
                        <div className="features-item-head"> <img src='https://i.ibb.co/hKbcnXX/air-jordan-14-retro.png' alt="" /> </div>
                        <div className="features-item-body  mt-2">
                            <h3>Air Jordan 14 Retro</h3>
                            <p>The Air Jordan !4 Retro stands out with its intricately detailed, laser-etched upper. Its webbed lacing system and foam-backed collar stabilize a performance fit.</p>
                        </div>
                    </div>
                    <div className="features-item">
                        <div className="features-item-head"> <img src='https://i.ibb.co/TcY35bf/air-jordan-1-low-shoe.png' alt="" /> </div>
                        <div className="features-item-body mt-2">
                            <h3> Air Jordan 1 low</h3>
                            <p>The Air Jordan 1 low continues the legacy of a cultural icon. Light, responsive and sculpted with aerodynamic precision,   combines boldly unconventional midsole.</p>
                        </div>
                    </div>
                    <div className="features-item">
                        <div className="features-item-head"> <img src='https://i.ibb.co/WV7pM3W/jordan-delta.png' alt="" /> </div>
                        <div className="features-item-body  mt-2">
                            <h3> Jordan Delta </h3>
                            <p>One of the game's fiercest competitors, triple-double dynamo Russell Westbrook has the motor, muscle and mentality to match his  fearlessness   with the stats to.</p>
                        </div>
                    </div>
                    <div className="features-item">
                        <div className="features-item-head"> <img src='https://i.ibb.co/6yfZfgP/air-jordan-xxxiv.png' alt="" /> </div>
                        <div className="features-item-body  mt-2">
                            <h3>Air Jordan xxxiv</h3>
                            <p>Pay homage to MJ's legendary career in the Air Jordan xxxiv. The design pulls  in  elements  from  a  range of iconic Jordan's , like the patent leather mudguard.</p>
                        </div>
                    </div>
                </section>
                <section className="productive">
                    <div className="productive-img"> <img src={logoImg} alt="" /> </div>
                    <div className="productive-content">
                        <h2>DESGN TO HELP REDUCE INJURY</h2>
                        <p className="lg-p">Up to 40% Off <br /> <Link to='/prouduct'>Shop Our Latest Sale Styles</Link> </p>
                        <p className="lg-p">Want To Know More Information About Us </p>
                        <p className="lg-p"> <a className="content-link" href="#">See how Fylo works <i className="fas fa-arrow-alt-circle-right" /></a> </p>
                    </div>
                </section>
                <section className="testimonial">
                    <div className="testimonial-item">
                        <div className="testimonial-item-text">
                            <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
                        </div>
                        <div className="testimonial-item-reviewer">
                            <div className="testimonial-item-reviewer-img"> <img src="https://hannahshiels.github.io/Fylo-dark-theme-landing-page/images/profile-1.jpg" alt="" /></div>
                            <div className="ml-1 testimonial-item-reviewer-text">
                                <h4>Satish Patel</h4>
                                <p>Founder &amp; CEO, Huddle</p>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-item">
                        <div className="testimonial-item-text">
                            <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
                        </div>
                        <div className="testimonial-item-reviewer">
                            <div className="testimonial-item-reviewer-img"> <img src="https://hannahshiels.github.io/Fylo-dark-theme-landing-page/images/profile-2.jpg" alt="" /></div>
                            <div className="ml-1 testimonial-item-reviewer-text">
                                <h4> Bruce McKenzie </h4>
                                <p>Founder &amp; CEO, Huddle</p>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-item">
                        <div className="testimonial-item-text">
                            <p> Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
                        </div>
                        <div className="testimonial-item-reviewer">
                            <div className="testimonial-item-reviewer-img"> <img src="https://hannahshiels.github.io/Fylo-dark-theme-landing-page/images/profile-3.jpg" alt="" /></div>
                            <div className="ml-1 testimonial-item-reviewer-text">
                                <h4> Iva Boyd</h4>
                                <p>Founder &amp; CEO, Huddle</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="cta">
                    <div className="cta-item">
                        <div className="cta-text">
                            <h2>Get early access today </h2>
                            <p>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
                        </div>
                        <form className="cta-form mt-2" action>
                            <input className="input-block" type="text" placeholder="example@email.com" /> <button className="btn-block">Get Started For Free</button> </form>
                    </div>
                </section>
            </main>
            <footer>
                <section className="contact-info">
                    <div className="contact-info-location">
                        <div className="contact-info-location-item">
                            <i class="fa fa-map-marker" aria-hidden="true"></i>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                        </div>
                    </div>
                    <div className="contact-info-contacts">
                        <div className="contact-info-contacts-item">
                            <img className="img-footer" src="https://hannahshiels.github.io/Fylo-dark-theme-landing-page/images/icon-phone.svg" alt="" />
                            <p>+1-543-123-4567</p>
                        </div>
                        <div className="contact-info-contacts-item ">
                            <img className="img-footer" src="https://hannahshiels.github.io/Fylo-dark-theme-landing-page/images/icon-email.svg" alt="" />
                            <p>example@fylo.com</p>
                        </div>
                    </div>
                    <nav className="contact-info-links">
                        <ul className="contact-info-links-list">
                            <li> <a href="#">About Us</a> </li>
                            <li> <a href="#">Jobs</a> </li>
                            <li> <a href="#">Press</a> </li>
                            <li> <a href="#">Blog</a> </li>
                        </ul>
                        <ul className="contact-info-links-list">
                            <li> <a href="#">Contact Us</a> </li>
                            <li> <a href="#">Terms</a> </li>
                            <li> <a href="#">Privacy</a> </li>
                        </ul>
                    </nav>
                    <div className="contact-info-social-links">
                        <a className="icon-link" href="#">
                            <div className="contact-info-social-link-item flex-center"><i class="fa fa-facebook" aria-hidden="true"></i></div>
                        </a>
                        <a className="icon-link" href="#">
                            <div className="contact-info-social-link-item flex-center"><i class="fa fa-twitter" aria-hidden="true"></i></div>
                        </a>
                        <a className="icon-link" href="#">
                            <div className="contact-info-social-link-item flex-center"><i class="fa fa-instagram" aria-hidden="true"></i></div>
                        </a>
                    </div>
                </section></footer></div>

    )
}
export default Home