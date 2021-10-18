import React from 'react';
import useFirebase from '../../Hooks/useFirebase';
import './Register.css';

const Register = () => {
    const {error, signInUsingGoogle} = useFirebase()
    return (
        <div>
            <h1 className="text-center title">Register Here</h1>
            <div className="register-container">
                <div>                   
                    <form className="register">
                            <input type="text" placeholder="give your name" name="" id="" className="register-input"/>
                            <br/>
                            <input type="email" placeholder="give your email" name="" id="" className="register-input" required />
                            <br/>
                            <span>Password must be at least 6 character</span>
                            <br/>
                            <input type="password" placeholder="create a password" name="" id="" className="register-input" required/>
                            <br/>
                            <input type="checkbox" name="" id="" /><span>Already have an Account</span>
                            <br/>
                            <span>{error}</span>
                            <br/>
                            <button type="submit">Next</button>
                    </form>
                    <div>
                        <button onClick={signInUsingGoogle}>Google SignIn</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;