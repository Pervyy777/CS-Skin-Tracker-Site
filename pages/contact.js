import React from 'react';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
const Contact = () => {
    return (
        <Layout>
            <div className={styles.text}>
                <div>
                    <h1>Contact Us</h1>
                    <p>Tg: <Link href="https://t.me/Werds0777" target="_blank">@Werds0777</Link></p>
                    <p>Email: werds0777@gmail.com</p>
                </div>
                <div>
                    <h1>Follow Us</h1>
                    <Link href="https://t.me/+26q4Tlt42yM0OTYy" target="_blank"><p>Telegram</p></Link>
                    <Link href="" target="_blank">Discord</Link>
                </div>
            </div>
        </Layout>
    );
};

export default Contact;