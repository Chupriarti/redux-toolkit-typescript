import React, { FC } from 'react'
import { IPost } from '../models/IPost'
import { postAPI } from '../services/PostService'

interface PostItemProps {
    post: IPost;
}

const PostItem: FC<PostItemProps> = ({post}) => {
    return (
        <div className="post">
            {post.id}. {post.title}
        </div>
    )
}

export default PostItem
