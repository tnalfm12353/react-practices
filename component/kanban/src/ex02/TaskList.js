import React from 'react';
import Task from './Task';
import styles from '../assets/css/TaskList.css';
export default function TaskList ({tasks, checked}) {
    return(
        <div className={styles.TaskList}>
            <ul>
                {tasks.map((task)=>{
                    return <Task key={task.no} name={task.name} done={task.done} checked = {checked}/>
                })}
            </ul>
        </div>
    )
}