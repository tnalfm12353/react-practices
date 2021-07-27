import React from 'react';

const App = () =>{

    

    return(
        <div>
            <h2>App 01</h2>
            <p>JSX Tutorials - 특징 1: HTML과의 차이점</p>
            {
                /**
                 * 1. 속성은 Camel Case
                 */
            }
            <input type="text" maxLength="10" />

            {
                /**
                 * 2. Element는 꼭 닫혀야 한다.
                 *      오류) <br>, <hr>, <input >, <img >
                 */
            }

            <br />
            <hr />

            {
                /**
                 * 3. 속성 이름은 DOM API 기반이다
                 *    <div id='box' class='box'></div>
                 *    document.getElementById('box').className='box'
                 */
            }

            <div id='box' className='box'>
                box 입니당.
            </div>

        </div>
    )
}

export default App;