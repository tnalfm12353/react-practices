import React from 'react';

export default function App() {
    const h1Styles = {
        width: 200,
        height: 50,
        padding: 5,
        color: "#fff",
        backgroundColor: "#ee990080"
    };

    return(
      <div id='App'>
          <h1 style={ h1Styles }>Inline Styling</h1>
      </div>
    )
}