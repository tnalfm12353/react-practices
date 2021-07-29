import React from 'react';
import styles from '../assets/css/Task.css';
export default function Task({name, done, checked}) {
    
    return(
        <li className={styles.TaskList__Task}>
            <input type="checkbox" checked={done} onChange={(e)=>checked(e)}/>
            {name}
            <a href="#" className={styles["TaskList__Task--remove"]}></a>
        </li>
    );
}