import React ,  { Component } from "react";



class Feature extends Component{
    render(){
       let data = [
           
        {
            image_path:'AUTOMATED_FUNNEL.png',
            icon: 'zmdi zmdi-collection-text',
            title: 'AI AGENT',
            desc: 'Each program member receives a customized AI agent. Available day or night, your agent effortlessly communicates with new leads via SMS, Facebook and Instagram ensuring no opportunity is missed. Truly incredible!'
        },

        {
            image_path:'PROVEN_ADS.png',
            icon: 'zmdi zmdi-sun',
            title: 'PREMIUM VIDEO ADS',
            desc: 'Our Facebook & Instagram video ads deliver twice the lead generation results compared to static image ads from our competitors. This means you’ll receive 2X the leads for the same ad spend.'
        },

        {
            image_path:'EMAIL_SMS_PHONE.png',
            icon: 'zmdi zmdi-brush',
            title: 'SMS & MESSAGING',
            desc: 'Your customized AI agent automatically engages each new lead through email, and SMS. There’s truly nothing else like it. Stop checking your phone for new messages and instead just focus on making sales.'
        },

        {
            image_path:'CONVERSATIONS.png',
            icon: 'zmdi zmdi-desktop-mac',
            title: 'RETARGETING CAMPAIGNS',
            desc: 'Everyday you receive new leads from your campaigns. Within a few minutes you are able to send out dozens of SMS messages to each of your new leads. Easy and precise communication.'
        },

        {
            image_path:'INAPP_FB_ADS.png',
            icon: 'zmdi zmdi-language-html5',
            title: 'INDEPENDENT MARKETING',
            desc: 'You now have the tools and the knowledge to run your own ads and send your own SMS campaigns. No more monthly payments to agencies using the exact same process. Take back control.'
        }
       ] 

       let DataList = data.map((val , i) => {
           return(
               /* Start Single Feature */
               <div className="feature" key={i}>
                   <div className="feature-icon">
                       {/*<i className={`${val.icon}`}/>*/}
                       <img className="iconset-common-3" src={require('../assets/images/app/'+val.image_path)} alt="BOOKINGS"/>
                   </div>
                   <div className="content">
                       <h4 className="title">{val.title}</h4>
                       <p className="desc">{val.desc}</p>
                   </div>
               </div>
               /* End Single Feature */
           )
       })

       return(
           <div className= {`feature-area feature-bg-image pb--50 ${this.props.horizontalfeature}`} id="features">
               <div className="container">
                   <div className="row">
                       <div className="col-lg-12">
                            <div className="section-title text-center mb--40">
                                <h2>PROGRAM <span className="theme-color">FEATURES</span></h2>
                                <img className="image-1" src={require('../assets/images/app/title-icon.png')} alt="App Landing"/>
                                <img className="image-2" src={require('../assets/images/app/title-icon-2.png')} alt="App Landing"/>
                                <img className="image-3" src={require('../assets/images/app/title-icon-3.png')} alt="App Landing"/>
                                <p>The NEWBookings.ai program is the most successful booking solution for service based and customer focused businesses. It’s the only program that enable you to combine premium video and image ads with a customized AI-powered booking agent to drive results and streamline client acquisition.</p>
                            </div>
                       </div>
                   </div>
                   <div className="row mt--30">
                       <div className="col-lg-7 offset-lg-5">
                            <div className="feature-list">
                                {DataList}
                            </div>
                       </div>
                   </div>
               </div>
           </div>
        )
    }
}

export default Feature;
