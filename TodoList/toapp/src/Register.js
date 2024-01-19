import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { CredentialContext } from './App';

const Register = () => {
    const [credentials, setCredentials] = useContext(CredentialContext);
    const mystyle = {
        paddingLeft: '2.5rem',
        paddingRight: '2.5rem',
    };

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [validEmail, setValidEmail] = useState(true);
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [validPassword, setValidPassword] = useState(true);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const [passwordMatch, setPasswordMatch] = useState(true);
    const [serverError, setServerError] = useState('');
    const [registrationSuccess, setRegistrationSuccess] = useState(false);
    const navigate =useNavigate();

    const setCred=(Credentials)=>{
        
    }
    const clearRegistrationSuccess = () => {
        setRegistrationSuccess(false);
        navigate("/otpDash");
    };

    const clearServerError = () => {
        setServerError('');
    };

    const handleServerError = () => {
        setServerError('User already exists please login or use different');
    };

    const handleUsernameChange = (event) => {
        const name = event.target.value;
        setUsername(name);
    };

    const handleEmailChange = (event) => {
        const inputEmail = event.target.value;
        setEmail(inputEmail);
        const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputEmail);
        setValidEmail(isValidEmail);
    };

    const handlePasswordChange = (event) => {
        const inputPassword = event.target.value;
        setPassword(inputPassword);
        const isValidPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(inputPassword);
        setValidPassword(isValidPassword);

        setPasswordMatch(inputPassword === passwordConfirm);
    };

    const handlePasswordToggle = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleConfirmPasswordChange = (event) => {
        const confirmPasswordValue = event.target.value;
        setPasswordConfirm(confirmPasswordValue);

        setPasswordMatch(password === confirmPasswordValue);
    };

    const handleConfirmPasswordToggle = () => {
        setConfirmPasswordVisible(!confirmPasswordVisible);
    };

    const Register = (event) => {
       alert("to register you have to verify your email first first......!");
       setCredentials({
         email,
         password,
         username,
       });
       navigate("/otpdash");

    };

    return (
        <section className="vh-100 pt-5">
            {/* Email validation alert */}
            {!validEmail && email !== '' && (
                <div className="alert alert-danger" role="alert">
                    Please enter a valid email address!
                </div>
            )}

            {/* Password validation alert */}
            {!validPassword && password !== '' && (
                <div className="alert alert-danger" role="alert">
                    Please enter a valid password (minimum 8 characters, at least one uppercase letter, one lowercase letter, one number, and one special character)!
                </div>
            )}

            {/* Confirm password validation alert */}
            {!passwordMatch && passwordConfirm !== '' && (
                <div className="alert alert-danger" role="alert">
                    Passwords do not match!
                </div>
            )}

            {/* Server error display */}
            {serverError && (
                <div className="alert alert-danger alert-dismissible fade show" role="alert">
                    {serverError}
                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="alert"
                        aria-label="Close"
                        onClick={clearServerError}
                    ></button>
                </div>
            )}
             {registrationSuccess && (
                <div className="alert alert-success alert-dismissible fade show" role="alert">
                    User registered successfully......! Please do proceed for email verification....!
                    <button type="button" className="btn-close" aria-label="Close" onClick={clearRegistrationSuccess}></button>
                </div>
            )}

            {/* Form */}
            <div className="container-fluid h-custom bg-white">
                <div className="row d-flex justify-content-center align-items-center h-100 rounded shadow">
                <div className="col-md-9 col-lg-6 col-xl-5">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt="Sample image" />
                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <form onSubmit={Register}>
                            <div className="form-outline mb-4">
                                <input type="email" id="form3Example3" className="form-control form-control-lg"
                                    placeholder="Enter a valid email address" onChange={handleEmailChange}
                                    value={email} />
                                <label className="form-label" htmlFor="form3Example3">Email address</label>
                            </div>

                            <div className="form-outline mb-4">
                                <input type="text" id="form3Example3" className="form-control form-control-lg"
                                    placeholder="Enter username" onChange={handleUsernameChange}
                                    value={username} />
                                <label className="form-label" htmlFor="form3Example3">Enter username</label>
                            </div>

                            {/* Password field */}
                            <div className="form-outline mb-3">
                                <div className="input-group">
                                    <input
                                        type={passwordVisible ? 'text' : 'password'}
                                        id="form3Example4"
                                        className="form-control form-control-lg"
                                        placeholder="Enter password"
                                        value={password}
                                        onChange={handlePasswordChange}
                                    />
                                    <button
                                        className="btn btn-outline-secondary"
                                        type="button"

                                        onClick={handlePasswordToggle}
                                    >
                                        {passwordVisible ? <Visibility /> : <VisibilityOff />}
                                    </button>
                                </div>
                                <label className="form-label" htmlFor="form3Example4">Password</label>
                            </div>

                            {/* Confirm password field */}
                            <div className="form-outline mb-3">
                                <div className="input-group">
                                    <input
                                        type={confirmPasswordVisible ? 'text' : 'password'}
                                        id="form3Example5"
                                        className="form-control form-control-lg"
                                        placeholder="Confirm password"
                                        value={passwordConfirm}
                                        onChange={handleConfirmPasswordChange}
                                    />
                                    <button
                                        className="btn btn-outline-secondary"
                                        type="button"
                                        onClick={handleConfirmPasswordToggle}
                                    >
                                        {confirmPasswordVisible ? <Visibility /> : <VisibilityOff />}
                                    </button>
                                </div>
                                <label className="form-label" htmlFor="form3Example5">Confirm password</label>
                            </div>

                            {/* Registration button */}
                            <div className="d-flex justify-content-between align-items-center">
                                <button type="submit" className="btn btn-primary btn-lg" style={mystyle}>Register</button>
                                <p className="small fw-bold mt-2 pt-1 mb-0">
                                    Already have an account? <Link to="/">Login</Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;
