import Link from 'next/link';
import Image from 'next/image';
import styles from './NavBar.module.css';

const NavBar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Link href="/">
                <div className={styles.logoLink}>
                    <Image 
                        src="/logo.png" // Path to your logo in the public folder
                        alt="Logo"
                        width={50}  // Adjust the size as needed
                        height={50} 
                    />
                    CS Skin Tracker
                </div>
                </Link>
            </div>
            <ul className={styles.navItems}>
                <li className={styles.navItem}>
                    <Link href="/">Home</Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="/about">About</Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;