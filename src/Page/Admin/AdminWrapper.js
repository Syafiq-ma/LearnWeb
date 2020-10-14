import React, { Component } from 'react';
import clsx from 'clsx';
import classNames from 'classnames';
import { withStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';

import Sidebar from './Sidebar';

const drawerWidth =240;

const styles = theme => ({
    root: {
      display: 'flex',
    },
    toolbar: {
      paddingRight: 24
    },
    appBar: {
      zIndex : theme.zIndex.drawer +1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    appBarSpace: theme.mixins.toolbar,
    drawerPaper: {
      position: 'relative',
      whiteSapce: 'noWrap',
      height: '1000px',
      width : drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },

    drawerPaperClose: {
      height: '1000px',
      overflowX: 'hidden',
      width: theme.spacing.unit *7,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },

    toolbarIcon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px',
      ...theme.mixins.toolbar
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing.units * 3,
      height: '100 vh',
      overflow: 'auto'

    }
    
});


  

class AdminWrapper extends Component {
  handleDrawerOpen = (e) => {
    this.setState({open:true})
  }

  handleDrawerClose = (e) => {
    this.setState({open:false})
  }

  constructor(props){
    super(props);

    this.state={
      open :true
    }
  }

  
    render(){
      const {classes} = this.props;
        return (
            <div id="admin-page" className={classes.root}>
              <AppBar className={classNames(classes.appBar, this.state.open && classes.appBarShift)}>
                <Toolbar className={classes.toolbar}>
                  <IconButton onClick={this.handleDrawerOpen}>
                    <MenuIcon/>
                  </IconButton>

                  <Typography
                    component="h1"
                    variant="h6"
                    color="inherit"
                    noWrap
                  >
                    Admin
                  </Typography>
                </Toolbar>
              </AppBar>

              <Drawer
                classes= {{paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose)}}
                variant="permanent"
                open={true}
              >
                <div className={classes.toolbarIcon}>
                  <IconButton onClick={this.handleDrawerClose}>
                    <ChevronLeftIcon/>
                  </IconButton>
                </div>
                <Divider/>
                <Sidebar></Sidebar>
              </Drawer>
              <main className={classes.content}>
                <div className={classes.appBarSpace}/>
                  {this.props.children}
                
                
              </main>
              
            </div>
        )
    }
}

export default withStyles(styles)(AdminWrapper);