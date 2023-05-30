import Thumbnail from './Thumbnail';
import Tags from './Tags';
import Link from 'next/link'
import type Keyable from '../interfaces/keyable'
import PostGridStyles from '../styles/modules/PostGrid.module.scss';

// PostGrid properties
type Props = {
    post: Keyable;
    loading?: boolean;
    key?: string;
}

const PostCard: React.FC<Props> = ({ post, loading }: Props) => {
    console.log(post);
    // return the PostCard
    return (
        <>
            {(!loading && post) && (
                <article key={post.slug ? post.slug : post.item.slug} className={`${PostGridStyles['post']}`}>
                    <div className={`${PostGridStyles['post__thumbnail']}`}> 
                        <div className={`${PostGridStyles['post__tags']}`}><Tags tags={post.tags} /></div>
                        <Thumbnail
                        slug={post.slug ? post.slug : post.item.slug}
                        title={post.title ? post.title : post.item.title}
                        src={post.thumbnail ? post.thumbnail : post.item.thumbnail}
                        />
                    </div>
                    <div>
                        <h3 className={`h4`}>
                            <Link href={`/posts/${post.slug ? post.slug : post.item.slug}`}>
                            <a>{post.title ? post.title : post.item.title}</a>
                            </Link>
                        </h3>
                        <p>{post.description ? post.description : post.item.description}</p>
                    </div>
                </article>
            )}

            {(loading || !post) && (
                <span>Loading...</span>
            )}
        </>
    )
}

// export PostCard module
export default PostCard;