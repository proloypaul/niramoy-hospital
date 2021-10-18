import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initialization from "../Firebase/firebase.init";

initialization()

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider()

    // sign in Usign Google
    const signInUsingGoogle = () => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user
                console.log(user)
                setError('');
            }).finally(error => {
                setIsLoading(false)
                // setError(error.message)
            });
    };

    // signIn and signOut state change 
    useEffect(() => { 
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if(user){
                setUser(user)
            }else{
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribed;
    }, [])

    // sign out process

    const signOutProcess = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser({})
            }).finally(error => {
                setIsLoading(false)
                // setError(error.message)
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

    const handleUserName = event => {
        setName(event.target.value);
        console.log(event.target.value)
    }

    const handleSignUp = (email, password) => {
        createUserWithEmailAndPassword(auth, email , password)
            .then(result => {
                const user = result.user
                setUser(user)
                setUserName()
                console.log(user)
                setError('');
            }).catch(error => {
                setError(error.message)
            })
    };

    const handleSignIn = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user
                setUser(user)
                console.log(user)
                setError('')
            }).catch(error => {
                setError(error.message);
            });
    }

    // set user displayName

    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => {

            }).catch(error => {
                setError(error.message);
            })
    }

    const handleRegister = event => {
        event.preventDefault()

        if(isLogin){
            handleSignIn(email, password)
        }else{
            handleSignUp(email, password)
        }
        
    }

    //collect toggle button boolean

    const handleToggle = event => {
        // console.log(event.target.checked);
        setIsLogin(event.target.checked);
    } 




    return{
        user,
        error,
        isLogin,
        isLoading,
        signInUsingGoogle,
        signOutProcess,
        handleEmail,
        handlePassword,
        handleUserName,
        handleRegister,
        handleToggle
    }

}

export default useFirebase;