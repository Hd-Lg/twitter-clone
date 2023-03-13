import { CogIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';

const OptionModal = () => {
	return (
		<aside className=' bg-white text-blue-500 flex flex-col w-full bottom-0 left-0 fixed py-4 px-2 rounded-tl-3xl rounded-tr-3xl'>
			<Link
				href={'/settings'}
				className='flex text-sm items-center space-x-2 hover:cursor-pointer mb-4'>
				<CogIcon className='h-5 w-5' />
				<p>Go to settings</p>
			</Link>
			<div className='flex flex-row w-full justify-between'>
				<button className='border rounded-2xl py-1 px-2 font-bold border-blue-500 w-full text-gray-800 hover:bg-gray-300 grow-1'>
					Cancel
				</button>
			</div>
		</aside>
	);
};

export default OptionModal;
