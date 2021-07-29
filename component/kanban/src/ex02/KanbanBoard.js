import React, { useEffect, useState } from 'react';
import cards from '../assets/json/data.json';
import styles from '../assets/css/KanbanBoard.css'
import CardList from './CardList';

export default function KanbanBoard() {    

    const [todoCards, setTodoCards] = useState(cards.filter(card => card.status=="ToDo"));
    const [doingCards, setDoingCards] = useState(cards.filter(card => card.status=="Doing"));
    const [doneCards, setDoneCards] = useState(cards.filter(card => card.status=="Done"));


    useEffect(()=>{
        console.log(todoCards);
        console.log(doingCards);
        console.log(doneCards);
    })

    function checked(e) {
        console.log(e);
    }

    return(
        <div className={styles.kanbanBoard}>
            <CardList cards={todoCards} checked = {checked}/>
            <CardList cards={doingCards} checked = {checked}/>
            <CardList cards={doneCards} checked = {checked}/>
        </div>
    );
}
