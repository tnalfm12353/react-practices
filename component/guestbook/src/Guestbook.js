import React from 'react'
import data from './assets/json/data.json';
import GuestbookForm from './GuestbookForm';
import GuestbookList from './GuestbookList';
import guestbookimg from './assets/images/guestbook.png';
import "./assets/css/styles.css";
export default function Guestbook() {
    return(
        <div className="Guestbook">
            <h1 style={{backgroundImage:`url(${guestbookimg})`}}>방명록</h1>
            <GuestbookForm/>
            <GuestbookList items={data}/>
        </div>
    )
}