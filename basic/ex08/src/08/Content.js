import React, { Fragment } from 'react';
import Clock01 from './Clock01';
import Clock02 from './Clock02';
import Clock03 from './Clock03';

export default () =>{
    return(
        <Fragment>
            <p>{"특징 4: 공백(Blank Space)"}</p>
            <Clock01 />
            <Clock02 />
            <Clock03 />
        </Fragment>
    )
}