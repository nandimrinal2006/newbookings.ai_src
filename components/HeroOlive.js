import React, { Component } from "react";


class HeroOlive extends Component {
    render(){
        return(
            <div className={`slider-area bg-color ${this.props.horizontal} ${this.props.bgshape}`} id="home"  style={{background:'#2d3e50'}}>
                <div className="container h-100">
                    <div className="row">
                        <div className="col-lg-7 h-100">
                            <div className="banner-text">
                                <div className="banner-table-cell">
                                    {/*<h1>AWESOME <br /> <span className="theme-color">apnew</span> MOBILE APP.</h1>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majorityhave suffered alteration in some form, by injected humour, or randomised words which don't look even There are many variations of passages of Lorem Ipsum available</p>*/}
                                    
                                    <h1><span className="theme-color">RUN ADS </span><br /> WITHOUT <br /> AN AGENCY</h1>
                                    <p>NewBookings is the only independent marketing solution on the market. Run premium video ads on Facebook and Instagram and consistently generate new leads for your business. Each account includes an advanced AI-powered agent to seamlessly convert leads into service bookings.</p>
                                    
                                    <div className="banner-buttons">
                                        <a href="#download"><button type="button" className="button-default button-olive">Download</button></a>
                                        <a className="button-default button-white" href="#support" role="button">BOOK DEMO</a>
                                    </div>
                                </div>
                            </div>

                            <div className="banner-apps">
                                {/* Start Sinhle app */}
                                <div className="single-app">
                                    <div className="single-app-table-cell">
                                        {/*<i className="zmdi zmdi-apple"></i>*/}
                                        <img className="iconset-common-1" src={require('../assets/images/app/ads.png')} alt="ADS"/>
                                        <h4>ADS</h4>
                                        <h3></h3>
                                    </div>
                                </div>

                                {/* Start Sinhle app */}
                                <div className="single-app">
                                    <div className="single-app-table-cell">
                                        {/*<i className="zmdi zmdi-cloud-download"></i>*/}
                                        <img className="iconset-common-1" src={require('../assets/images/app/BOOKINGS.png')} alt="BOOKINGS"/>
                                        <h4>BOOKINGS</h4>
                                        <h3></h3>
                                    </div>
                                </div>

                                {/* Start Single app */}
                                <div className="single-app">
                                    <div className="single-app-table-cell">
                                        {/*<i className="zmdi zmdi-android"/>*/}
                                        <img className="iconset-common-1" src={require('../assets/images/app/SAVINGS.png')} alt="SAVINGS"/>
                                        <h4>SAVINGS</h4>
                                        <h3></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="banner-product-image text-right">
                                <img className="image-1" src={require('../assets/images/app/banner-mobile.png')} alt="App Landing"/>
                                <img className="image-2" src={require('../assets/images/app/banner-mobile.png')} alt="App Landing"/>
                                <img className="image-3" src={require('../assets/images/app/banner-mobile.png')} alt="App Landing"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HeroOlive;








