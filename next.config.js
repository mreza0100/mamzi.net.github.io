/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
	compiler: { styledComponents: true },
	reactStrictMode: true,
	trailingSlash: true,
	basePath: "",
	experimental: { images: { unoptimized: true } },
	images: {
		loader: "akamai",
		path: "",
		unoptimized: true,
	},
	pageExtensions: ["page.tsx"],
};

module.exports = nextConfig;
