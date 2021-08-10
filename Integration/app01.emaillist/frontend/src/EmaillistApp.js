import React, { useState, useEffect } from 'react';
import SerachBar from './SerachBar';
import Emaillist from './Emaillist';
import data from './assets/json/data.json';


export default function App() {

    const [emails, setEmails] = useState([]);
    const [keyword, setKeyword] = useState('');

    useEffect(async ()=>{
        try {

            const response = await fetch('/api',{
                method: "get",
                mode: "same-origin",
                headers: {
                    'Context-Type' : "application/json",
                    'Accept-Charset': "utf-8"
                },
                body: null
            });

            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const json = await response.json();
            if(json.result !== 'success') {
                throw new Error(`${response.result} ${response.message}`);
            }
            console.log(json.data);
            setEmails(json.data);
            
        } catch (error) {
            console.error(error);
        }
    },[])

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

