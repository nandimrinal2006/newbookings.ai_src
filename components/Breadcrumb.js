import React ,  { Component } from "react";

class Breadcrumb extends Component {
    render(){
        return(
            <div className="breadcrumb-area ptb--120 bg_image bg_image--1" data-black-overlay="5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner">
                                <h2 className="title">Blog Grid</h2>
                                <ul className="page-breadcrumb">
                                    <li><a href="/">Home</a></li>
                                    <li>-</li>
                                    <li>Blog Grid</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Breadcrumb;











