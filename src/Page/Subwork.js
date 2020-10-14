import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Subwork extends Component{
    render(){
        return(
            <div>

					<div class="col-md-12">
						<div class="work-flex">
							<div class="half animate-box">
								<div class="row no-gutters">
									<div class="col-md-12 col-md-push-12 no-gutters">
                                    <img className="work-img"  src={this.props.image1} alt=""/>
									</div>
								</div>
							</div>
							<div class="half animate-box">
								<div class="row no-gutters">
									<div class="col-md-12 col-md-pull-12 no-gutters">
										<div class="display-t desc">
											<div class="display-tc">
												<h2><Link to="#">{this.props.title1}</Link></h2>
												<p>{this.props.desc1}</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class="col-md-12">
						<div class="work-flex">
							<div class="half animate-box">
								<div class="row no-gutters">
									<div class="col-md-12 no-gutters">
                                    <img className="work-img"  src={this.props.image2} alt=""/>
									</div>
								</div>
							</div>
							<div class="half animate-box">
								<div class="row no-gutters">
									<div class="col-md-12 no-gutters">
										<div class="display-t desc">
											<div class="display-tc">
												<h2><Link to="#">{this.props.title2}</Link></h2>
												<p>{this.props.desc2}</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

            
            </div>
        )
    }
}

export default Subwork;