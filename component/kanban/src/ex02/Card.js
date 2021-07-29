import React from 'react';
import TaskList from './TaskList';
import styles from '../assets/css/Card.scss';

export default function Card({card, checked}) {
    return(
        <div className={styles.Card}>
            <div className={styles.Card__Title}>{card.title}</div>
            <div className={styles.Card__Details}>{card.description}</div>

            <TaskList tasks = {card.tasks} checked = {checked}/>
        </div>
    );
}

