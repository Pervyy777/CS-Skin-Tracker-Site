import React from 'react';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

const About = () => {
    return (
        <div className={styles.container}>
        <Layout>
            <h1 className={styles.text}>About Us</h1>
            <p className={styles.text}>This is the about page.</p>
        </Layout>
        </div>
    );
};

export default About;