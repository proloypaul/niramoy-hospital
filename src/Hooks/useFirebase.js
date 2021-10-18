import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initialization from "../Firebase/firebase.init";

initialization()

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider()

    // sign in Usign Google
    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user
                console.log(user)
                setError('');
            }).catch(error => {
                setError(error.message)
            });
    };

    // signIn and signOut state change 
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user){
                setUser(user)
            }
        })
    }, [])

    // sign out process

    const signOutProcess = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }

    return{
        user,
        error,
        signInUsingGoogle,
        signOutProcess
    }

}

export default useFirebase;