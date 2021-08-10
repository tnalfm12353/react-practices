import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import styles from './assets/css/CardList.css';
export default function CardList({cards, title, notifyTask}) {

    return(
        <div className={styles.CardList}>
            <h1>{title}</h1>
            {cards.map((card)=>{
                return <Card key={card.no} card={card} status={card.status} notifyTask = {notifyTask}/>
            })}
        </div>
    )
}

CardList.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.object).isRequired
}