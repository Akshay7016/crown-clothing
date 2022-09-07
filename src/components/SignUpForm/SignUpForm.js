import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';

import { signUpStart } from '../../store/user/user.action';

import { SignUpContainer } from './SignUpForm.styles'

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
};

const SignUpForm = () => {
    const dispatch = useDispatch();
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("passwords do not matched")
            return
        }

        try {
            dispatch(signUpStart(email, password, displayName))
            resetFormFields();
        } catch (error) {
            if (error.code === "auth/email-already-in-use") {
                alert("Cannot create user, email already in use")
            } else {
                console.log("User creation encountered an error", error);
            }
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value })
    }

    return (
        <SignUpContainer>
            <h2>Don't have an account</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="Display Name"
                    inputOptions={{
                        type: "text",
                        name: "displayName",
                        value: displayName,
                        onChange: handleChange,
                        required: true
                    }}
                />

                <FormInput
                    label="Email"
                    inputOptions={{
                        type: "email",
                        name: "email",
                        value: email,
                        onChange: handleChange,
                        required: true
                    }}
                />

                <FormInput
                    label="Password"
                    inputOptions={{
                        type: "password",
                        name: "password",
                        value: password,
                        onChange: handleChange,
                        required: true
                    }}
                />

                <FormInput
                    label="Confirm Password"
                    inputOptions={{
                        type: "password",
                        name: "confirmPassword",
                        value: confirmPassword,
                        onChange: handleChange,
                        required: true
                    }}
                />

                <Button type="submit">Sign Up</Button>
            </form>
        </SignUpContainer>
    )
}

export default SignUpForm;