import React from 'react';

const App = function(){

    let {message, setMessage} = useState("Hello World");


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