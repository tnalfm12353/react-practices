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

    return(
        /*
            comment01: 컴포넌트 안이 아니기 때문에 자바스크립트 구문이 가능하다.
        */
        <div
            /**
             * comment02: 여기서도 다중행 주석이 가능하다 (추천 안함.)
             */
            className="clock"
            title="시계"
            props01="hello"
            props02="world">
            {/* JSX는 HTML이 아니다!!.. -> <!-- --> 주석은 사용할 수 없다. */}
            // comment03 : JSX 컴포넌트 안에서 주석을 사용하면 화면에 그대로 출력된다.
            {hours}
            {/* comment04: 이런 방식으로  표현식이 실행되는 블록안에서 주석을 달아야 한다.*/}
            {" : "}
            {minutes}
            {" : "}
            {seconds}
            { ' ' }
            {session}
        </div>
    )
}