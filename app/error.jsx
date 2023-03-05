'use client';

import Link from 'next/link';

const error = () => {
	return (
		<div>
			<h2>Something went wrong!</h2>
			<Link href={'/'}>
				<button>Go back home</button>
			</Link>
		</div>
	);
};

export default error;
