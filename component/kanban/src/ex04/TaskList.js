import React from 'react';
import Task from './Task';
import styles from '../assets/css/TaskList.css';
import PropTypes from 'prop-types';
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

TaskList.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
    
}