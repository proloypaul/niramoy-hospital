import React from 'react';
import useAuth from '../../Context/useAuth';
// import useFirebase from '../../Hooks/useFirebase';
import './Register.css';

const Register = () => {
    const {error, isLogin, signInUsingGoogle, handleEmail, handlePassword, handleRegister, handleToggle} = useAuth()
    return (
        <div>
            {isLogin ? <h1 className="text-center title">Login Here</h1>: <h1 className="text-center title">Register Here</h1>}
            <div className="register-container">
                <div>                   
                    <form className="register">
                        {isLogin ? "" : <input type="text" placeholder="Enter your name" name="" id="" className="register-input"/>}
                        <br/>
                        <input onBlur={handleEmail} type="email" placeholder="Enter your email" name="" id="" className="register-input" required />
                        <br/>
                        <input onBlur={handlePassword} type="password" placeholder="Create a password" name="" id="" className="register-input" required/>
                        <br/>
                        <input onChange={handleToggle} type="checkbox" name="" id="" /><span className="check-title">Already have an Account</span>
                        <br/>
                        <span className="error-message">{error}</span>
                        <br/>
                        {isLogin ? <button onClick={handleRegister} type="submit" className="visitBtn">Login</button>:<button onClick={handleRegister} type="submit" className="visitBtn">Register</button>}
                    </form>
                    <div>
                        <button onClick={signInUsingGoogle} className="googleBtn">Google SignIn</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;