import { useState } from "react";
import Thumbnail from '../components/Thumbnail';
import type { NextPage, GetStaticProps } from 'next'
import { IPost } from "../types/post";
import Link from 'next/link'
import { getAllPosts } from "../utils/mdxUtils";

// props type
type Props = {
  posts: [IPost]
}

// component render function
const Home: NextPage<Props> = ({ posts }: Props) => {
  // const heroPost = posts[0]
  const totalPosts = posts.length;

  const [morePosts, setMorePosts] = useState(posts.slice(0, 1));

  const handleClick = (event, toShow: number) => {
    let postsToShow = morePosts.length + toShow;
    setMorePosts(posts.slice(0, postsToShow))
  
    if (totalPosts >= morePosts.length) {
      event.target.classList.add("hidden");
    }
  }

  return (
    <div className="container">
      <h1 className="">Articles</h1>

      

      <div className="">
        {morePosts.map((post) => (
          <div key={post.slug}>
            <div className=""> 
              <Thumbnail
                slug={post.slug}
                title={post.title}
                src={post.thumbnail}
              />
            </div>

            <h2 className="">
              <Link href={`/posts/${post.slug}`}>
                <a>{post.title}</a>
              </Link>
            </h2>

            <p>{post.description}</p>
          </div>
        ))}
      </div>



          <div>
            {morePosts.length} of {totalPosts} posts

            {((morePosts.length) <= totalPosts) && (
              <button onClick={(event) => handleClick(event, 3)} className="button">Load more</button>
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