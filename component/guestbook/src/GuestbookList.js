import React from 'react';
import GuestbookItem from './GuestbookItem';
export default function GuestbookList({items}) {
    return(
        <ul className="Guestbook__List">
            {items.map((item)=> <GuestbookItem key={item.no} item={item}/>)}
        </ul>
    )
}