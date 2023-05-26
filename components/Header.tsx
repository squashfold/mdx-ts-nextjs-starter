// Import the link props
import Link from 'next/link';
import HeaderStyles from '../styles/modules/Header.module.scss';
import NavigationStyles from '../styles/modules/Navigation.module.scss';

// add the React Header Element
const Header: React.FC = () => {

    return (
        // header value
        <header className={`${HeaderStyles.header}`}>
            <div className={`container ${HeaderStyles['header__inner-wrap']}`}>

                <Link href="/">
                    <a className=""><strong>TypeScript MDX Blog Starter</strong></a>
                </Link>

                <nav className={`${NavigationStyles['main-nav']}`}>
                    <ul className={`${NavigationStyles['main-nav__list']}`}>
                        <li className={`${NavigationStyles['main-nav__item']}`}>
                            <Link href="/about">
                                <a className={`${NavigationStyles['main-nav__link']}`}>About</a>
                            </Link>
                        </li>
                        <li className={`${NavigationStyles['main-nav__item']}`}>
                            <Link href="/search">
                                <a className={`${NavigationStyles['main-nav__link']}`}>Search</a>
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