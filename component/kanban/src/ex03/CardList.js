import React from 'react';
import Card from './Card';
import styles from '../assets/css/CardList.css';

export default function CardList({cards, checked}) {

    return(
        <div className={styles.CardList}>
            <h1>{cards[0].status}</h1>
            {cards.map((card)=>{
                return <Card key={card.no} card={card} status={card.status} checked = {checked}/>
            })}
        </div>
    )
}
