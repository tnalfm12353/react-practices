import React from 'react';
import './assets/scss/App.scss';
import Guestbook from './Guestbook';

export default function App() {

    return(
        <div className={"App"}>
            <div>
                <Guestbook/>
            </div>
        </div>
    );
}