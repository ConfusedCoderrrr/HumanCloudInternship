import React, { useContext, useState } from 'react';
import { CredentialContext } from './App';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const OtpDash = () => {
    const [credentials, setCredentials] = useContext(CredentialContext); // Provide CredentialContext to useContext
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const fetchHashedOTP = async () => {
        try {
            setLoading(true);

            const response = await fetch(`http://localhost:4000/getOtp?email=${encodeURIComponent(credentials.email)}`, {
                method: 'GET',
            });

            if (response.ok) {
                const hashedOTP = await response.text();
                setCredentials({
                    ...credentials,
                    otp: hashedOTP,
                });
                
            } else {
                console.error('Error retrieving hashed OTP:', response.status);
                // Display a user-friendly error message
                // You can set an error state to show the message in the UI
            }
        } catch (error) {
            console.error('Error fetching hashed OTP:', error);
            // Display a user-friendly error message
            // You can set an error state to show the message in the UI
        } finally {
            navigate("/otp");
            setLoading(false);
        }
    };

    return (
        <section className="vh-100 pt-5">
            <div className="container-fluid h-custom bg-white">
                <div className="row d-flex justify-content-center align-items-center h-100 rounded shadow">
                    <div className="row mb-4">
                        <div><br /><br /></div>
                        <div className="col-md-9 col-lg-6 col-xl-5">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                className="img-fluid" alt="Sample image" />
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                            <div className="row">
                                <h1 className='text-center'>Your email is, {credentials.email}</h1>
                            </div>
                            <br />

                            <div className="row mt-3">
                                <div className="col-12 text-center">
                                    {/* Add Verify button */}
                                    <button className="btn btn-primary" onClick={fetchHashedOTP} disabled={loading}>
                                        {loading ? 'Verifying...' : 'Verify'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OtpDash;
