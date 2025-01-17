import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

class Dashboard extends Component{
    render(){
        return(
          <div>
            
            <h1>You are logged in with token : {this.props.auth.token} </h1>
          </div>
        )
    }
}


const mapStateToProps = state => {
    return {
      auth: state.auth
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
  
    }
  }

  export default connect(
      mapStateToProps,
      mapDispatchToProps
  )(withRouter(Dashboard));