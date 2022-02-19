import React, { FC } from 'react'
import { IPost } from '../models/IPost'
import { postAPI } from '../services/PostService'

interface PostItemProps {
    post: IPost;
    remove: (post: IPost) => void;
}

const PostItem: FC<PostItemProps> = ({post, remove}) => {

    const handleRemove = (event: React.MouseEvent) => {
        event.stopPropagation()
        remove(post)
    }

    return (
        <div className="post">
            {post.id}. {post.title}
            <button onClick={handleRemove}>Delete</button>
        </div>
    )
}

export default PostItem
