import React, { useContext, useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { CredentialContext } from './App';
const LoginForm = () => {
  const mystyle = {
    paddingLeft: '2.5rem',
    paddingRight: '2.5rem',
  };

  const [email, setEmail] = useState('');
  const [valid, setValid] = useState(true);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate=useNavigate();
  const [, setCredentials] = useContext(CredentialContext);

  const handlePasswordChange = (e) => {
    const inputPassword = e.target.value;
    setPassword(inputPassword);
  };

  const handleEmailChange = (event) => {
    const inputEmail = event.target.value;
    setEmail(inputEmail);

    // Regular expression for basic email validation
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputEmail);
    setValid(isValidEmail);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (email !== "" && password !== "") {
        try {
            const response = await fetch(`http://localhost:4000/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });
            
            if (response.ok) {
                const data = await response.json();
                const user = data.data.username;
                const token = data.data.token;

                setCredentials({
                    email,
                    user,
                    token,
                });

                alert("Logging you in...");
                navigate("/Todo");
            } else {
                const errorData = await response.json();
                console.error('Error:', errorData);
                alert('Error occurred while logging in. Please check your credentials.');
            }
        } catch (error) {
            // Handle fetch error
            console.error('Error:', error);
            alert('Error occurred while logging in. Please try again.');
        }

        setEmail("");
        setPassword("");
    } else {
        alert('Error occurred while logging in. Please check your credentials.');
    }
};


  

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <section className="vh-100 pt-5">
      {valid ? <p></p> : email === "" ? <p></p> : <div class="alert alert-danger" role="alert">
        Please enter valid email!
      </div>}

      <div className="container-fluid h-custom bg-white">
        <div className="row d-flex justify-content-center align-items-center h-100 rounded shadow">
        <div className="row mb-4">
          <h1 className=' text-center '>Login Page </h1>
          <div><br /><br /></div>
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid" alt="Sample image" />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form onSubmit={handleSubmit}>
              <div className="form-outline mb-4">
                <input type="email" id="form3Example3" className="form-control form-control-lg"
                  placeholder="Enter a valid email address" onChange={handleEmailChange}
                  value={email} />
                <label className="form-label" htmlFor="form3Example3">Email address</label>
              </div>
              <div className="form-outline mb-3">
                <div className="input-group">
                  <input type={showPassword ? "text" : "password"} id="form3Example4" className="form-control form-control-lg"
                    placeholder="Enter password" onChange={handlePasswordChange} />
                  <button className="btn btn-outline-secondary" type="button" onClick={togglePasswordVisibility}>
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </button>
                </div>
                <label className="form-label" htmlFor="form3Example4">Password</label>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <button type="submit" className="btn btn-primary btn-lg" style={mystyle}>Login</button>
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Don't have an account? <Link to="/register">Register</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default LoginForm;
