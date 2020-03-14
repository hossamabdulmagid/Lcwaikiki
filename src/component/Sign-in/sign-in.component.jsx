import React, { Component } from 'react'
import { FormInput } from '../form-input/form-input.component'
import './sign-in.styles.scss'
import CustomButton from '../custom-button/custom-button.component'
import { signInWithGoogle } from '../../firebase/firebase.utils'
export class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }


    handleSubmit = e => {
        e.preventDefault();
        this.setState({ email: '', password: '' })
    }
    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value })
    }
    render() {
        return (
            <div className="sign-in">
                <h1> I already have an account</h1>
                <span> Sign in with your mail and password </span>


                <form onSubmit={this.handleSubmit}>

                    <FormInput
                        name="email"
                        value={this.state.email}
                        handleChange={this.handleChange}
                        type="email"
                        label="email"
                        required
                    />

                    <FormInput
                        name="password"
                        value={this.state.password}
                        type="password"
                        handleChange={this.handleChange}
                        label="password"
                        required
                    />
                    <CustomButton type="submit">Sign In</CustomButton>
                    <button className="custom-button2" onClick={signInWithGoogle}>
                        {''}
                        Sign in with Google {''}
                        
                        </button>

                </form>

            </div>
        );
    }

}