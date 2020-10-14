import React, {Component} from 'react';
import Menu from './Menu';
import {withRouter, Link as RouterLink} from 'react-router-dom';
import {connect} from 'react-redux';
import API from '../utils/api';
import * as SiteActions from '../store/actions/siteAction';

class Single extends Component{
    componentDidMount(){
        this.props.getSinglePost(this.props.site.post.slug, this.props.auth.token);
    }
    render(){
        return(
            <div>
                <Menu></Menu>
                    <section id="home" className="video-hero"  data-section="home">
                        <div className="overlay">
                            <div className="display-t display-t2 text-center">
                                <div className="display-tc display-tc2">
                                    <div className="container">
                                        <div className="col-md-12 col-md-offset-0">
                                            <div className="animate-box"> 
								                <h2>{this.props.site.post.title}</h2>
								                <p>Read all of our stories</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <img style={{width:'1350px', height:'768px'}} src={this.props.site.post.PostImages.length>0 ? API.makeFileURL(this.props.site.post.PostImage[0].url, this.props.auth.token) : null} alt=""/>
                
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <div dangerouslySetInnerHTML={{__html: this.props.site.post.content}}></div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    site:state.site,
    auth:state.auth
})

const mapDispatchToProps = dispatch => ({
    getSinglePost: (slug, token) => {
        dispatch(SiteActions.getPostBySlug(slug, token));
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Single);