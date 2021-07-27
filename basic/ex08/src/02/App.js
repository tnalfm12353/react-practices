import React from 'react';
import Header from './Header';
import Content from './Content';

const App = () =>{
    /**
     *  리엑트 컴포넌트는 단일 루트 노드만 랜더링 할 수 있다.
     *  오류
     *  <h2>App 02</h2>
        <p>JSX Tutorial - 특징 2: Single Root Node</p>
     * */    

    return(
        <div>
            {/* <h2>App 02</h2>
            <p>JSX Tutorial - 특징 2: Single Root Node</p> */}
            <Header 
                title = "App 02"/>
            <Content 
                subTitle = "JSX Tutorial - 특징 2: Single Root Node" />
        </div>
    )
}

export default App;