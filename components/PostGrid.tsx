import PostCard from './PostCard';
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
                        <PostCard post={post} loading={false} />
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