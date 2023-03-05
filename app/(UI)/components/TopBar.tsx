import Image from 'next/image';
import Link from 'next/link';

import {
	EllipsisHorizontalIcon,
	MagnifyingGlassIcon,
} from '@heroicons/react/20/solid';
import { Logo } from '../assets';

const Navbar = () => {
	return (
		<nav className='flex flex-row justify-between px-4 py-2 items-center bg-red-500 fixed top-0 left-0 w-full h-12'>
			<div className='w-[20%]'>
				<Link href={'/'}>
					<Image src={Logo} alt='' aria-hidden='true' className='w-6 h-6' />
				</Link>
			</div>
			<div className='flex border bg-gray-300 space-x-1 p-1 rounded-xl w-full'>
				<MagnifyingGlassIcon
					className='w-5 h-5 text-gray-500'
					aria-hidden='true'
				/>
				<input
					type={'text'}
					placeholder='Search Twitter'
					className='outline-none bg-gray-300 text-black'></input>
			</div>
			<div className='w-[20%] flex justify-end'>
				<button aria-label='options'>
					<EllipsisHorizontalIcon className='w-6 h-6' />
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
