import { LogoType, NavbarType } from "../src/shared/enums";
import { IAuthor, iNavSetup, iSEO } from "../src/shared/interfaces";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export const MAMZI: IAuthor = {
	name: "Mamzi Khosravi",
	designation: "Software Engineer and Thinker",
	bio: "A software engineer and who thinks with a common sense",
	profilePic: "",
	social: [
		{
			icon: <AiFillGithub />,
			link: "https://github.com/mreza0100",
		},
		{
			icon: <AiFillLinkedin />,
			link: "https://www.linkedin.com/in/mamzi-khosravivala/",
		},
	],
};

// This can your company name / your name etc for SEO purposes
export const WEBSITE_NAME: string = "My Answers to Life, Universe and Everything";
export const WEBSITE_URL: string = "https://my-answers-to-life-universe-and-everything.me";

/**
 * This is the main navigation setup.
 * This includes the main navbar and the side drawer.
 */
export const PRIMARY_NAV: iNavSetup = {
	type: NavbarType.DEFAULT,
	// max logo image height 40px
	// you can add logo light version if using image
	// logo: {
	//     type: LogoType.IMAGE,
	//     logo: '/images/logo.png',
	//     logoLight: '/images/logo-light.png'
	// },
	logo: {
		type: LogoType.TEXT,
		logo: "Mamzi's Blog! The Ultimate Answer to Life, the Universe and Everything!",
	},
	// navLinks are the main navbar links that apper on top of every page
	navLinks: [
		{
			label: "Home",
			path: "/",
		},
		{
			// for categories don't add path and add type: dropdown and pass path empty
			label: "Blog",
			type: "dropdown",
			path: "",
		},
		{
			label: "About Me",
			path: "/about-me",
		},
		{
			label: "Github Repo",
			path: "https://github.com/mreza0100/my-answeres-to-life-universe-everything.github.io",
			newTab: true,
		},
	],
	// sideNavLinks are the links which appear when you open the side menu after clicking the burger menu icon.
	sideNavLinks: [
		{
			label: "Home",
			path: "/",
		},
		{
			// for categories dont add path and add type: dropdown
			label: "Blog",
			type: "dropdown",
			path: "",
		},
		{
			label: "About Me",
			path: "/about-me",
		},
		{
			label: "Github Repo",
			path: "https://github.com/mreza0100/my-answeres-to-life-universe-everything.github.io",
			newTab: true,
		},
	],
	socials: [
		{
			link: "https://github.com/mreza0100",
			icon: <AiFillGithub />,
		},
	],
};

export const DEFAULT_SEO: iSEO = {
	title: "Nextjs simple blog template",
	description: "A simple blog template using NextJS and Typescript.",
	keywords: "Blog, next js, template, next js blog, blog setup, typescript, nextjs typescript, react js blog template, responsive blog template",
	url: WEBSITE_URL,
	author: `${MAMZI.name}`,
	twitterHandle: "@WebExpe",
	ogImage: "/public/images/og-image.jpg",
};
