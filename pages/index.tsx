import { useState } from "react";
import PostGrid from '../components/PostGrid';
import Hero from '../components/Hero';
import SectionHeading from '../components/SectionHeading';
import type { NextPage, GetStaticProps } from 'next'
import { IPost } from "../interfaces/post";
import { getAllPosts } from "../utils/mdxUtils";

// props type
type Props = {
  posts: [IPost]
}

// component render function
const Home: NextPage<Props> = ({ posts }: Props) => {

  const totalPosts = posts.length;
  const postsPerPage = 6; // Set how many posts should load on button click
  const defaultPostsCount = postsPerPage; // Set how many posts load by default

  const [morePosts, setMorePosts] = useState(posts.slice(0, defaultPostsCount));

  const handleClick = (event: any, toShow: number) => {
    let postsToShow = morePosts.length + toShow;
    setMorePosts(posts.slice(0, postsToShow))
  
    if (totalPosts <= postsToShow) {
      event.target?.classList.add("hidden");
    }
  }

  return (
    <div>
      <Hero 
        title="Welcome! 👋"
        text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede." 
        headingLevel="h1"
        image="/assets/600x400.svg"
        imageAlt="Placeholder image" />

      <SectionHeading 
        title="Articles"
        text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede." 
        headingLevel="h2" />

      <PostGrid posts={morePosts} />

      <div className="container">
        <div className="align-center load-more">
          {((morePosts.length) <= totalPosts) && (
            <button className={`button button--primary button--fill`} onClick={(event) => handleClick(event, postsPerPage)}>Load more</button>
          )}
        </div>

        <div className="align-center">
          {morePosts.length} of {totalPosts} posts
        </div>
      </div>

    </div>
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