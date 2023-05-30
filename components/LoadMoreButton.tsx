import Config from "../app.config"

// props type
type Props = {
    totalPosts: number,
    postsVisible: number,
    loadMorePosts: any
}

const PostGrid: React.FC<Props> = ({ totalPosts, postsVisible, loadMorePosts }: Props) => {
    return (
    <>
        <div className="container">
        <div className="align-center load-more">
            {((postsVisible) < totalPosts) && (
            <button className={`button button--primary button--fill`} onClick={(event) => loadMorePosts(event)}>Load more</button>
            )}
        </div>

        <div className="align-center">
            {postsVisible} of {totalPosts} posts
        </div>
        </div>
    </>
  )
}

export default PostGrid;