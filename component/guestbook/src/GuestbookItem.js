import React, { Fragment } from 'react';
import userImg from './assets/images/user.png';
import deleteImg from './assets/images/delete.png';
export default function GuestbookItem({item}) {
    return(
        <li className="Guestbook__List__Item" style={{backgroundImage:`url(${userImg})`}}>
            <strong>{item.name}</strong>
            <p>
                { item.message && item.message.split("\n").map((line, index) => index > 0 ?
                    <Fragment>
                        <br/>
                        { line }
                    </Fragment> 
                    : line
                )}
            </p>
            <strong></strong>
            <a href="" style={{backgroundImage:`url(${deleteImg})`}}></a>
        </li>
    )
}