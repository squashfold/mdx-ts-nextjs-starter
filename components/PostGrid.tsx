import Thumbnail from '../components/Thumbnail';
import Link from 'next/link'
import type Keyable from '../interfaces/keyable'
import PostGridStyles from '../styles/modules/PostGrid.module.scss';

// PostGrid properties
type Props = {
    posts: object[];
    loading?: boolean;
}

const PostGrid: React.FC<Props> = ({ posts, loading }: Props) => {

    // return the PostGrid
    return (
        <>
            <div className={`${PostGridStyles['post-grid']}`}>
                {!loading && (
                    <div className={`${PostGridStyles['post-grid__items']}`}>
                    {posts.map((post: Keyable) => (
                        <article key={post.slug} className={`${PostGridStyles['post']}`}>
                            <div> 
                                <Thumbnail
                                slug={post.slug}
                                title={post.title}
                                src={post.thumbnail}
                                />
                            </div>
                            <div className={``}>

                                <h3 className={`h4`}>
                                    <Link href={`/posts/${post.slug}`}>
                                    <a>{post.title}</a>
                                    </Link>
                                </h3>

                                <p>{post.description}</p>
                            </div>
                        </article>
                    ))}
                </div>
                )}

                {loading && (
                    <span>Loading...</span>
                )}
                
            </div>
        </>
    )
}

// export PostGrid module
export default PostGrid;