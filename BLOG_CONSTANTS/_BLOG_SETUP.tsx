import { LogoType, NavbarType } from "../src/shared/enums";
import { IAuthor, iNavSetup, iSEO } from "../src/shared/interfaces";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export const MAMZI: IAuthor = {
	name: "Mamzi Khosravi",
	designation: "Software Developer and Thinker",
	bio: "software Engineer and Thinker, concerning everything",

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
export const WEBSITE_URL: string = "https://www.mamzi.net";

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
		logo: "Mamzi's Blog!",
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
	title: "My Answers to Life, Universe and Everything",
	description: "A blog about life, universe and everything in between.",
	keywords: "Spinoza, answers, Life, Universe, Everything",
	url: WEBSITE_URL,
	author: `${MAMZI.name}`,
	twitterHandle: "",
	ogImage: "/public/images/42.png",
};
