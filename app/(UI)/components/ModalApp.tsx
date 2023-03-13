const ModalApp = () => {
	return (
		<aside className='bg-blue-500 text-white flex flex-col bottom-0 left-0 fixed px-5 py-4 space-y-4'>
			<div>
				<h3 className='text-xl'>Blue Bird is better on the app</h3>
				<p className='text-sm'>
					Never miss a Tweet. Open this is the Blue Bird app to get the full
					experience.
				</p>
			</div>
			<div className='flex justify-between'>
				<button className='border rounded-2xl py-1 px-2 font-bold hover:bg-blue-400'>
					Not now
				</button>
				<button className='border rounded-2xl py-1 px-2 font-bold bg-white text-gray-800 hover:bg-gray-300'>
					Switch to the app
				</button>
			</div>
		</aside>
	);
};

export default ModalApp;
