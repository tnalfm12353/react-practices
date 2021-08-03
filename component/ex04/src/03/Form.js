import React, { useState } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import './assets/Form.css';

export default function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [gender, setGender] = useState("female");
    const [birth, setBirth] = useState(1984);
    const [bio, setBio] = useState("");
    const [agreeProv,setAgreeProv] = useState("no");

    const [validEmail, setValidEmail] = useState(false);
    const onChangeInputName = (e) =>{

        // setName(e.target.value);

        // 10자 제한( validation )
        setName(e.target.value.substr(0,10));
    }
    const onChangeInputEmail = (e) =>{
        setEmail(e.target.value);
        const regExp = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
        setValidEmail(regExp.test(e.target.value));
    }

    const onChangeInputPassword = (e) =>{
        setPassword(e.target.value);
    }

    const onChangeInputGender = (e) =>{
        setGender(e.target.value);
    }
    
    const onChangeInputBio = (e) =>{
        setBio(e.target.value);
    }

    const onChangeInputProv = (e) =>{
        const status = e.target.value === 'no' ? 'yes' : 'no';
        // API 호출
        const url = `/prov/agree?status=${status}`;
        console.log(url);

        if(true) {
            setAgreeProv(status);
        }
    }

    return (
        <form id="joinForm" name="joinForm" method="post" action="/do/not/post">
            <label htmlFor="name">이름</label>
            <input id="name" name="name" type="text" value={ name } onChange={ onChangeInputName }/>

            <label htmlFor="email">이메일</label>
            <input id="email" name="email" type="text" value={ email } onChange={ onChangeInputEmail }/>
            {
                email === ""? 
                    null :
                validEmail?
                <FontAwesomeIcon icon={faCheckCircle} size='2x' style={{ marginLeft:'5px', color:'blue'}}/>
                :
                <FontAwesomeIcon icon={faCheckCircle} size='2x' style={{ marginLeft:'5px', color:'#ff000070'}}/>
            }

            <label htmlFor="password">패스워드</label>
            <input id="password" name="password" type="password" value={ password } onChange ={ onChangeInputPassword }/>

            <fieldset>
                <legend>성별</legend>
                <label>여</label> <input type="radio" name="gender" value={ "female" } checked={gender === "female"} onChange={ onChangeInputGender }/>
                <label>남</label> <input type="radio" name="gender" value={ "male" } checked={gender === "male"} onChange={ onChangeInputGender }/>
            </fieldset>

            <label htmlFor="birthYear">생년</label>
            <select id="birthYear" value={ birth } onChange={ e => setBirth(e.target.value)}>
                <option value={1984}>1984년</option>
                <option value={1985}>1985년</option>
                <option value={1986}>1986년</option>
                <option value={1987}>1987년</option>
                <option value={1988}>1988년</option>
                <option value={1989}>1989년</option>
                <option value={1990}>1990년</option>
            </select>

            <label htmlFor="bio">자기소개</label>
            <textarea id="bio" name="bio" value={ bio } onChange={ onChangeInputBio }/>

            <fieldset>
                <legend>약관동의</legend>
                <input id="agree-prov" type="checkbox" name="agreeProv" value={ agreeProv } checked={ agreeProv === "yes"} onChange={onChangeInputProv}/>
                <label>서비스 약관에 동의합니다.</label>
            </fieldset>

            <input type="submit" value="가입" />
        </form>
    );
}