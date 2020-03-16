import React, { Component } from 'react'
import { FormInput } from '../form-input/form-input.component'
import './sign-in.styles.scss'
import CustomButton from '../custom-button/custom-button.component'
import { auth, signInWithGoogle } from '../../firebase/firebase.utils'
export class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }


    handleSubmit = async e => {

        e.preventDefault();
        const { email, password } = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({ email: '', password: '' })
        } catch (error) {
            console.log(error);
        }



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
                    <div className="buttons">

                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            {''}
                        Sign in with Google {''}

                        </CustomButton>


                    </div>
                </form>

            </div>
        );
    }

}