import { initializeApp } from 'firebase/app'; 
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged,
} from 'firebase/auth';
import { 
    getFirestore, 
    doc, 
    getDoc, 
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs,
    DocumentSnapshot
} from 'firebase/firestore';

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
export const signInWithGooglePopup = () => signInWithPopup(auth, providerGoogle)
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, providerGoogle)

export const db = getFirestore();

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd, field='title') => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    objectsToAdd.forEach((object) => {
        const docRef = doc(collectionRef, object[field].toLowerCase());
        batch.set(docRef, object);
    },[]);

    await batch.commit();
}

export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);
    
    //await Promise.reject(new Error('new error'))
    //testing error!
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(docSnapshot => docSnapshot.data());
}


export const createUserDocumentFromAuth = async (userAuth, additionaltInformation) => {
    if(!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef)

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

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password ) return;

    return await signInWithEmailAndPassword(auth, email, password);
}


export const signOutUser = () => signOut(auth);


export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)