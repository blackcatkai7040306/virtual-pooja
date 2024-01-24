/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'pooja.bookseva.com',
				port: '',
				pathname: '/**',
			},
		],
	},
};

export default nextConfig;
