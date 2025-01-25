import React , { Component } from "react";
import SignupForm from '../components/SignupForm';


class Footer extends Component {
    render(){
        return(
            <div>
                <div className={`footer-area ${this.props.horizontal}`} id="support">
                    <div className="footer-bg"/>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center mb--40">
                                    <h2 className="text-white">BOOK <span className="theme-color">&nbsp;DEMO</span></h2>
                                    <img className="image-1" src={require('../assets/images/app/title-icon.png')} alt="App Landing"/>
                                    <img className="image-2" src={require('../assets/images/app/title-icon-2.png')} alt="App Landing"/>
                                    <img className="image-3" src={require('../assets/images/app/title-icon-3.png')} alt="App Landing"/>
                                    <p className="text-white">Click the DEMO button to learn more about the NewBookings.ai program and book a personalized demo with us. New customer bookings are just a few clicks away!
                                    </p>
                                    {/*<a href="https://mazurprogram.laserappointments.com/optin"><img className="demo-img" src={require('../assets/images/app/demo.png')} alt="CLICK HRERE TO BOOK A DEMO"/></a>*/}
                                    {/*<a href="https://mazurprogram.laserappointments.com/medspabookingsai"><img className="demo-img" src={require('../assets/images/app/demo.png')} alt="CLICK HRERE TO BOOK A DEMO"/></a>*/}
                                    {/*<a href="https://medspa.newbookings.ai/booking"><img className="demo-img" src={require('../assets/images/app/demo.png')} alt="CLICK HRERE TO BOOK A DEMO"/></a>*/}
                                    <a href="https://your.newbooking.ai/landing"><img className="demo-img" src={require('../assets/images/app/demo.png')} alt="CLICK HRERE TO BOOK A DEMO"/></a>
                                </div>
                            </div>
                        </div>
                        {/*<div className="row">
                            <div className="col-lg-5 col-xl-4 offset-xl-1">
                                <div className="contact-inner">
        <h3 className="title title-footer-signup">Sign Up</h3>*/}
                                    {/*<a href="#"><img className="clickhere-img" src={require('../assets/images/app/click_here_transparent.png')} alt="CLICK HERE"/></a>*/}
                                    
                                    {/*<SignupForm />*/}
                                    
                                    {/*<form className="contact-form" action="/" id="signup-form">
                                        <div className="input-box">
                                            <input name="Name" id="Name" type="text" placeholder="Name"/>
                                        </div>

                                        <div className="input-box">
                                            <input type="text" name="Email" id="Email" placeholder="Email"/>
                                        </div>

                                        <div className="input-box">
                                            <input type="text" name="Phone" id="Phone" placeholder="Phone"/>
        </div>*/}

                                        {/*<div className="input-box">
                                            <textarea placeholder="Message"></textarea>
        </div>*/}

                                        {/*<div className="input-box">
                                            <button className="submite-button" type="submit">Submit</button>
    </div>
    </form>*/}
                                {/*</div>
                            </div>
                            <div className="col-lg-5 offset-lg-2 col-xl-4 offset-xl-2 mt_md--40 mt_sm--40">
                                <div className="contact-inner">
                                    <h3 className="title">Contact</h3>
                                    <div className="conatct-info">
                                        <div className="single-contact-info">
                                            <div className="contact-icon">
                                                <i className="zmdi zmdi-phone"></i>
                                            </div>
                                            <div className="contact-text">
                                                <span>(877) 561-9840</span>
                                            </div>
                                        </div>
                                        <div className="single-contact-info">
                                            <div className="contact-icon">
                                                <i className="zmdi zmdi-globe-alt"></i>
                                            </div>
                                            <div className="contact-text">
                                                <span>Info@mazurprogram.com
                                                </span>
                                            </div>
</div>*/}
                                        {/*<div className="single-contact-info">
                                            <div className="contact-icon">
                                                <i className="zmdi zmdi-pin"></i>
                                            </div>
                                            <div className="contact-text">
                                                <span>Dev Items address goes here,<br /> street,Crossroad123.</span>
                                            </div>
    </div>*/}
                                    {/*</div>
                                </div>
                            </div>
                        </div>*/}
                        {/*<div className="row">
                            <div className="col-lg-8 offset-lg-2 col-xl-6 offset-xl-3">
                                <div className="newsletter text-center">
                                    <h3 className="text-white title">SUBSCRIBE FOR OUR NEWSLETTER</h3>
                                    <p className="text-white">There are many variations of passages of Lorem Ipsum available,<br />
                                        but the majorityhave alteration in some form, by injected humour,available</p>
                                    <form action="/" method="post" id="newsletter">
                                        <div className="newsletter-content">
                                            <input type="text" name="email" placeholder="Enter your Email address" />
                                            <button type="submit" className="button"><span>Subscribe</span></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
</div>*/}
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2 col-xl-4 offset-xl-4">
                                <div className="footer-links text-center">
                                    <a href="https://www.facebook.com/mazur.program/"><i className="zmdi zmdi-facebook"></i></a>
                                    <a href="https://www.instagram.com/mazurprogram?igsh=eDNwbnk2a2x1b3Yy&utm_source=qr

"><i className="zmdi zmdi-instagram"></i></a>
                                    <a href="https://www.youtube.com/channel/UCMqFbbx2ytOqL7VsjV83bWA"><i className="zmdi zmdi-youtube"></i></a>
                                    {/*<a href="/"><i className="zmdi zmdi-twitter"></i></a>
                                    <a href="/"><i className="zmdi zmdi-google"></i></a>
                                    <a href="/"><i className="zmdi zmdi-linkedin"></i></a>
<a href="/"><i className="zmdi zmdi-pinterest"></i></a>*/}
                                </div>
                                <div className="footer-text text-center">
                                    <span>Copyright © NewBookings.ai {new Date().getFullYear()} {/*<a href="https://hasthemes.com">HasThemes</a>*/}</span>
                                    <br /> <a href="/Terms_and_Condition.html">Terms & Conditions</a> | <a href="/Privacy_Policy.html">Privacy Policy</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tap-top">
                    <div>
                        <i className="zmdi zmdi-long-arrow-up"></i>
                    </div>
                </div>
            </div>
        )
    }
}
export default Footer







