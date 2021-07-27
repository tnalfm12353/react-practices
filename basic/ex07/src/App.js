import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
const App = () =>{

    let [message, setMessage] = useState();


    useEffect(()=>{
      setMessage("Hello World");

    })
    
    return (
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            React 1week 과제 입니다.
          </p>
          <h1>{message}</h1>
        </header>
      </div>
    );
}

export default App;