import Search from '../../components/Search'
import SectionHeading from '../../components/SectionHeading';

export default function Home() {
  return (
    <section>
      <SectionHeading 
        title="Search Articles"
        text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede." 
        headingLevel="h1" />

      <Search />
    </section>
  )
}