import React, { Fragment } from 'react';
import styles from '../../assets/scss/component/Guestbook.scss';

import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Navigation from '../layout/Navigation';
export default function Guestbook() {
    return(
        <Fragment>
            <Header />
            <div className={styles.Guestbook}>
                <h2>Guestbook Page</h2>
            </div>
            <Navigation/>
            <Footer/>
        </Fragment>
    );
}