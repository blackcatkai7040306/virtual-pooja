import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageLayout from '@/components/PageLayout';
import Provider from '@/components/Provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	metadataBase: new URL('https://puja.bookseva.com'),
	title: 'Bookseva Virtual Pooja',
	description: 'A Book Seva Initiative to conduct virtual pooja.',
	authors: [{ name: 'InIT solutions', url: 'https://initsolutions.in' }],
	assets: [
		'https://puja.bookseva.com/images',
		'https://puja.bookseva.com/audio',
	],
	openGraph: {
		images: '/image/ram.jpeg',
	},
	keywords: [
		'Bookseva',
		'virtual pooja',
		'ram pooja',
		'rampooja.bookseva.com',
		'ram mandir',
		'bookseva',
		'sopanam',
		'init solutions',
	],
	robots: {
		index: true,
		follow: true,
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.className}`}>
				<Provider>
					<main
						className={`min-h-screen h-full flex flex-col overflow-hidden`}
					>
						<Navbar />
						<PageLayout>{children}</PageLayout>
						<Footer />
					</main>
				</Provider>
			</body>
		</html>
	);
}
