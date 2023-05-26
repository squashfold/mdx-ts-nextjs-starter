import Thumbnail from '../components/Thumbnail';
import Link from 'next/link'
import type Keyable from '../interfaces/keyable'
import PostGridStyles from '../styles/modules/PostGrid.module.scss';

// PostGrid properties
type Props = {
    posts: object[];
    loading?: boolean;
    key?: string;
}

const PostGrid: React.FC<Props> = ({ posts, loading }: Props) => {

    // return the PostGrid
    return (
        <>
            <div className={`${PostGridStyles['post-grid']}`}>
                {(!loading && posts.length) && (
                    <div className={`${PostGridStyles['post-grid__items']}`}>
                    {posts.map((post: Keyable) => (
                        <article key={post.slug ? post.slug : post.item.slug} className={`${PostGridStyles['post']}`}>
                            <div> 
                                <Thumbnail
                                slug={post.slug ? post.slug : post.item.slug}
                                title={post.title ? post.title : post.item.title}
                                src={post.thumbnail ? post.thumbnail : post.item.thumbnail}
                                />
                            </div>
                            <div className={``}>

                                <h3 className={`h4`}>
                                    <Link href={`/posts/${post.slug ? post.slug : post.item.slug}`}>
                                    <a>{post.title ? post.title : post.item.title}</a>
                                    </Link>
                                </h3>

                                <p>{post.description ? post.description : post.item.description}</p>
                            </div>
                        </article>
                    ))}
                </div>
                )}

                {(loading || !posts.length) && (
                    <span>Loading...</span>
                )}
                
            </div>
        </>
    )
}

// export PostGrid module
export default PostGrid;