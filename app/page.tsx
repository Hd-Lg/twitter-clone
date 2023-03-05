import { Trends } from './(UI)/components';

export const metadata = {
	title: 'Blue Bird Clone',
	description: 'A clone of Twitter',
};

export default function Home() {
	return (
		<main className='mt-14 mx-5'>
			<Trends />
		</main>
	);
}
