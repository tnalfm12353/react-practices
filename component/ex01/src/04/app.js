import React from 'react';
import MyComponent from './MyComponent';

export default function App(){

    return(
        <div id="App">
            <MyComponent
                // props01 = { "문자열" } : Not Required, Default Value Set
                props02 = {1}
                props03 = {true}
                props04 = {{ no: 10}}
                props05 = {[1,2,3,4]}
                props06 = {() => '함수'}
                props07 = { 100 }
                props08 = { [true, false, false]}
                props09 = { {no:2, name:"둘리", email:"dooly@nav.com"}}
                /> 
        </div>
    )
}