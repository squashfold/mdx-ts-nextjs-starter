import { useState } from "react";
import PostGrid from '../components/PostGrid';
import Hero from '../components/Hero';
import type { NextPage, GetStaticProps } from 'next'
import { IPost } from "../types/post";
import { getAllPosts } from "../utils/mdxUtils";

// props type
type Props = {
  posts: [IPost]
}

// component render function
const Home: NextPage<Props> = ({ posts }: Props) => {

  const totalPosts = posts.length;
  const postsPerPage = 2;

  const [morePosts, setMorePosts] = useState(posts.slice(0, postsPerPage));

  const handleClick = (event: any, toShow: number) => {
    let postsToShow = morePosts.length + toShow;
    setMorePosts(posts.slice(0, postsToShow))
  
    if (totalPosts <= postsToShow) {
      event.target?.classList.add("hidden");
    }
  }

  return (
    <div className="container">
      <Hero title="Welcome! 👋" text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede." headingLevel="h1" />

      <h2 className="">Articles</h2>

      <PostGrid posts={morePosts} />

      <div>
        {morePosts.length} of {totalPosts} posts

        {((morePosts.length) <= totalPosts) && (
          <button onClick={(event) => handleClick(event, postsPerPage)} className="button">Load more</button>
        )}
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