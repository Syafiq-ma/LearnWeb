import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter, Link as RouterLink} from 'react-router-dom';
import * as SiteActions from '../store/actions/siteAction';

import Menu from './Menu';
import BlogItem from './BlogItem'



class Blog extends Component{
    componentDidMount(){
        this.props.getPosts(0);
        this.props.getPostCount();
    }
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
								                <h2>Blog</h2>
								                <p>Read all of our stories</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    

                <div class="colorlib-work">
			        <div  class="container">
				        <div class="row">
                            <div>
                                {this.props.site.posts ?
                                this.props.site.posts.length > 0 ?
                                this.props.site.posts.map((post, i) =>{
                                    return(
                                        <BlogItem
                                            post={post}
                                            key={i}
                                        />
                                    )
                                })
                                :null
                                : null}
				            </div>
                        </div>
                        <div class="row">
                            <div className="col-md-12">
                                <div className="text-center">
                                    {this.props.site.postCount >this.props.site.posts.length ?
                                        <button className="btn btn-default" onClick={e=>{
                                            this.props.getPosts(this.props.site.posts.length);
                                        }}>Load More</button>
                                    : null}
                                </div>
                            </div>
                        </div>
			        </div>
		        </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    site:state.site
})

const mapDispatchToProps = dispatch => ({
    getPosts: (skip) => {
        dispatch(SiteActions.getPosts(skip));
    },
    getPostCount: () => {
        dispatch(SiteActions.getPostCount());
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(Blog));