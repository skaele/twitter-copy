import React from 'react';

import './app-header.css';

const AppHeader = ({ likedCount, allCount }) => {
	return (
		<div className="app-header d-flex">
			<h1>Nikita Karpenko</h1>
			<h2>Всего {allCount} записей, из них понравилось {likedCount}</h2>
		</div>
	);
}

export default AppHeader;