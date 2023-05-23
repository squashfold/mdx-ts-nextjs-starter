import Header from './Header';

type Props = {
    children: React.ReactNode;
}

const Layout: React.FC<Props> = ({children}: Props) => {
    return (
        <>
        <div className="">
        <Header />
        <main className="">{children}</main>
        </div>
        </>
    )
}

export default Layout;