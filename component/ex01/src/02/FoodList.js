import React from 'react';
import ListItem from './ListItem';

export default class FoodList extends React.Component{
    

    render() {
        console.log(this.props.foods);

        const foods = [<ListItem/>, <ListItem/>, <ListItem/>];
        this.props.foods.forEach((food,index)=>{
            foods[index] = <ListItem key={food.no} name={food.name} quantity={food.quantity} />
        })
        return(
            <ul>
                {foods}
                ========================================================================
                {this.props.foods.map((food)=>
                    <ListItem key={food.no} name={food.name} quantity={food.quantity} />
                )}
            </ul>
        )
    }
}