import { EllipsisHorizontalIcon } from '@heroicons/react/20/solid';

type Props = {
	category: string;
	title: string;
	tweets: number;
};

const TrendingElement = ({ category, title, tweets }: Props) => {
	return (
		<div className='flex flex-row justify-between text-gray-500 text-sm'>
			<div>
				<div>
					<span>{category}</span> · <span> Trending</span>
				</div>
				<p className='text-xl font-bold text-black'>{title}</p>
				<div>
					<span>{tweets}K Tweets</span>
				</div>
			</div>
			<div className='flex items-center'>
				<button className='hover:bg-blue-300 p-1 rounded-xl'>
					<EllipsisHorizontalIcon className='w-4 h-4' />
				</button>
			</div>
		</div>
	);
};

export default TrendingElement;
