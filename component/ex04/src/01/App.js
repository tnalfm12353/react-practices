import React, { Fragment } from 'react';
import Incrementor01 from './Incrementor01';
import Incrementor02 from './Incrementor02';
export default function App() {
    return(
        <Fragment>
            <Incrementor01 begin={1} step={1}/>
            <Incrementor02 begin={2} step={2}/>
        </Fragment>
    )
}