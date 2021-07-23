import React, { useState } from 'react';

const App = () =>{

    let {message, setMessage} = useState("Hello World");


    return (
        <div>
            <h1>hello world</h1>
        </div>
    );
}

export default App;