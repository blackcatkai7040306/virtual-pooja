/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'standalone',
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
