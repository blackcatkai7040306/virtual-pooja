import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageLayout from '@/components/PageLayout';
import Provider from '@/components/Provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Book Seva Virtual Pooja',
	description: 'A Book Seva Initiative to conduct virtual pooja',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${inter.className} min-h-screen h-full flex flex-col overflow-hidden`}
			>
				<Provider>
					<Navbar />
					<PageLayout>{children}</PageLayout>
					<Footer />
				</Provider>
			</body>
		</html>
	);
}
