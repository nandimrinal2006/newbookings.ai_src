import React ,  { Component } from "react";

class About extends Component{
    render(){
        return(
            <div className={`app-about ${this.props.horizontalabout}`}  id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center mb--40">
                                <h2>VIDEO ADS. <span className="theme-color">AI BOOKING.</span></h2>
                                <img className="image-1" src={require('../assets/images/app/title-icon.png')} alt="App Landing"/>
                                <img className="image-2" src={require('../assets/images/app/title-icon-2.png')} alt="App Landing"/>
                                <img className="image-3" src={require('../assets/images/app/title-icon-3.png')} alt="App Landing"/>
                                <p>As a successful business, your time is valuable and managing ads, leads, and bookings can be overwhelming. We handle every step for you, delivering new client bookings directly to your email.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-5 offset-lg-1 mt--40">
                            <div className="about-thumbnail mr--35">
                                <img className="image-1" src={require('../assets/images/app/Image_2.png')} alt="App Landing"/>
                                <img className="image-2" src={require('../assets/images/app/Image_2.png')} alt="App Landing"/>
                                <img className="image-3" src={require('../assets/images/app/Image_2.png')} alt="App Landing"/>
                            </div>
                        </div>
                        <div className="col-lg-6 mt--40">
                            <div className="about-content">
                                <h2 className="title">WE DO IT <span className="theme-color">ALL.</span></h2>
                                <p>From creating attention-grabbing video ads to nurturing leads and driving bookings, NewBookings.ai manages every step for you. Enjoy a steady stream of new clients, a seamless booking system, and access to our library of licensed video ads—fully handled on your behalf. Each NEWBookings.ai member is assigned a customized AI-powered agent, specifically designed to convert leads into confirmed bookings.</p>
                                <p>Focus on what you do best while NewBookings.ai works tirelessly behind the scenes to bring new clients through your doors. Our system continuously generates fresh leads, follows up with potential clients, and ensures that every appointment is booked and confirmed, so you can spend less time managing outreach and more time growing your business.
                                </p>
                                <div className="about-buttons">
                                    {/*<a href="https://app.mazurprogram.com"><button type="button" className="button-default button-olive button-border">Download</button></a>*/}
                                    <a href="#download"><button type="button" className="button-default button-olive button-border">Download</button></a>
                                    <a className="button-default button-border" href="#support" role="button">BOOK DEMO</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;











