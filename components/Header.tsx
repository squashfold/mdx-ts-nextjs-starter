// Import the link props
import Link from 'next/link';

// add the React Header Element
const Header: React.FC = () => {

    return (
        // header value
        <header className="container">

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
        </header>
    )
    
}

// export Header module
export default Header;