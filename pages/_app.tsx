
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import {MdxComponentsProvider} from '../context/mdxContext';
import 'normalize.css/normalize.css';
import '../styles/global.scss';
import '../styles/layouts/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return <MdxComponentsProvider>  <Layout>

  <Component {...pageProps} />

  </Layout>

  </MdxComponentsProvider>
}

export default MyApp
