import React, {Component} from 'react';

export default class TitelBar01 extends Component {

    constructor(){
        super(...arguments);
        this.state ={
            no: 10  
        }
        // this.no = 10;
    }

    onClickHeader(e){
        // this.no++;
        // console.log("TitleBar01 Clicked!", this.no);
        this.setState({
            no : this.state.no + 1
        })
        console.log("TitleBar01 Clicked!", this.state.no);
        
    }

    render() {
        return (
            <h1 onClick={ this.onClickHeader.bind(this) }
                style={{cursor:"pointer"}}>
                ex03 - functional Event Handler (Class Component) 
                {
                    // this.no
                    this.state.no
                }
            </h1>
        )
    }
}