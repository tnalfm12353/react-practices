import React from 'react';

export default () =>{

    const date = new Date();

    const hours = date.getHours();
    const minutes =  date.getMinutes();
    const seconds = date.getSeconds();

    let session = "AM";
    if(hours > 12) {
        "PM"
    }
    const html = 
        "<span>" +
            hours +
            " : "+
            minutes +
            " : "+
            seconds +
            session +
        "</span>";
    return(
        <div dangerouslySetInnerHTML={ { __html: html } } />
    )
}