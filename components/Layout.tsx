import Header from './Header';
import Footer from './Footer';

type Props = {
    children: React.ReactNode;
}

const Layout: React.FC<Props> = ({children}: Props) => {
    return (
        <>
            <Header />
            <main id="main">{children}</main>
            <Footer />
        </>
    )
}

export default Layout;