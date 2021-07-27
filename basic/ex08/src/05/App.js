import React, { Fragment } from 'react';
import Content from './Content';
import Header from './Header';

export default class extends React.Component{

    constructor() {
        super();
    }

    render() {
        return(
            <Fragment>
                <Header/>
                <Content/>
            </Fragment>
        );
    }
}