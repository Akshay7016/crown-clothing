import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
} from "../../utils/Firebase/firebaseConfig";

import SignUpForm from "../../components/SignUpForm/SignUpForm";

const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return (
        <div>
            <h1>
                SignIn Page
            </h1>

            <button onClick={logGoogleUser}>
                Sign in with google popup
            </button>

            <SignUpForm />
        </div>
    )
}

export default SignIn;