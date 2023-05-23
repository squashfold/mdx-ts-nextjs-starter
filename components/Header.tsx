// Import the link props
import Link from 'next/link';

// add the React Header Element
const Header: React.FC = () => {

    return (
        // header value
        <header className="">

        <Link href="/">
            <a className="">My Simple Blog App</a>
        </Link>
        </header>
    )
    
}

// export Header module
export default Header;