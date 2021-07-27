import React, { Fragment } from 'react';
import Clock01 from './Clock01';
import Clock02 from './Clock02';
import Clock03 from './Clock03';

export default () =>{
    return(
        <Fragment>
            <p>{"Dynamic HTML Rendering"}</p>
            <Clock01 />
            <Clock02 />
            <Clock03 />
        </Fragment>
    )
}