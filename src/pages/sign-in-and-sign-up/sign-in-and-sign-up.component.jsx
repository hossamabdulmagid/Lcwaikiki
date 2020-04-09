import React from 'react'
import { SignInAndSignUpContainer } from './sign-in-and-sign-up.styles'
import SignIn from '../../component/Sign-in/sign-in.component'
import SignUp from '../../component/sign-up/sign-up.component'


export const SignInAndSignUpPage = () => (
    <div className="container">
        <div className="row">

            <SignInAndSignUpContainer >
                <div className="col-sm">        <SignIn /> </div>
                <div className="col-sm">        <SignUp /> </div>
            </SignInAndSignUpContainer>
        </div>
    </div>
);




