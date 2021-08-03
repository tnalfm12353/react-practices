import React from 'react'
import data from './assets/json/data.json';
import styles from "./assets/scss/Guestbook.scss";
import guestbookimg from './assets/images/guestbook.png';
import GuestbookForm from './GuestbookForm';
import GuestbookList from './GuestbookList';
export default function Guestbook() {
    console.log(styles);
    return(
        <div className={styles.Guestbook}>
            <h1 style={{backgroundImage:`url(${guestbookimg})`}}>방명록</h1>
            <GuestbookForm/>
            <GuestbookList items={data}/>
        </div>
    )
}