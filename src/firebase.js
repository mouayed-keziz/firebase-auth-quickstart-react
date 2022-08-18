import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithRedirect, FacebookAuthProvider } from "firebase/auth";

const app = initializeApp({
    //put your config here
});

const auth = getAuth();

const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    //here u can chose the way you want to sign in
    signInWithPopup(auth, provider);
    //signInWithRedirect(auth, provider);
};

const signInWithFacebook = () => {
    const provider = new FacebookAuthProvider();
    signInWithRedirect(auth, provider);
    //signInWithPopup(auth, provider);
}





export { app, auth, signInWithGoogle, signInWithFacebook };