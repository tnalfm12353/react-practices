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

    return(
        <div>
            {hours}
            :
            {minutes}
            :
            {seconds}
            {hours > 12 ? "PM" : "AM"} 
        </div>
    )
}