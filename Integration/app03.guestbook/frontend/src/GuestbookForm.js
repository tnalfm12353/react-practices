import React, { useState } from 'react';
import styles from './assets/scss/GuestbookForm.scss';
import update from 'react-addons-update';
export default function GuestbookForm({guestbookVo, onchange ,api}) {

    // const [guestbookVo, setGuestbookVo] = useState();
    return(
        // <form className={styles.Guestbook__Form}>
        //     <input type="text" name="name" id="input-name" placeholder="이름" onChange={e => onchange(e)}/>
        //     <input type="password" id="input-password" placeholder="비밀번호" onChange={e => setGuestbookVo(update(guestbookVo,{password: {$set: e.target.value }}))}/>
        //     <textarea id="tx-content" placeholder="내용을 입력해 주세요." onChange={e => setGuestbookVo(update(guestbookVo,{message: {$set: e.target.value }}))}></textarea>
        //     <input type="submit" value="보내기" onClick={ (e) => {e.preventDefault(); api.add(guestbookVo)}}/>
        // </form>
        <form className={styles.Guestbook__Form}>
            <input type="text" name="name" id="input-name" placeholder="이름" value={guestbookVo.name} onChange={e => onchange(e)}/>
            <input type="password" name="password" id="input-password" placeholder="비밀번호" value={guestbookVo.password} onChange={e => onchange(e)}/>
            <textarea id="tx-content" name="message" placeholder="내용을 입력해 주세요." value={guestbookVo.message} onChange={e => onchange(e)}></textarea>
            <input type="submit" value="보내기" onClick={ (e) => {e.preventDefault(); api.add(guestbookVo)}}/>
        </form>
    )
}