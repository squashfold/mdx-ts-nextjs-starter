// Import the link props
import Link from 'next/link';
import FooterStyles from '../styles/modules/Footer.module.scss';
import NavigationStyles from '../styles/modules/Navigation.module.scss';

// add the React Footer Element
const Footer: React.FC = () => {

    return (
        // Footer value
        <footer className={`${FooterStyles.footer}`}>
            <div className={`container ${FooterStyles['Footer__inner-wrap']}`}>
                <span><strong>TypeScript MDX Blog Starter</strong> by SquashFold &nbsp;
                    <Link href="https://github.com/chprince/mdx-ts-nextjs-starter">
                        <a className="text-link text-link--bright">View on GitHub</a>
                    </Link>
                </span>
            </div>
        </footer>
    )
    
}

// export Footer module
export default Footer;