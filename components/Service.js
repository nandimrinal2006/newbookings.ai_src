import React, { Component } from "react";



class Service extends Component{
    render(){
        let data = [
            {
                image_path:'RUN_ADS.png',
                icon: 'zmdi zmdi-settings',
                title: 'RUN ADS',
                desc: ''
            },

            {
                image_path:'FRESH_LEADS.png',
                icon: 'zmdi zmdi-favorite',
                title: 'FRESH LEADS',
                desc: ''
            },

            {
                image_path:'NEW_BOOKINGS.png',
                icon: 'zmdi zmdi-time',
                title: 'NEW BOOKINGS',
                desc: ''
            }
        ];
        let DataList = data.map((val, i) => {
            return(
                <div className="col-lg-4 service-column" key={i}>
                    <div className="single-service text-center">
                        <div className="service-icon">
                            {/*<i className={`${val.icon}`}></i>*/}
                            <img className="iconset-common-2" src={require('../assets/images/app/'+val.image_path)} alt="BOOKINGS"/>

                        </div>
                        <h4 className="title">{val.title}</h4>
                        <p className="desc">{val.desc}</p>
                    </div>
                </div>
            )
        });

        return (
            <div>
                {/* Start Service Area */}
                <div className={`service-area ${this.props.horizontal}`}>
                    <div className="container">
                        <div className="row">
                            {DataList}
                        </div>
                    </div>
                </div>
                {/* End Service Area */}
            </div>
        )
    }
}

export default Service;

