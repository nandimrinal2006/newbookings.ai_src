import Blog from '../components/Blog';
import React, {Component} from "react";
import About from '../components/About';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Service from '../components/Service';
import Pricing from '../components/Pricing';
import Feature from '../components/Feature';
import Download from '../components/Download';
import HeroOlive from '../components/HeroOlive';
import Screenshot from '../components/Screenshot';
import Testimonial from '../components/Testimonial';

class HomeHorizontal extends Component {
    render() {
        return (
            <div>
                {/* Header Navbar */}
                <Navbar/>

                {/* Slider */}
                <HeroOlive horizontal="horizontal" bgshape="bg-shape"/>

                {/* About */}
                <About horizontalabout="horizontal-about"/>

                {/*Service */}
                <Service horizontal="horizontal"/>

                {/*Feature */}
                <Feature horizontalfeature="horizontal-feature"/>

                {/* Download */}
                <Download horizontal="horizontal"/>

                {/* Pricing */}
                <Pricing horizontalpricing=""/>

                {/* Testimonial */}
                {/*<Testimonial />*/}

                {/* Screenshot */}
                {/*<Screenshot/>*/}

                {/* Blog */}
                {/*<Blog/>*/}

                {/* Footer */}
                <Footer horizontal="horizontal"/>

            </div>
        )
    }
}

export default HomeHorizontal;
