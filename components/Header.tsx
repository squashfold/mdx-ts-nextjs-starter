// Import the link props
import Link from 'next/link';
import styles from '../styles/modules/Header.module.scss';

// add the React Header Element
const Header: React.FC = () => {

    return (
        // header value
        <header className={'container'}>
            <div className={styles.header}>

                <Link href="/">
                    <a className="">TypeScript MDX Blog Starter</a>
                </Link>

                <nav>
                    <ul>
                        <li>
                        <Link href="/about">
                            <a className="">About</a>
                        </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
    
}

// export Header module
export default Header;