import TrendingElement from './TrendingElement';

const Trends = () => {
	return (
		<div>
			<h2>Trends for you</h2>
			<TrendingElement category='Entertainment' title='Yvonne' tweets={40.4} />
			<TrendingElement category='Entertainment' title='Yvonne' tweets={40.4} />
			<TrendingElement category='Entertainment' title='Yvonne' tweets={40.4} />
			<TrendingElement category='Entertainment' title='Yvonne' tweets={40.4} />
			<TrendingElement category='Entertainment' title='Yvonne' tweets={40.4} />
			<p className='text-blue-700 text-sm'>Show more</p>
		</div>
	);
};

export default Trends;
