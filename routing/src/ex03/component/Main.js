import React, { Fragment } from 'react';
import styles from '../../assets/scss/component/Main.scss';

import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Navigation from '../layout/Navigation';
export default function Main() {
    return(
        <Fragment>
            <Header />
            <div className={styles.Main}>
                <h2>Main Page</h2>
            </div>
            <Navigation/>
            <Footer/>
        </Fragment>
    );
}