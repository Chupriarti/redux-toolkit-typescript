import React from 'react'
import { postAPI } from '../services/PostService'
import PostItem from './PostItem'

const PostContainer = () => {
    const {data: posts, error, isLoading, refetch} = postAPI.useFetchAllPostsQuery(5, {
        pollingInterval: 1000
    })
    return (
        <div className="post__list">
            <button onClick={() => refetch()}>REFETCH</button>
            {isLoading && <h1>Loading...</h1>}
            {error && <h1>Error occurred during loading</h1>}
            {posts && posts.map(post => 
                <PostItem key={post.id} post={post} />
            )}
        </div>
    )
}

export default PostContainer
