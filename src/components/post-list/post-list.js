import React from 'react';

import './post-list.css'

import PostListItem from '../post-list-item/post-list-item';

const PostList = ({ posts, onDelete, onToggleImportant, onToggleLiked }) => {

    posts = posts.map(p => {
        const { id, ...itemProps } = p;
        return (
            <li key={id} className="list-group-item">
                <PostListItem {...itemProps}
                    onDelete={() => onDelete(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                    onToggleLiked={() => onToggleLiked(id)} />
            </li>
        );
    }
    );

    return (
        <ul className="app-list list-group">
            {posts}
        </ul>
    );
};

export default PostList;