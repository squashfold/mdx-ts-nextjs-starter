import Thumbnail from '../components/Thumbnail';
import Link from 'next/link'
import type Keyable from '../interfaces/keyable'

// Hero properties
type Props = {
    posts: object[];
}


const PostGrid: React.FC<Props> = ({ posts }: Props) => {

    // return the PostGrid
    return (
        <>
            <div>
                {posts.map((post: Keyable) => (
                    <div key={post.slug}>
                    <div> 
                        <Thumbnail
                        slug={post.slug}
                        title={post.title}
                        src={post.thumbnail}
                        />
                    </div>

                    <h2>
                        <Link href={`/posts/${post.slug}`}>
                        <a>{post.title}</a>
                        </Link>
                    </h2>

                    <p>{post.description}</p>
                    </div>
                ))}
            </div>
        </>
    )
}

// export Thumbnail module
export default PostGrid;