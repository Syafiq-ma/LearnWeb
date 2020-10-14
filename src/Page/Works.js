import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import Menu from './Menu';
import Subwork from './Subwork'

const product = [
    {image1: 'images/work-1.jpg', title1:'A beige chair at a basket', desc1:'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life',
    image2: 'images/work-2.jpg', title2:'A beige chair at a small white desk', desc2:'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life'},
    {image1: 'images/work-3.jpg', title1:'A beige chair at a basket', desc1:'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life',
    image2: 'images/work-4.jpg', title2:'A beige chair at a small white desk', desc2:'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life'},
    {image1: 'images/work-5.jpg', title1:'A beige chair at a basket', desc1:'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life',
    image2: 'images/work-6.jpg', title2:'A beige chair at a small white desk', desc2:'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life'},
    {image1: 'images/work-7.jpg', title1:'A beige chair at a basket', desc1:'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life',
    image2: 'images/work-8.jpg', title2:'A beige chair at a small white desk', desc2:'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life'},
    {image1: 'images/work-9.jpg', title1:'A beige chair at a basket', desc1:'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life',
    image2: 'images/work-2.jpg', title2:'A beige chair at a small white desk', desc2:'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life'},
]

class Works extends Component{
    render(){
        return(
            <div>
                <Menu></Menu>
                    <section id="home" className="video-hero"  data-section="home">
                        <img className="img-responsive" src="images/cover_img_1.jpg" alt=""/>
                        <div className="overlay">
                            <div className="display-t display-t2 text-center">
                                <div className="display-tc display-tc2">
                                    <div className="container">
                                        <div className="col-md-12 col-md-offset-0">
                                            <div className="animate-box">
                                                <h2>Portfolio</h2>
                                                <p className="breadcrumbs"><span><Link to="index.html">Home</Link></span> <span>Work</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    

                <div class="colorlib-work">
			        <div class="container">
				        <div class="row">
                            {product.map((product,index) => {
							    return <Subwork {...product} key={index}/>
						    })}
				        </div>
				
			        </div>
		        </div>
            </div>
        )
    }
}

export default Works;