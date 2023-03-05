import React from 'react';
import TrendingElement from './TrendingElement';

const Trends = () => {
	return (
		<div>
			<h2>Trends for you</h2>
			<TrendingElement category='Entertainment' title='Yvonne' tweets={40.4} />
		</div>
	);
};

export default Trends;
