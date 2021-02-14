import React from 'react';

import './app.css';

import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import PostStatusFilter from '../post-status-filter/post-status-filter';
import PostList from '../post-list/post-list';
import PostAddForm from '../post-add-form/post-add-form';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.currentId = 5;
        this.state = {
            data: [
                { label: "test0", id: 0, important: false, liked: false },
                { label: "test1", id: 1, important: true, liked: false },
                { label: "test2", id: 2, important: false, liked: true },
                { label: "test3", id: 3, important: true, liked: false },
                { label: "test4", id: 4, important: false, liked: true }
            ],
            onlyLiked: false,
            searchText: ""
        }
    }

    onDelete = (id) => {
        this.setState(({ data }) => {
            return { data: data.filter(d => d.id !== id) };
        });
    };

    addItem = (text) => {
        const newItem = {
            id: this.currentId++,
            label: text,
            important: false
        };

        this.setState(({ data }) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            };
        });
    }

    onToggleImportant = (id) => {
        this.setState(({ data }) => {
            const mutableItemIndex = data.findIndex(d => d.id === id);
            const { important, ...otherProps } = data[mutableItemIndex];
            const newObj = {
                ...otherProps,
                important: !important,
            };
            const newArray = [...data.slice(0, mutableItemIndex),
                newObj,
            ...data.slice(mutableItemIndex + 1)];
            return { data: newArray };
        });
    }

    onToggleLiked = (id) => {
        this.setState(({ data }) => {
            const likedItemIndex = data.findIndex(d => d.id === id);
            const { liked, ...otherProps } = data[likedItemIndex];
            const newObj = {
                ...otherProps,
                liked: !liked
            };

            const newArray = [...data.slice(0, likedItemIndex),
                newObj,
            ...data.slice(likedItemIndex + 1)];
            return { data: newArray };
        });
    }

    getVisiblePosts = () => {
        let visiblePosts = this.state.onlyLiked ? this.state.data.filter(post => post.liked) :
            this.state.data;
        if (this.state.searchText) {
            visiblePosts = visiblePosts.filter(post => post.label
                .toLowerCase()
                .indexOf(this.state.searchText.toLowerCase()) !== -1);
        }
        return visiblePosts;
    }

    onSetAll = () => {
        this.setState({ onlyLiked: false });
    }

    onSetOnlyLiked = () => {
        this.setState({ onlyLiked: true });
    }

    onSearch = (searchText) => {
        this.setState({ searchText });
    }

    render() {
        const visiblePosts = this.getVisiblePosts();
        return (
            <div className="app">
                <AppHeader allCount={this.state.data.length}
                    likedCount={this.state.data.filter(d => d.liked).length} />
                <div className="search-panel d-flex">
                    <SearchPanel onSearch={this.onSearch} onlyLiked={this.state.onlyLiked} />
                    <PostStatusFilter onSetAll={this.onSetAll}
                        onSetOnlyLiked={this.onSetOnlyLiked} />
                </div>
                <PostList posts={visiblePosts}
                    onDelete={this.onDelete}
                    onToggleLiked={this.onToggleLiked}
                    onToggleImportant={this.onToggleImportant}
                />
                <PostAddForm onAdd={this.addItem} />
            </div>
        );
    }
};

export default App;