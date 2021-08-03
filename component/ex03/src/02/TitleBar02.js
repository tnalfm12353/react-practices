import React, { useState } from 'react';

export default function TitelBar02() {
    let no = 10;

    const onClickHandler = (e) =>{
        no++;    
        console.log("TitleBar02 Clicked!");
    }

    return (
        <h1 onClick={onClickHandler}
            style={{cursor:"pointer"}}>
            ex03 - functional Event Handler (Functional Component) { no }
        </h1>
    )
}