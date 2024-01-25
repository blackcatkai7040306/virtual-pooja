/** @type {import('next').NextConfig} */
const nextConfig = {
	// output: 'export',
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
