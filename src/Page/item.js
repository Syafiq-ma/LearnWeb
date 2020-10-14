import React,{ Component} from 'react'

class item extends Component{
    render(){
        return(
            <div class="item">
				<div class="col-md-8 col-md-offset-2">
					<div class="featured-entry">
						<img class="img-responsive" src={this.props.src} alt=""/>
					</div>
				</div>
			</div>
        )
    }
}

export default item;