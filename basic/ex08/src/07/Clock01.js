import React from 'react';

export default () =>{

    const date = new Date();

    let hours = date.getHours();
    const minutes = ('0' + date.getMinutes()).slice(-2);
    const seconds = ('0' + date.getSeconds()).slice(-2);

    let session = "AM";
    if(hours > 12) {
        hours -= 12;
        session = "PM";
    }
    hours = ('0' + hours).slice(-2);

    const contenthtml = 
    "<span>" +
        hours +
        " : "+
        minutes +
        " : "+
        seconds +
        session +
    "</span>";

    return(

        // HTML 태그를 동적으로 생성하여 JSX에 추가하는 작업은 기본적으로 금지 (XSS 공격 방지 기능 내장)하고 있지만,
        // XSS 보호기능을 끄고 html을 렌더링 하는 속성을 포함한다,
        <div>
            {contenthtml}
        </div>
    )
}