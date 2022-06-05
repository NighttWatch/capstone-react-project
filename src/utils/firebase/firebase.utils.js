import { async } from '@firebase/util';
import { initializeApp } from 'firebase/app'; 
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC-hwLch13gS2kJudUqprFEIV62HWLtXbg",
    authDomain: "crwn-clothing-db-a6403.firebaseapp.com",
    projectId: "crwn-clothing-db-a6403",
    storageBucket: "crwn-clothing-db-a6403.appspot.com",
    messagingSenderId: "1010175421898",
    appId: "1:1010175421898:web:2ef6b10ec9f2d4e8937333"
};

const firebaseApp = initializeApp(firebaseConfig);

const providerGoogle = new GoogleAuthProvider();

providerGoogle.setCustomParameters({
    prompt: "select_account",
});


export const auth = getAuth();
export const signInWithGoogleopup = () => signInWithPopup(auth, providerGoogle)
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, providerGoogle)

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionaltInformation) => {
    if(!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef)

    console.log(userSnapshot)

    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                email,
                displayName,
                createdAt,
                ...additionaltInformation
            })
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }

    return userDocRef;
    //if user data exits
    // if user data not exits
    // create 
    //reutrn userDocRef
}


export const CreateAuthUserWithEmailAndPassword =async (email, password) => {
    if(!email || !password ) return;

    return await createUserWithEmailAndPassword(auth, email, password);
}