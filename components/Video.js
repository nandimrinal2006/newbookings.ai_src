import React ,  { Component } from "react";

class Video extends Component{
    render(){
        return(
            <div>
                <div className="">
                    <div className="row">
                        <div className="col-lg-12">
                            <div>
                                <br />&nbsp;<br />
                                <div class="video-container">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/a1NToPWgxgc?si=m_TvsrXw8mbHH7Fk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                </div>
                            </div>
                        </div>
                    </div>                    
                </div>
            </div>
        )
    }
}

export default Video;











