import React, {Fragment, useRef} from 'react';
import logo from '../assets/images/react-logo.png';

export default function App() {
    const imageRef = useRef(null);


    const onKeyPressInput = (e) =>{
        if(e.key === "Enter"){
            console.log(e.target.value);
            e.target.value = '';
        }
    }

    const onFocusInput = (e) =>{
        console.log("onFocusInput");
    }

    const onBlurInput = (e) =>{
        console.log("onBlurInput");
    }

    const onMouseOverImage = (e) =>{
        console.log("onMouseOverImage", `x=${e.clientX}`,`y=${e.clientY}`);
    }

    const onMouseMoveImage = (e) =>{
        const offsetTop = imageRef.current.offsetTop;
        const offsetLeft = imageRef.current.offsetLeft;

        console.log("onMouseMoveImage",`x=${e.clientX - offsetLeft}`,`y=${e.clientY - offsetTop}`);
    }

    const onMouseOutImage = (e) =>{
        console.log("onMouseOutImage",`x=${e.clientX}`,`y=${e.clientY}`);
    }

    const onMouseDownImage = (e) =>{
        console.log("onMouseDownImage",`x=${e.clientX}`,`y=${e.clientY}`);
    }

    const onMouseUpImage = (e) =>{
        console.log("onMouseUpImage",`x=${e.clientX}`,`y=${e.clientY}`);
    }

    const onClickImage = (e) =>{
        console.log("onClickImage");
    }

    const onDoubleClickImage = (e) =>{
        console.log("onDoubleClickImage");
    }


    return (
        <Fragment>
            <h2>ex03 - Some Examples of Event Handler</h2>
            <input
                type='text'
                placeholder='메세지를 입력 하세요'
                onKeyPress={ onKeyPressInput }
                onFocus={ onFocusInput }
                onBlur={ onBlurInput } />
                <br/>
                <br/>
            <img
                ref = {imageRef}
                style={ {
                    cursor: 'pointer',
                    width: 190,
                    border: '1px solid #ccc'
                } }
                src={ logo }
                onMouseOver={ onMouseOverImage }
                onMouseMove={ onMouseMoveImage }
                onMouseOut={ onMouseOutImage }
                onMouseDown={ onMouseDownImage }
                onMouseUp={ onMouseUpImage }
                onClick={ onClickImage }
                onDoubleClick={ onDoubleClickImage }/>
        </Fragment>
    );
}