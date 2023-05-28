import { useState } from "react";
import PostGrid from '../components/PostGrid';
import Hero from '../components/Hero';
import LoadMoreButton from '../components/LoadMoreButton';
import SectionHeading from '../components/SectionHeading';
import type { NextPage, GetStaticProps } from 'next'
import { IPost } from "../interfaces/post";
import { getAllPosts } from "../utils/mdxUtils";
import Head from 'next/head';
import Config from "../app.config"

// props type
type Props = {
  posts: [IPost]
}

// component render function
const Home: NextPage<Props> = ({ posts }: Props) => {

  const totalPosts = posts.length;
  const postsPerPage = Config.postsPerPage; // Set how many posts should load on button click
  const defaultPostsCount = postsPerPage; // Set how many posts load by default

  const [morePosts, setMorePosts] = useState(posts.slice(0, defaultPostsCount));

  const loadMorePosts = (event: any) => {
    let postsToShow = morePosts.length + postsPerPage;
    setMorePosts(posts.slice(0, postsToShow))
  
    if (totalPosts <= postsToShow) {
      event.target?.classList.add("hidden");
    }
  }

  return (
    <>
      <Head>
          <title>{Config.title}</title>
          <meta property="og:title" content={Config.title} key="ogtitle" />
      </Head>
      <Hero 
        title="A NextJS blog boilerplate"
        text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede." 
        headingLevel="h1"
        image="/assets/600x400.svg"
        imageAlt="Placeholder image" />

      <SectionHeading 
        title="Articles"
        text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede." 
        headingLevel="h2" />

      <PostGrid posts={morePosts} />

      <LoadMoreButton postsVisible={morePosts.length} totalPosts={totalPosts} loadMorePosts={loadMorePosts} />

    </>
  )
}

export default Home

// get posts from serverside at build time
export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts([
    'title',
    'slug',
    'date',
    'description',
    'thumbnail'
  ]);

  // retunr the posts props
  return { props: { posts } }
}