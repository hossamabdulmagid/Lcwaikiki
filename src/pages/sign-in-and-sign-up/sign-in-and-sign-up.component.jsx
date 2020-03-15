import React from 'react'
import './sign-in-and-sign-up.styles.scss'
import { SignIn } from '../../component/Sign-in/sign-in.component'
import { SignUp } from '../../component/sign-up/sign-up.component'


export const SignInAndSignUpPage = () => (
    <div className="sign-in-and-sign-up">
        <SignIn />
        <SignUp />
    </div>
);




