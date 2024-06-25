// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Navbar from './Navbar';
import TextForm from './TextForm';
import Alert from './Alert';
// import About from './About';
import { useState } from 'react';
// import {
//   BrowserRouter as 
//   Router, Route, Routes,
// } from "react-router-dom";

function App() {
  const[mode, setMode] = useState('light');
  const[alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({msg: message, type: type})
    setTimeout(()=>{  
      setAlert(null);
    }, 1500);
  }

  const toggleMode=() =>{
    if(mode==='light'){
      setMode ('dark');
      document.body.style.backgroundColor = '#373c45';
      showAlert(": Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      Alert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';

    }
  }
  return (
    <>
      {/* <Router> */}
      <Navbar title="TextUtils" mode ={mode} toggleMode={toggleMode}/>
      <Alert alert ={alert}/>
      <div className="container my-3">
      <TextForm showAlert={showAlert} heading="Enter the text: " mode = {mode} />
      {/* <Routes> */}
          {/* <Route path="/about" element={<About mode= {mode} />} /> */}
          {/* <Route path="/" element={}/> */}
      {/* </Routes>  */}
      </div>
      {/* </Router> */}

    </>
  );
}

export default App;
