import Head from 'next/head'
import Layout from '../../components/Layout'
import Search from '../../components/Search'
// import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout>
      <section >
        <h2 >Search</h2>
        <Search />
      </section>
    </Layout>
  )
}