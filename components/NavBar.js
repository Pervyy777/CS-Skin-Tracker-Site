import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './NavBar.module.css';

const NavBar = () => {
    const [isAboutHovered, setIsAboutHovered] = useState(false);

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
                <li 
                    className={styles.navItem} 
                    onMouseEnter={() => setIsAboutHovered(true)}
                    onMouseLeave={() => setIsAboutHovered(false)}
                >
                    <Link href="/about" passHref>About</Link>
                    {isAboutHovered && (
                        <div className={styles.dropdownContent}>
                            <Link href="/about/team">Our Team</Link>
                            <Link href="/about/mission">Our Mission</Link>
                            {/* Другие ссылки */}
                        </div>
                    )}
                </li>
                <li className={styles.navItem}>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;