import { signInWithGoogleopup, createUserDocumentFromAuth } from "../../../utils/firebase/firebase.utils";

import SignUpFrom from "../../sign-up-form/sign-up-form.compenent";

const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGoogleopup();
        const userDocRef = await createUserDocumentFromAuth(user)
    }
    return (
        <div>
            <h1>Sign In Page </h1>
            <button onClick={logGoogleUser}>
                Sign in with Google Popup
            </button>
            <SignUpFrom />
        </div>
    )
};

export default SignIn;