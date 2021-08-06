import React, { Fragment, useEffect, useRef, useState } from 'react'

export default function Hook({ color }) {

    const h3Ref = useRef();

    const [boxColor, setBoxColor] = useState(color);
    const [title, setTitle] = useState('');

    /**
     * 1.Alternative 1: getDerivedStateFromProps
     */
    if(boxColor !== color) {
        setBoxColor( color );
    }

    /**
     *  2. After Rendering 함수 (상태에 변화 -> 랜더링 -> 함수)
     *  class component lifeCycle(componentDidMount, componentDidUpdate)
     */
     useEffect(()=>{
        console.log("After Rendering");
    });

    
    /**
     * 3. 어떤 특정 상태(boxColor)의 변화에 반응하는 After Rendering 함수 : 관심 분리
     */
    useEffect(()=>{
        console.log("Update color(DB) using Apis......");
    },[boxColor]);

    /**
     * 4. Alternative 2: componentDidMount & componentWillUnMount
     */

     useEffect(()=>{
        console.log("After Mount(componentDidMount)");
        return (() =>{
            console.log("After Unmount(componentWillUnmount)");
        });
    },[]);


    return(
        <Fragment>
            <h3 
                style={{
                    width: 300,
                    height: 50,
                    backgroundColor: boxColor
                }}
                ref={h3Ref}
            />
            <input 
                type="text" 
                value={title} 
                onChange={(e)=>setTitle(e.target.value)}/>
        </Fragment>
    );
}