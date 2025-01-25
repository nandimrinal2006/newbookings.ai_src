import React, { Component } from "react";
//import Carousel from '../components/Carousel';
import ReactSimplyCarouselExample from './ReactSimplyCarousel';
class Screenshot extends Component { 
    render(){
        
        return (
            <div className="screenshot-area pt--120" id="services">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center mb--80">
                                <h2>SELECT <span className="theme-color">A SERVICE</span></h2>
                                <img className="image-1" src={require('../assets/images/app/title-icon.png')} alt="App Landing"/>
                                <img className="image-2" src={require('../assets/images/app/title-icon-2.png')} alt="App Landing"/>
                                <img className="image-3" src={require('../assets/images/app/title-icon-3.png')} alt="App Landing"/>
                                <p>Use the logo carousel to view and select the services that would like added to your MAZUR Program account. You are one step closer to getting new bookings.</p>
                            </div>
                        </div>
                        {/*<div className="col-lg-10 offset-lg-1">
                            <div className="screenshot-carousel" id="screenshot-carousel" data-carousel-3d>
                                <img className="image-1" src={require('../assets/images/app/screenshot_carousel/Lunula Logo.png')} alt="App Screenshot"/>
                                <img className="image-1" src={require('../assets/images/app/screenshot_carousel/Emerald Logo.PNG')} alt="App Screenshot"/>
                                <img className="image-1" src={require('../assets/images/app/screenshot_carousel/Zerona Logo No BG.png')} alt="App Screenshot"/>
                                <img className="image-1" src={require('../assets/images/app/screenshot_carousel/Botox No BG.png')} alt="App Screenshot"/>
                                <img className="image-1" src={require('../assets/images/app/screenshot_carousel/Emface_LOGO.png')} alt="App Screenshot"/>
                                <img className="image-1" src={require('../assets/images/app/screenshot_carousel/Emsculpt NEO No BG.png')} alt="App Screenshot"/>                                
                                <img className="image-1" src={require('../assets/images/app/screenshot_carousel/Fit3D Logo No BG.png')} alt="App Screenshot"/>
                                <img className="image-1" src={require('../assets/images/app/screenshot_carousel/Morpheus8-Logo.png')} alt="App Screenshot"/>
    
                            </div>
                        </div>*/}

                        {/*<Carousel />*/}
                        <ReactSimplyCarouselExample />

                    </div>
                </div>
            </div>
        )
    }
}

export default Screenshot;










