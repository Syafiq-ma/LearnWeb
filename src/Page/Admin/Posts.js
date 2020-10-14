import React, {Component} from 'react';
import {Link as RouterLink} from 'react-router-dom';
import Link from '@material-ui/core/Link';
import {connect} from 'react-redux';
import TableView from './TableView';

import * as AdminActions from '../../store/actions/adminAction';

import { withStyles} from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';

const styles = theme => ({
  fab: {
    position: 'fixed',
    bottom:'50 px',
    right: '50px'
  }
})

const coloumns = [
  {label:'ID', name:'id'},
  {label:'Title', name:'title'},
]

class Posts extends Component{

  componentDidMount() {
    this.props.getPosts(this.props.auth.token);
  }
    render(){
      const posts = this.props.admin.posts;
      const {classes} = this.props;
        return(
          <div>
            <h1>Posts </h1>
            <TableView
              coloumns={coloumns}
              rows={posts}
            />
            <Fab component={RouterLink} to='./posts/add' color='secondary' aria-label="add" className = {classes.fab}>
              <EditIcon></EditIcon>
            </Fab>
          </div>
        )
    }
}


const mapStateToProps = state => {
    return {
      auth: state.auth,
      admin: state.admin
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
    getPosts: (token) => {
      dispatch(AdminActions.getPosts(token));
    }
    }
  }

  export default connect(
      mapStateToProps,
      mapDispatchToProps
  )(withStyles(styles)(Posts));