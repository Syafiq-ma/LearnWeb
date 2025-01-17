import React, {Component} from 'react';
import {withFormik} from 'formik';
import * as Yup from 'yup';
import {connect} from 'react-redux'

import Field from '../component/common/Field';
import './css/Login.css';

import * as AuthActions from '../store/actions/authAction';

const fields = [
    {name: 'email', elementName: 'input', type: 'email', placeholder: 'Your email'},
    {name: 'name', elementName: 'input', type: 'text', placeholder: 'Your name'},
    {name: 'password', elementName: 'input', type: 'password', placeholder: 'Your Password'},
    {name: 'password2', elementName: 'input', type: 'password', placeholder: 'Your Password again'}
]

class SignUp extends Component {
    render(){
        return (
            <div className="login-page">
                <div className="container">
                    <div className="login-form">
                    <div className="row">
                        <h1>Sign Up</h1>
                    </div>
                        <div className="row">
                        <form onSubmit={e => {
                            e.preventDefault();
                            this.props.register(this.props.values.name, this.props.values.email, this.props.values.password);
                        }}>
                            {fields.map((f, i) => {
                                return (
                                    <div className="col-md-6">
                                        <Field
                                        key={i}
                                        {...f}
                                        value={this.props.values[f.name]}
                                        name={f.name}
                                        onChange={this.props.handleChange}
                                        onBlur={this.props.handleBlur}
                                        touched={(this.props.touched[f.name])}
                                        errors={this.props.errors[f.name]}
                                    />
                                    </div>
                                )
                            })}
                            <div className="col-md-12">
                                <p className="text-danger text-center">{this.props.error || ''}</p>
                                <button className="btn btn-primary">Sign Up</button>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
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
        register: (name, email, pass) => {
            dispatch(AuthActions.register(name, email, pass));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withFormik({
    mapPropsToValues: () => ({
        email: '',
        name: '',
        password: '',
        password2: '',
    }),
    validationSchema: Yup.object().shape({
        email: Yup.string().email('Email is invalid.').required('You need to login with email address.'),
        name: Yup.string().required('Please write your name'),
        password: Yup.string().min(8, 'Password need to be at least 8 character').required('You need to enter your password.'),
        password2: Yup.string().required('You need to enter your password again.').test('pass-match', 'Password dont match', function(value){
            const {password}=this.parent;
            return password === value; 
        })
    }),
    handleSubmit: (values, {setSubmitting}, login) => {
        console.log("Login attempt", values);
        login(values.email, values.password);
    }
})(SignUp));