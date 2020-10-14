import React, { Component} from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import Home from './Page/Home';
import Work from './Page/Works';
import Login from './Page/Login';
import Blog from './Page/Blog';
import Single from './Page/Single';
import SignUp from './Page/SignUp';

//admin pages
import Dashboard from './Page/Admin/DashBoard';
import AdminWrapper from './Page/Admin/AdminWrapper';
import Posts from './Page/Admin/Posts';
import Users from './Page/Admin/Users';
import AddPost from './Page/Admin/addPost';


class App extends Component {
  render() {
    return(
      <Router>
        <Route
          path="/admin/users"
          exact={true}
          render={props => {
            return (
              <div>
                {this.props.auth.token ?
                  <AdminWrapper>
                    <Users/>
                  </AdminWrapper>
                  : 
                  <Login></Login>
                }
            </div>
            )}
          }
        />

        <Route
          path="/signup"
          exact={true}
          render={props => {
            if(this.props.auth.token){
            return (
                  <Redirect to="/"/>
            )
            }else{
              return (
                <SignUp></SignUp>
              )
            }
            }
          }
        />
        <Route
          path="/admin/posts"
          exact={true}
          render={props => {
            return (
              <div>
                {this.props.auth.token ?
                  <AdminWrapper>
                    <Posts/>
                  </AdminWrapper>
                  : 
                  <Login></Login>
                }
            </div>
            )}
          }
        />

        <Route
          path="/admin/posts/:view"
          exact={true}
          render={props => {
            return (
              <div>
                {this.props.auth.token ?
                  <AdminWrapper>
                    <AddPost/>
                  </AdminWrapper>
                  : 
                  <Login></Login>
                }
            </div>
            )}
          }
        />
         <Route
          path="/admin/posts/:view/:id"
          exact={true}
          render={props => {
            return (
              <div>
                {this.props.auth.token ?
                  <AdminWrapper>
                    <AddPost/>
                  </AdminWrapper>
                  : 
                  <Login></Login>
                }
            </div>
            )}
          }
        />

        <Route
          path="/admin"
          exact={true}
          render={props => {
          return (
            <div>
           {this.props.auth.token ?
              <AdminWrapper>
                <Dashboard/>
              </AdminWrapper>
              : 
              <Login></Login>
          }
          </div>
          )}
        }
        />

        <Route
          path="/"
          exact={true}
          render={props => {
            return (
              <div>
             <Home/>
            </div>
            )}
          }
        />
        <Route
        path="/work"
        exact={true}
        render={props => {
          return (
            <div>
           <Work/>
          </div>
          )}
        }
        />
        <Route
        path="/blog"
        exact={true}
        render={props => {
          return (
            <div>
           <Blog/>
          </div>
          )}
        }
        />
        <Route
        path="/blog/:slug"
        exact={true}
        render={props => {
          return (
            <div>
           <Single />
          </div>
          )}
        }
        />
      </Router>
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
)(App);