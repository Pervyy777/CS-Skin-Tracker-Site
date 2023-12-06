import React from 'react';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

const Contact = () => {
    return (
        <div className={styles.container}>
            <Layout>
                    <h1 className={styles.text}>Contact Us</h1>
                    <p className={styles.text}>This is the contact page.</p>
            </Layout>
        </div>
    );
};

export default Contact;