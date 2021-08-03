import React, { useState } from 'react';
import TaskList from './TaskList';
import styles from '../assets/css/Card.scss';

export default function Card({card, status, checked}) {
    const [showDetails, setShowDetails] = useState(true);
    const style = {
        position: "absolute",
        top:0,
        left:0,
        bottom:0,
        width:3,
        backgroundColor: status == "ToDo"? "#3e7e28" : status == "Doing" ? "#bd8031" : "#222"
    }

    return(
        <div className={styles.Card}>
            <div style={ style }/>
            <div className={ 
                    showDetails?
                    [styles.Card__Title, styles.Card__Title__open].join("")
                    : styles.Card__Title}
                    onClick={() => {setShowDetails(!showDetails)}}>
                {card.title}
            </div>
                {
                    showDetails?
                        <div className={styles.Card__Details}>
                            {card.description}
                            <TaskList tasks = {card.tasks} checked = {checked}/>
                        </div>
                    :null
                }
        </div>
    );
}

