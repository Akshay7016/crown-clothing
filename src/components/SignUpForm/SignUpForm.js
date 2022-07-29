import React, { useState, useContext } from 'react'

import {
    createAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth
} from '../../utils/Firebase/firebaseConfig';

import { UserContext } from '../../context/UserContext';
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';

import './SignUpForm.scss'

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
};

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const { setCurrentUser } = useContext(UserContext)

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
            const { user } = await createAuthUserWithEmailAndPassword(email, password);

            setCurrentUser(user);

            // In user "displayName" is null, so pass displayName as argument as object
            await createUserDocumentFromAuth(user, { displayName })
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
        <div className='sign-up-container'>
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
        </div>
    )
}

export default SignUpForm;