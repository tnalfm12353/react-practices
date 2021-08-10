import React, { useEffect, useState } from 'react';
import styles from './assets/css/KanbanBoard.css'
import CardList from './CardList';

export default function KanbanBoard() {    

    const [cards, setCards] = useState([]);
    const [todoCards, setTodoCards] = useState([]);
    const [doingCards, setDoingCards] = useState([]);
    const [doneCards, setDoneCards] = useState([]);


    useEffect( async ()=>{
        try{
            const response = await fetch("/api/cards", {method:"get", headers:{"Content-Type": "application/json"}});

            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }
            
            const json = await response.json();
            if(json.result !== 'success') {
                throw new Error(`${json.result} ${json.message}`);
            }
            setCards(json.data);
        } catch(error) {
            console.error(error);
        }
    }, []);

    useEffect(() =>{
        setTodoCards(cards.filter(card => card.status=="ToDo"));
        setDoingCards(cards.filter(card => card.status=="Doing"));
        setDoneCards(cards.filter(card => card.status=="Done"));
    },[cards])

    const notifyTask = {
        add: async (cardNo,taskName) =>{
            const url = `api/card/${cardNo}/task`;
            const task = {
                no: null,
                name: taskName,
                done: false
            };
            console.log(cardNo,taskName);

            try{
                const response = await fetch(url, {method:"post", headers:{"Content-Type": "application/json"}, body: JSON.stringify(task)});

                if(!response.ok) {
                    throw new Error(`${response.status} ${response.statusText}`);
                }

                const json = await response.json();
                if(json.result !== 'success') {
                    throw new Error(`${json.result} ${json.message}`);
                }
                console.log(json);
            } catch(error) {
                console.error(error);
            }
        },

        delete: () =>{

        }
    }

    return(
        <div className={styles.kanbanBoard}>
            <CardList cards={todoCards} title={"ToDo"} notifyTask = {notifyTask}/>
            <CardList cards={doingCards} title={"Doing"} notifyTask = {notifyTask}/>
            <CardList cards={doneCards} title={"Done"} notifyTask = {notifyTask}/>
        </div>
    );
}
