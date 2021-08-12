import React, { Fragment, useState, useRef, useEffect } from 'react';
import Modal from "react-modal";
import styles from './assets/scss/modal.scss'
Modal.setAppElement('body');

export default function App() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [comment, setComment] = useState();
    const [file, setFile] = useState();
    const [galleries, setGalleries] = useState([]);

    useEffect( async () =>{
        const response = await fetch('/api');
        if(!response.ok) {
            throw new Error(`${response.status} ${response.statusText}`);
        }
        
        const json = await response.json();
        if(json.result !== 'success') {
            throw new Error(`${json.result} ${json.message}`);
        }
        setGalleries(json.data);
    },[])


    useEffect(()=>{
        console.log(galleries);
    },[galleries])
    const fileHandleChange = (e) =>{
        setFile(e.target.files[0]);
    }

    const submit = async (e) => {
        e.preventDefault();

        if(comment && file){
            let form = new FormData();
            form.append('comment', comment);
            form.append('file', file);

            const response = await fetch('/api', {method:'POST' , body:form})

            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }
            
            const json = await response.json();
            if(json.result !== 'success') {
                throw new Error(`${json.result} ${json.message}`);
            }

            setGalleries([json.data,...galleries]);
        }
    
    }
    return (
        <Fragment>
            <button onClick={ () => setModalIsOpen(true) }>upload</button>
            <br/><br/>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={ () => setModalIsOpen(false) }
                shouldCloseOnOverlayClick={ true }
                className={ styles.Modal }
                overlayClassName={ styles.Overlay }
                style={ {content: {width: 350}} }
                contentLabel="modal05 example">
                <h1>비밀번호입력</h1>
                <div>
                    <form>
                        <label>코멘트</label>
                        <br/>
                        <input type='text' value={comment} onChange={e => setComment(e.target.value) }/>
                        <br/><br/>
                        <label>이미지</label>
                        <br/>
                        <input type='file' accept={"image/*"} multiple={false} onChange={e => fileHandleChange(e)} />
                    </form>
                </div>
                <div className={ styles['modal-dialog-buttons'] }>
                    <button onClick={ e => submit(e)}>확인</button>
                    <button onClick={ () => setModalIsOpen(false) }>취소</button>
                </div>
            </Modal>
            {galleries.map((gallery)=>{
                return <img src={gallery.url} />
            })}

        </Fragment>
    );
}