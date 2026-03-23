import Link from 'next/link';
import styles from './about.module.css';

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <h1>About us</h1>
            <div className={styles.about__content}>
                <ul>
                    <li>
                        <Link href="/about/contacts">Contacts</Link>
                    </li>
                    <li>
                        <Link href="/about/team">Team</Link>
                    </li>
                </ul>
                {children}
            </div>
        </div>
    );
}
