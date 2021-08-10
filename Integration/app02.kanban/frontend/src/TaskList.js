import React from 'react';
import Task from './Task';
import styles from './assets/css/TaskList.css';
import PropTypes from 'prop-types';
export default function TaskList ({cardNo, tasks, notifyTask}) {
    return(
        <div className={styles.TaskList}>
            <ul>
                {tasks.map((task)=>{
                    return <Task key={task.no} name={task.name} done={task.done}/>
                })}
            </ul>
           <input type="text" className={styles.TaskList_input_add_task} placeholder={"테스크 추가"} 
                onKeyPress={(e) =>{
                    if(e.key === 'Enter') {
                        notifyTask.add( cardNo, e.target.value);
                        e.target.value = '';
                    }
                }} 
            />
        </div>
    )
}

TaskList.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
}