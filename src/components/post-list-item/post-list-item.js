import React from 'react';

import './post-list-item.css';

class PostListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            important: props.important,
            like: props.liked
        };
        this.onImportant = this.onImportant.bind(this);
        this.onLike = this.onLike.bind(this);
    }

    onImportant(callBack) {
        this.setState(({ important }) => ({ important: !important }));
        callBack();
    }

    onLike(callBack) {
        this.setState(({ like }) => ({ like: !like }));
        callBack();
    }

    render() {
        const { label, onDelete, onToggleImportant, onToggleLiked } = this.props;
        const { important, like } = this.state;

        let classNames = "app-list-item d-flex justify-content-between";

        if (important) {
            classNames += " important";
        }

        if (like) {
            classNames += " like";
        }

        return (
            <div className={classNames}>
                <span className="app-list-item-label" onClick={() => { this.onLike(onToggleLiked) }}>
                    {label}
                </span>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="submit" className="btn-star btn-sm" onClick={() => this.onImportant(onToggleImportant)}>
                        <i className="fa fa-star"></i>
                    </button>
                    <button type="submit" className="btn-trash btn-sm" onClick={onDelete}>
                        <i className="fa fa-trash-o"></i>
                    </button>
                    <i className="fa fa-heart"></i>
                </div>
            </div>
        );
    }

}

export default PostListItem;