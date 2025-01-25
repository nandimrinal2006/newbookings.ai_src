import React , { Component } from "react";


class Download extends Component{
    render(){
        return(
            <div className={`download-area ${this.props.horizontal}`}>
                <div className="bg-overlay"/>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center mb--55 pt--50">  
                                <h2 className="text-white">DOWNLOAD <span className="theme-color">NEWBOOKINGS.AI</span></h2>
                                <img src={require('../assets/images/app/title-icon-4.png')} alt="App Landing" id="download" />
                                <p className="text-white">Download the NewBookings.ai app on your mobile device or sign in online to start your journey to freedom and independence from marketing agencies.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="download-buttons pb--50">
                                <a href="https://apps.apple.com/cr/app/highlevel/id1425004076?l=en-GB">
                                <button type="submit" className="download-btn">
                                    <i className="zmdi zmdi-apple"></i>
                                    <span>Available on the <span className="large-text">App Store</span> </span>
                                </button>
                                </a> 
                                    
                                <a href="https://play.google.com/store/apps/details?id=com.gohighlevel&pcampaignid=web_share">
                                <button type="submit" className="download-btn">
                                    <i className="zmdi zmdi-google-play"></i>
                                    <span>Available on the <span className="large-text">Play Store</span> </span>
                                </button>
                                </a>
                                {/*<button type="submit" className="download-btn">
                                    <i className="zmdi zmdi-windows"></i>
                                    <span>Available on the <span className="large-text">Windows Store</span> </span>
                                </button>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Download;







