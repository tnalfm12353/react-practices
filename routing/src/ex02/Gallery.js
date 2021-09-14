import React from 'react';
import { Link } from 'react-router-dom';

export default function Gallery() {
    return(
        <div>
            <h1>Gallery Page</h1>
            <ul>
                <li><Link to={"/"}>메인페이지</Link></li>
                <li><Link to={"/guestbook"}>방명록</Link></li>
                <li><Link to={"/gallery"}>갤러리</Link></li>
            </ul>
        </div>
    )
}