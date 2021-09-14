import React from 'react';
import {HashRouter, Route} from 'react-router-dom';

import Main from './Main';
import Guestbook from './Guestbook';
import Gallery from './Gallery';

export default function App() {

    return(
        <HashRouter>
            <Route exact path="/" component={Main}/>
            <Route path="/guestbook" component={Guestbook}/>
            <Route path="/gallery" component={Gallery}/>
        </HashRouter>
    );
}