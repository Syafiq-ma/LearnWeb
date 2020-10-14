import React, {Component} from 'react';

class Service extends Component{
    render () {
        return (
            <div>
                <div class="col-md-4 text-center animate-box">
						<div class="services">
							<span class="icon">
								<i class={this.props.icon}></i>
							</span>
							<div class="desc">
								<h3>{this.props.title}</h3>
                                <p>{this.props.desc}</p>
							</div>
						</div>
					</div>
            </div>
        )
    }
}

export default Service;