// Import the link props
import { useState } from 'react'
import Link from 'next/link';
import Config from "../app.config"
import HeaderStyles from '../styles/modules/Header.module.scss';
import NavigationStyles from '../styles/modules/Navigation.module.scss';

// add the React Header Element
const Header: React.FC = () => {
    
    const [navOpen, setNavOpen] = useState<boolean>(false)

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

                <nav className={`${NavigationStyles['main-nav']} ${navOpen && NavigationStyles['_active']}`}>
                    <ul className={`${NavigationStyles['main-nav__list']}`}>
                        <li className={`${NavigationStyles['main-nav__item']}`}>
                            <Link href="/about" prefetch={true}>
                                <a onClick={() => setNavOpen(false)} className={`${NavigationStyles['main-nav__link']}`}>About</a>
                            </Link>
                        </li>
                        <li className={`${NavigationStyles['main-nav__item']}`}>
                            <Link href="/search" prefetch={true}>
                                <a onClick={() => setNavOpen(false)} className={`${NavigationStyles['main-nav__link']}`}>Search</a>
                            </Link>
                        </li>
                    </ul>
                </nav>

                <button className={`${NavigationStyles['menu-toggle']} button button--white button--fill button--small`} onClick={() => setNavOpen(!navOpen)}>{!navOpen ? 'Open menu' : 'Close menu'}</button>
            </div>
        </header>
    )
    
}

// export Header module
export default Header;