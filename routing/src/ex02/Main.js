import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Main() {
    const selectedStyle = {
        fontWeight:"bold",
        color:"#ff000080"
    }


    return(
        <div>
            <h1>Main Page</h1>
            <ul>
                <li><Link to={"/"}>메인페이지</Link></li>
                <li><Link to={"/guestbook"}>방명록</Link></li>
                <li><Link to={"/gallery"}>갤러리</Link></li>
            </ul>

            <ul>
                <li><NavLink to={"/"} activeStyle={selectedStyle}>메인페이지</NavLink></li>
                <li><NavLink to={"/guestbook"} activeStyle={selectedStyle}>방명록</NavLink></li>
                <li><NavLink to={"/gallery"} activeStyle={selectedStyle}>갤러리</NavLink></li>
            </ul>
        </div>
    )
}