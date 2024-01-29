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
	openGraph: {
		title: 'Bookseva Virtual Pooja',
		description: 'A Book Seva Initiative to conduct virtual pooja.',
		url: 'https://puja.bookseva.com',
		siteName: 'Bookseva',
		type: 'website',
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
		googleBot: {
			'max-image-preview': 'large',
			'max-snippet': -1,
			'max-video-preview': -1,
			follow: true,
			index: true,
		},
	},
	twitter: {
		title: 'Bookseva Virtual Pooja',
		card: 'summary_large_image',
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
