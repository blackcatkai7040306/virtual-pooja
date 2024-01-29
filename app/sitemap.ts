export default async function sitemap() {
	let routes = [''].map((route) => ({
		url: `https://puja.bookseva.com${route}`,
		lastModified: new Date().toISOString().split('T')[0],
	}));

	return [...routes];
}
