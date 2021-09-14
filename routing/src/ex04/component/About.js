import React from 'react';
import styles from '../../assets/scss/component/About.scss';

import SiteLayout from '../layout/SiteLayout';
export default function About() {
    return(
        <SiteLayout>
            <div className={styles.About}>
                <h2>About Page</h2>
            </div>
        </SiteLayout>
    );
}