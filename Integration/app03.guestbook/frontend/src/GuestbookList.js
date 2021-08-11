import React from 'react';
import styles from './assets/scss/GuestbookList.scss';
import GuestbookItem from './GuestbookItem';
export default function GuestbookList({items, deleteItem}) {
    return(
        <ul className={styles.Guestbook__List}>
            {items.map((item)=> <GuestbookItem key={item.id} item={item} deleteItem={deleteItem}/>)}
        </ul>
    )
}