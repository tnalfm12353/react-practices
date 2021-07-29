import React from 'react';
import ListItem from './ListItem';

export default class FoodList extends React.Component{
    

    render() {
        return(
            <ul>
                <ListItem 
                    name="Bread"
                    quantity="10"/>
                <ListItem 
                    name="Egg"
                    quantity="20"/>
                <ListItem 
                    name="Milk"
                    quantity="50"/>
                <ListItem 
                    name="Pizza"
                    quantity="100"/>
            </ul>
        )
    }
}