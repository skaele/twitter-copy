import React from 'react';

import './post-status-filter.css';

class PostStatusFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            onlyLiked: props.onlyLiked
        };
        this.onSetAll = this.onSetAll.bind(this);
        this.onSetOnlyLiked = this.onSetOnlyLiked.bind(this);
    }

    onSetAll(callBack) {
        this.setState({ onlyLiked: false });
        callBack();
    }

    onSetOnlyLiked(callBack) {
        this.setState({ onlyLiked: true });
        callBack();
    }

    render() {
        const { onSetAll, onSetOnlyLiked } = this.props,
            { onlyLiked } = this.state;

        let all = 'btn',
            liked = 'btn';

        if (!onlyLiked) {
            all += " btn-info";
            liked += " btn-outline-secondary";
        }
        else {
            all += " btn-outline-secondary";
            liked += " btn-info";
        }

        return (
            <div className="btn-group">
                <button type="button" className={all} onClick={() => this.onSetAll(onSetAll)}>Все</button>
                <button type="button" className={liked} onClick={() => this.onSetOnlyLiked(onSetOnlyLiked)}>Понравилось</button>
            </div>
        );
    }
}

export default PostStatusFilter;