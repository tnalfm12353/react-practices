import React from 'react';
import ListItem from './ListItem';

export default function FoodList(props) {

    return(
        <ul>
            {props.foods.map((food)=>
                <ListItem key={food.no} name={food.name} quantity={food.quantity} />
            )}
        </ul>
    )
}