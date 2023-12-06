import Link from 'next/link';
import styles from './Footer.module.css'; 

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.footerSection}>
                    <h4>About Us</h4>
                    <p>Information about company or website.</p>
                </div>
                <div className={styles.footerSection}>
                    <h4>Contact Info</h4>
                    <p>Tg: <Link href="https://t.me/Werds0777" target="_blank">@Werds0777</Link></p>
                    <p>Email: werds0777@gmail.com</p>
                </div>
                <div className={styles.footerSection}>
                    <h4>Follow Us</h4>
                    <Link href="https://t.me/+26q4Tlt42yM0OTYy" target="_blank"><p>Telegram</p></Link>
                    <Link href="" target="_blank">Discord</Link>
                </div>
            </div>
            <div className={styles.footerBottom}>
                <p>© 2023 CS Skin Tracker.</p>
            </div>
        </footer>
    );
};

export default Footer;