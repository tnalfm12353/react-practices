import React, { Fragment, useState } from 'react';
import LifeCycle from './LifeCycle';
export default function App() {

    const [color, setColor] = useState("#000");

    const handleClick = () =>{
        const color = Math.floor(Math.random() * 0xffffff).toString(16);
        setColor(`#${color}`);
    }

    return(
        <Fragment>
            <h2>ex05: Component LifeCycle</h2>
            <button onClick={ handleClick }>색상변경</button>
            <br/>

            <LifeCycle color={color}/>
        </Fragment>
    )
}