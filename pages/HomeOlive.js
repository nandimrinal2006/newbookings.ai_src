import Blog from '../components/Blog';
import About from '../components/About';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Service from '../components/Service';
import Feature from '../components/Feature';
import Pricing from '../components/Pricing';
import Download from '../components/Download';
import HeroOlive from '../components/HeroOlive';
import React, {Component, Fragment} from "react";
import Screenshot from '../components/Screenshot';
import Testimonial from '../components/Testimonial';

class HomeOlive extends Component {
    render() {
        return (
            <Fragment>
                {/* Header Navbar */}
                <Navbar/>

                {/* Slider */}
                <HeroOlive bgshape="bg-shape" horizontal=""/>

                {/* About */}
                <About horizontalabout="vertical-about"/>

                {/*Service */}
                <Service horizontal="vertical-service"/>

                {/*Feature */}
                <Feature horizontalfeature="vertical-feature"/>

                {/* Download */}
                <Download horizontal={false}/>

                {/* Pricing */}
                <Pricing horizontalpricing="vertical-pricing"/>

                {/* Pricing */}
                <Testimonial/>

                {/* Screenshot */}
                <Screenshot/>

                {/* Blog */}
                <Blog/>

                {/* Footer */}
                <Footer horizontal="vertical-footer"/>
            </Fragment>
        )
    }
}

export default HomeOlive;

