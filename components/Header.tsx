// Import the link props
import Link from 'next/link';
import Config from "../app.config"
import HeaderStyles from '../styles/modules/Header.module.scss';
import NavigationStyles from '../styles/modules/Navigation.module.scss';

// add the React Header Element
const Header: React.FC = () => {

    return (
        // header value
        <header className={`${HeaderStyles.header}`}>
            <div className={`container ${HeaderStyles['header__inner-wrap']}`}>

                <Link href="#main">
                    <a className={`${NavigationStyles['main-nav__skip-link']}`}>Skip to content</a>
                </Link>

                <Link href="/">
                    <a className=""><strong>{Config.title}</strong></a>
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