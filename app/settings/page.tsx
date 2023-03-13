import { ChevronRightIcon } from '@heroicons/react/24/solid';

const page = () => {
	return (
		<div className='mt-16'>
			<div className='flex justify-around'>
				<button className='border rounded-2xl py-1 px-2 font-bold w-[45%]'>
					Log in
				</button>
				<button className='border rounded-2xl py-1 px-2 font-bold bg-blue-500 text-gray-800 hover:bg-gray-300 w-[45%]'>
					Use app
				</button>
			</div>
			<div>
				<h3>Privacy</h3>
				<div>
					<div>
						Personalization and data
						<ChevronRightIcon className='w-4' />
					</div>
					<div>
						Your Twitter data
						<ChevronRightIcon className='w-4' />
					</div>
					<div>
						<>
							<p>Cookie preferences</p>
							<p>Manage your cookie experience on Twitter.</p>
						</>
						<ChevronRightIcon className='w-4' />
					</div>
				</div>
				<p>
					These settings apply to this browser or device while you're logged
					out. They don't have any effect when you're logged in.
				</p>
			</div>
			<div>
				<h3>General</h3>
				<div>
					Additional resources
					<ChevronRightIcon className='w-4' />
				</div>
			</div>
		</div>
	);
};

export default page;
