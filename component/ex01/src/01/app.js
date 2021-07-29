import React from 'react';
import FoodList from './FoodList';

export default class extends React.Component {

    constructor() {
        super(...arguments);
        this.foods = [
            {name: "Bread", quantity: 10},
            {name: "Egg", quantity: 20},
            {name: "Milk", quantity: 50}
        ]
    }

    render() {
        return(
            <div id="App">
                <FoodList/>
            </div>
        )
    }
}