/** @type {import('next').NextConfig} */
const nextConfig = {
	compiler: { styledComponents: true },
	reactStrictMode: true,
	trailingSlash: true,
	// productionBrowserSourceMaps: true,
	images: {
		loader: "akamai",
		path: "",
	},
};

module.exports = nextConfig;
