import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/Firebase/firebaseConfig";

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
                Sign in with google
            </button>
        </div>
    )
}

export default SignIn;