import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initialization from "../Firebase/firebase.init";

initialization()

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);

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

    // register usign email and password

    const handleEmail = event => {
        setEmail(event.target.value);
        console.log(event.target.value);
    };

    const handlePassword = event => {
        setPassword(event.target.value);
        console.log(event.target.value);
    }

    const signInUsignEmailAndPassword = (email, password) => {
        createUserWithEmailAndPassword(auth, email , password)
            .then(result => {
                const user = result.user
                setUser(user)
                console.log(user)
                setError('');
            }).catch(error => {
                setError(error.message)
            })
    };

    const handleRegister = event => {
        event.preventDefault()
        signInUsignEmailAndPassword(email, password)
    }

    // toggle button

    const handleToggle = event => {
        console.log(event.target.checked);
        setIsLogin(event.target.checked);
    } 




    return{
        user,
        error,
        isLogin,
        signInUsingGoogle,
        signOutProcess,
        handleEmail,
        handlePassword,
        handleRegister,
        handleToggle
    }

}

export default useFirebase;