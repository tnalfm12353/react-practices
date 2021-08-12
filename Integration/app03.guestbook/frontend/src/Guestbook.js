import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios';
import styles from "./assets/scss/Guestbook.scss";
import guestbookimg from './assets/images/guestbook.png';
import GuestbookForm from './GuestbookForm';
import GuestbookList from './GuestbookList';
import update from 'react-addons-update';

export default function Guestbook() {

    const [guestbookVo, setGuestbookVo] = useState({name:'', password:'', message:''});
    const [guestbooks, setGuestbooks] = useState([]);
    const [deleteModal, setDeleteModal] = useState(false);
    const headers = {
        "Content-Type" : "application/json"
    }

    const handleOnChange = (e) =>{
        const {name, value} = e.target;
        setGuestbookVo(update(guestbookVo, { [name] : {$set: value }}));
    }

    const deleteModalView = () =>{
        setDeleteModal(!deleteModal);
    }

    useEffect(()=>{
        axios.get('/api/guestbook', {headers:{ headers }})
             .then(res => {
                if(res.data.result == "success"){
                    setGuestbooks(res.data.data);
                }
             });
    },[])

    const apiFunctions = {
        add: (vo) => {
            const {name, password, message} = vo;
            if(name && password && message) {
                axios.post('/api/guestbook/add', vo, {headers:{ headers }})
                      .then(res => {                
                        setGuestbooks( guestbooks => [res.data.data, ...guestbooks]);
                        setGuestbookVo({name:'', password:'', message:''});
                      });
            };
        },

        delete: (id) => {
            axios.get('/api/guestbook/delete/'+id,{headers:{ headers }})
                 .then(res => console.log(res))
        }
    }

    return(
        <Fragment>
            { deleteModal? <h1>모달 켜짐</h1>: null}
            <div className={styles.Guestbook}>
                <h1 style={{backgroundImage:`url(${guestbookimg})`}}>방명록</h1>
                <GuestbookForm guestbookVo={guestbookVo} onchange={handleOnChange} api={apiFunctions}/>
                <GuestbookList items={guestbooks} deleteItem={deleteModalView}/>
            </div>
        </Fragment>
    )
}