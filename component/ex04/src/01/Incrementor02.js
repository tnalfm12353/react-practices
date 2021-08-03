import React, { useState } from 'react'

export default function({begin, step}) {
    const [value, setValue] = useState(begin);

    const onClickBtn = () =>{
        setValue(value + step);
    }

    return(
        <div>
        <button onClick={ onClickBtn }>
            <strong>+</strong>
        </button>
        { ' ' }
        <span>{ value }</span>
        </div>
    );
}