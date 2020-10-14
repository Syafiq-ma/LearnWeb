import React, { Component} from 'react';
import {Link} from 'react-router-dom';


class Home extends Component {
  render() {
    return(
		<div>
			<nav className="colorlib-nav" role="navigation">
			<div className="top-menu">
				<div className="container">
					<div className="row">
						<div className="col-md-2">
							<div id="colorlib-logo"><Link to="/">Unapp</Link></div>
						</div>
						<div className="col-md-10 text-right menu-1">
							<ul>
								<li className="active"><Link to="/">Home</Link></li>
								<li className="has-dropdown">
									<Link to="/work">Works</Link>
									<ul className="dropdown">
										<li><Link to="work-grid.html">Works grid with text</Link></li>
										<li><Link to="work-grid-without-text.html">Works grid w/o text</Link></li>
									</ul>
								</li>
								<li><Link to="/blog">Blog</Link></li>
								<li><Link to="about.html">About</Link></li>
								<li><Link to="shop.html">Shop</Link></li>
								<li><Link to="contact.html">Contact</Link></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
            {this.props.children}
		</nav>
        
		</div>
        
    )
  }
}

export default Home;