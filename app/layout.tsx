import { Suspense } from 'react';
import Loading from './loading';
import { ModalApp, TopBar } from './(UI)/components';

import './globals.css';
import ConnectBar from './(UI)/components/ConnectBar';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<Suspense fallback={<Loading />}>
				<body className='flex flex-col'>
					<TopBar />
					{children}
					<ModalApp />
					<ConnectBar />
				</body>
			</Suspense>
		</html>
	);
}
