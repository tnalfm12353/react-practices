import React from 'react';
import TaskList from './TaskList';

export default function Card({card, checked}) {
    return(
        <div className="Card">
            <div className="Card__Title">{card.title}</div>
            <div className="Card__Details">{card.description}</div>

            <TaskList tasks = {card.tasks} checked = {checked}/>
        </div>
    );
}

