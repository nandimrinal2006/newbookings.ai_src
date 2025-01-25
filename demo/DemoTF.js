import Pages from './Pages';
import data from "./data.json";
import Features from './Features';
import Suggestions from './Suggestions';
import React, {Component, Fragment} from "react";

class DemoTF extends Component {
    render() {
        const buyNowLink = '//1.envato.market/c/417168/275988/4415?subId1=demo&subId2=hasthemes&subId3=https%3A%2F%2Fthemeforest.net%2Fcart%2Fconfigure_before_adding%2F24007088%3Flicense%3Dregular%26size%3Dsource&u=https%3A%2F%2Fthemeforest.net%2Fcart%2Fconfigure_before_adding%2F24007088%3Flicense%3Dregular%26size%3Dsource';

        const demos = data.demos;
        const features = data.features;
        const suggestionsHTML = data.suggestionsHTML;
        let suggestionsWP = data.suggestionsWP;

        return (
            <Fragment>
                <div className="landing-page-wrapper">

                    {/* Start Header */}
                    <div className="header-section section sticker">
                        <div className="container">
                            <div className="row justify-content-between align-items-center">
                                {/* Logo */}
                                <div className="logo col-6 text-start position-relative">
                                    <a href="/">
                                        <img src={require('../assets/images/landing/logo.png')}
                                             className="img-fluid" alt="torres"/>
                                        <img src={require('../assets/images/landing/logo-2.png')} alt="torres"
                                             className="sticky-logo img-fluid"/></a>
                                </div>
                                {/* Logo */}
                                <div className="col-6 text-end">
                                    <a className="buy-btn" target="_blank" rel="noreferrer" href={buyNowLink}>Buy
                                        Torres</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Header End */}

                    {/* Start Hero */}
                    <div className="hero-section section overlay landing-hero-bg">
                        <div className="container">
                            <div className="row">
                                <div className="hero-content text-center col-12">
                                    <h1><strong>Torres</strong>React Multipurpose Landing Page Template</h1>
                                    <a className="buy-btn" href="#demo">View Demo</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Hero End */}

                    {/* Pages Section Start */}
                    <Pages demos={demos}/>
                    {/* Pages Section End */}

                    {/* Features Section Start */}
                    <Features features={features}/>
                    {/* Features Section End */}

                    {/* Suggestions HTML Section Start */}
                    <Suggestions background="" category="HTML" suggestions={suggestionsHTML}/>
                    {/* Suggestions HTML Section End */}

                    {/* Suggestions WP Start */}
                    <Suggestions background="bg-gray" category="WordPress" suggestions={suggestionsWP}/>
                    {/* Suggestions WP Section End */}

                    {/* Footer Section Start */}
                    <div className="footer-section section pt--65 pb--50 overlay bg-img"
                         data-bg="assets/img/landing/hero-bg.jpg">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <h1>Make your website come to life quickly.</h1>
                                    <a className="buy-btn float-right" href={buyNowLink} target="_blank"
                                       rel="noreferrer">buy Torres</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Footer Section End */}
                </div>
            </Fragment>
        )
    }
}


export default DemoTF;

