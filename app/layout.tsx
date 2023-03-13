import { Suspense } from 'react';
// import { ModalApp, TopBar } from './(UI)/components';
import Loading from './loading';

// import ConnectBar from './(UI)/components/ConnectBar';
// import OptionModal from './(UI)/components/OptionModal';
import './globals.css';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<Suspense fallback={<Loading />}>
				<body className='flex flex-col'>
					{/* <TopBar /> */}
					{children}
					{/* <ModalApp />
					<ConnectBar />
					<OptionModal /> */}
				</body>
			</Suspense>
		</html>
	);
}
