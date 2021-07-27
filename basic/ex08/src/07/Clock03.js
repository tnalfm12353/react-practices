import React, { useState } from 'react';

export default () =>{

    const [now, setNow] = useState(() =>{
        const date = new Date();

        const hour = date.getHours();
        const minutes =  date.getMinutes();
        const seconds = date.getSeconds();

        return `${hour} : ${minutes} : ${seconds} ${hour > 12 ? "PM": "AM"}`;
    });

    return(
        <div>
            {now}
        </div>
    )
}