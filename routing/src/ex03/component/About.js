import React, { Fragment } from 'react';
import styles from '../../assets/scss/component/About.scss';

import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Navigation from '../layout/Navigation';
export default function About() {
    return(
        <Fragment>
            <Header />
            <div className={styles.About}>
                <h2>About Page</h2>
            </div>
            <Navigation/>
            <Footer/>
        </Fragment>
    );
}