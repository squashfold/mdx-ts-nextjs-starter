import Header from './Header';
import Footer from './Footer';

type Props = {
    children: React.ReactNode;
}

const Layout: React.FC<Props> = ({children}: Props) => {
    return (
        <>
        <div className="">
        <Header />
        <main className="">{children}</main>
        <Footer />
        </div>
        </>
    )
}

export default Layout;