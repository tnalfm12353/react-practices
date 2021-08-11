import React, { Fragment } from 'react';
import userImg from './assets/images/user.png';
import deleteImg from './assets/images/delete.png';
import styles from './assets/scss/GuestbookListItem.scss';
export default function GuestbookItem({item, deleteItem}) {
    return(
        <li className={styles.Guestbook__List__Item} style={{backgroundImage:`url(${userImg})`}}>
            <strong>{item.name}</strong>
            <p>
                { item.message && item.message.split("\n").map((line, index) => index > 0 ?
                    <Fragment key={index}>
                        <br/>
                        { line }
                    </Fragment> 
                    : line
                )}
            </p>
            <strong></strong>
            <a href="" style={{backgroundImage:`url(${deleteImg})`}} onClick={(e) => {e.preventDefault(); deleteItem(); }}></a>
        </li>
    )
}