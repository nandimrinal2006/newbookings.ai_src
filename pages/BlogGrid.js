import React, {Component} from "react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BlogPost from '../components/BlogPost';
import Breadcrumb from '../components/Breadcrumb';


class BlogGrid extends Component {
    render() {
        return (
            <div>
                {/* Header Navbar */}
                <Navbar/>

                {/* breadcrumb Area */}
                <Breadcrumb/>

                <BlogPost/>
                {/* Footer */}
                <Footer horizontal="horizontal"/>

            </div>
        )
    }
}

export default BlogGrid;

