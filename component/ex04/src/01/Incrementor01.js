import React from 'react'

export default class extends React.Component {

    constructor() {
        super(...arguments);

        this.state = {
            value: this.props.begin,
        }
    }

    onClickBtn() {
        this.setState({
            value: this.state.value + this.props.step
        });
    }

    render() {
        return(
            <div>
            <button onClick={ this.onClickBtn.bind(this) }>
                <strong>+</strong>
            </button>
            { ' ' }
            <span>{ this.state.value }</span>
            </div>
        );
    }
}