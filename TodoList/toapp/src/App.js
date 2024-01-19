import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import LoginForm from './LoginForm';
import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './Register';
import TodoList from './TodoList';
import React from 'react';
import OtpGen from './OtpGen';
import OtpDash from './OtpDash';


export const CredentialContext=React.createContext();
function App() {
  const [inputdata, setInputdata] = useState("");
  const [items, setItems] = useState([]);
  const credentialState= useState({});
  const addItems = () => {
    if (!inputdata) {
      alert("Please fill the data");
    } else {
      setItems([...items, inputdata]);
      setInputdata("");
    }
  }

  return (
    <div className='container '>
      <CredentialContext.Provider value={credentialState}>
      <Router>
        <Routes>
          <Route exact path="/" element={<LoginForm />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path='/Todo' element={<TodoList/>}/>
          <Route exact path="/otpdash" element={<OtpDash/>}/>
          <Route exact path="/otp" element={<OtpGen/>}/>
        </Routes>
      </Router>
      </CredentialContext.Provider>
    </div>
  );
}

export default App;
