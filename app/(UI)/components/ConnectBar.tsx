const ConnectBar = () => {
	return (
		<aside className=' bg-white text-blue-500 flex flex-row w-full bottom-0 left-0 fixed px-5 py-4 space-y-4'>
			<div className='flex flex-row w-full justify-between'>
				<button className='border rounded-2xl py-1 px-2 font-bold w-[45%]'>
					Log in
				</button>
				<button className='border rounded-2xl py-1 px-2 font-bold bg-blue-500 text-gray-800 hover:bg-gray-300 grow-1'>
					Use app
				</button>
			</div>
		</aside>
	);
};

export default ConnectBar;
