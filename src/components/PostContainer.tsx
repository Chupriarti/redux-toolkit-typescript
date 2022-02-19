import React from 'react'
import { IPost } from '../models/IPost'
import { postAPI } from '../services/PostService'
import PostItem from './PostItem'

const PostContainer = () => {
    const {data: posts, error, isLoading} = postAPI.useFetchAllPostsQuery(100)
    const [createPost, {}] = postAPI.useCreatePostMutation()
    const [deletePost, {}] = postAPI.useDeletePostMutation()
    
    const handleCreate =  async () => {
        const title = prompt()
        await createPost({title, body: title} as IPost)
    }

    const handleRemove = (post: IPost) => {
        deletePost(post)
    }
    
    return (
        <div className="post__list">
            <button onClick={handleCreate}>Add new post</button>
            {isLoading && <h1>Loading...</h1>}
            {error && <h1>Error occurred during loading</h1>}
            {posts && posts.map(post => 
                <PostItem remove={handleRemove} key={post.id} post={post} />
            )}
        </div>
    )
}

export default PostContainer
