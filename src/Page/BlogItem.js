import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import API from '../utils/api';
import {connect} from 'react-redux';
import * as SiteActions from '../store/actions/siteAction';
import {withRouter, Link as RouterLink} from 'react-router-dom';

class BlogItem extends Component{
    render(){
        return(
            <div>
                <Link 
                    to={`/blog/${this.props.post.slug}`}
                    onClick={e=>this.props.setPostData(this.props.post)}
                    >
                <div class="col-md-3 text-center animate-box fadeInUp animated-fast">
					<div class="staff-entry">
                        {this.props.post.PostImage ? 
                            this.props.post.PostImage.length > 0 ? 
                                <img style={{width: '100%'}}className="work-img"  src={API.makeFileURL(this.props.post.PostImage[0].thumbnail, null)} alt=""/>
                            :null 
                        :null}
					    <div class="desc">
                            <h3>{this.props.post.title}</h3>
                            <p >
                               {this.props.post.slug}
                            </p>		
					    </div>
			        </div>
				</div>
                </Link>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    site:state.site
})

const mapDispatchToProps = dispatch => ({
    setPostData: (post) => {
        dispatch(SiteActions.setPostData(post));
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(BlogItem));