import React, { Fragment } from 'react';
import Header from './Header';
import Content from './Content';

const App = () =>{
    return(
        React.createElement(
            Fragment,
            null,
            React.createElement(Header,{title="App 04"},null),
            React.createElement(Content,{subTitle="JSX Tutorial - Pure React(React API)로 함수 컴포넌트 작성"},null)
        )
    )
}

export default App;