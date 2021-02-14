import React from 'react';

import './search-panel.css';

const SearchPanel = ({ onSearch }) => {
    return (
        <input
            className="form-control search-panel"
            type="text"
            placeholder="Поиск по записям"
            onChange={(e) => onSearch(e.target.value)}
        />
    );
};

export default SearchPanel;