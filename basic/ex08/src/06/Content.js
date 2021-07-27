import React, { Fragment } from 'react';
import Clock01 from './Clock01';
import Clock02 from './Clock02';
import Clock03 from './Clock03';

export default () =>{
    return(
        <Fragment>
            <p>{"특징 3: JSX 표현식 표기법 { _expression_ } 문제점: if-statment"}</p>
            <Clock01 />
            <Clock02 />
            <Clock03 />
        </Fragment>
    )
}