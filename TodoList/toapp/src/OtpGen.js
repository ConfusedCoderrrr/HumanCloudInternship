import React, { useEffect, useState , useContext} from 'react';
import { CredentialContext } from './App';


const YourComponent = () => {
    const [credentials, setCredentials] = useContext(CredentialContext);
    useEffect(()=>{
         console.log(credentials);
    },[]);
    // Initialize the OTP value as an empty string
    const [otpValue, setOtpValue] = useState(['', '', '', '']);

    // Function to handle OTP input change
    const handleOtpInputChange = (index, event) => {
        const inputValue = event.target.value;

        // Update the OTP value based on the input box index
        setOtpValue((prevOtp) => {
            const newOtp = [...prevOtp];
            newOtp[index] = inputValue;
            return newOtp;
        });
    };

    // Function to handle verification
    const handleVerifyClick = async () => {
        console.log('clicked');
    
        // Combined OTP value
        const combinedOtp = otpValue.join('');
        console.log('Combined OTP:', combinedOtp);
    
        try {
            // Send the combined OTP and stored hashed OTP to the backend for verification
            const response = await fetch('http://localhost:4000/verifyOtp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userOtp: combinedOtp,
                    storedOtp: credentials.otp,
                }),
            });
    
            if (response.ok) {
                console.log("registering user");
            } else {
                console.error('OTP verification failed:', response.status);
                // Handle the case where OTP verification failed
                // For example: display an error message to the user
            }
        } catch (error) {
            console.error('Error during OTP verification:', error);
            // Handle any errors that occur during the OTP verification process
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
                                <h1 className='text-center'>Please enter OTP</h1>
                            </div>
                            <br />


                            <div className="row">
                                {/* Generate OTP input boxes */}
                                {[0, 1, 2, 3].map((index) => (
                                    <div className="col-3" key={index}>
                                        <input
                                            type="text"
                                            className="form-control text-center"
                                            maxLength="1"
                                            value={otpValue[index]}
                                            onChange={(event) => handleOtpInputChange(index, event)}
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className="row mt-3">
                                <div className="col-12 text-center">
                                    {/* Add Verify button */}
                                    <button className="btn btn-primary" onClick={handleVerifyClick}>
                                        Verify
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

export default YourComponent;
