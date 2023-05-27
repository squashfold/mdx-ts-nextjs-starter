import Search from '../../components/Search'
import SectionHeading from '../../components/SectionHeading';
import Head from 'next/head';
import Config from "../../app.config"

export default function Home() {
  return (
    <>
      <Head>
        <title>{`Search | ${Config.title}`}</title>
        <meta property="og:title" content={Config.title} key="ogtitle" />
      </Head>
      <SectionHeading 
        title="Search Articles"
        text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede." 
        headingLevel="h1" />

      <Search />
    </>
  )
}