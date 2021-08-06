import React, { useState } from 'react';
import SerachBar from './SerachBar';
import Emaillist from './Emaillist';
import data from './assets/json/data.json';

export default function App() {

    const [emails] = useState(data);
    const [keyword, setKeyword] = useState('');

    const notifyKeywordChanged = (e) =>{
        setKeyword(e.target.value);
    }

    return (
        <div className={ "EmaillistApp" }>
            <SerachBar 
                keyword = {keyword}
                handleChange = {notifyKeywordChanged}/>
            <Emaillist 
                emails = {emails}
                keyword = {keyword}
            />
        </div>
    );
}

