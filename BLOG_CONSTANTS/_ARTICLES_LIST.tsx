import { iArticle } from "../src/shared/interfaces";

// Import author profiles, just type the name you have set in _BLOG_SETUP inside the curly brackets
import { MAMZI } from "./_BLOG_SETUP";

export enum ArticlesKeys {
	Home = "Home",
	Universe = "Universe",
	Life = "Life",
	Causality = "Causality",
	God = "God",
	BuildingBlocks = "Building_Blocks",
	Miracles = "Miracles",
	Perfection = "Perfection",
	Meaning = "Meaning",
	Body = "Body",
	Mind = "Mind",
	Emotions = "Emotions",
	SpinozaEthics = "Spinoza_Ethics",
	Stack = "Stack",
}

// clear this article list and add your own
const UNIVERSE: iArticle[] = [
	{
		key: ArticlesKeys.Home,
		url: "/",
		path: "/pages/.tsx",
		featureArticle: true,
		isPublished: true,
		preview: {
			author: MAMZI,
			date: "May 22 2024",
			articleTitle: "Main Page",
			tags: "life, universe, everything, answer, question, blog, 42",
			thumbnail: "/public/images/42.png",
			shortIntro:
				"The main page of the ultimate answer to life, the universe, and everything.",
			category: "Universe",
		},
		seo: {
			title: "Mamzi's Blog",
			description:
				"The main page of the ultimate answer to life, the universe, and everything.",
			keywords: "life, universe, everything, answer, question, blog, 42",
			ogImage: "/public/images/42.png",
			author: MAMZI.name,
		},
	},
	{
		key: ArticlesKeys.Universe,
		url: "/universe/",
		path: "/pages/universe.tsx",
		featureArticle: true,
		isPublished: true,
		preview: {
			author: MAMZI,
			date: "May 22 2024",
			articleTitle: "Universe",
			tags: "universe, cause and effect, space, time, matter, energy",
			thumbnail: "/public/images/beginning-adams.jpg",
			shortIntro: "Cause and effect in the universe",
			category: "Universe",
		},
		seo: {
			title: "How to setup this blog template",
			description: "cause and effect in the universe",
			keywords: "demo, blog setup",
			ogImage: "/public/imp_assets/tutorials/how-to-setup-blog.svg",
			author: MAMZI.name,
		},
	},
	{
		key: ArticlesKeys.Causality,
		url: "/universe/causality",
		path: "/pages/universe/causality.tsx",
		featureArticle: true,
		isPublished: true,
		preview: {
			author: MAMZI,
			date: "May 15 2024",
			articleTitle: "Causality",
			tags: "causality, cause and effect, time, randomness, determinism",
			thumbnail: "/public/images/dominos.jpeg",
			shortIntro: "Cause and effect, how things happen in the universe",
			category: "Universe",
		},
		seo: {
			title: "Causality",
			description: "Cause and effect, how things happen in the universe",
			keywords: "causality, cause and effect, time, randomness, determinism, Spinoza, Ethics",
			ogImage: "/public/images/dominos.jpeg",
			author: MAMZI.name,
		},
	},
	{
		key: ArticlesKeys.God,
		url: "/universe/god",
		path: "/pages/universe/god.tsx",
		featureArticle: true,
		isPublished: true,
		preview: {
			author: MAMZI,
			date: "May 16 2024",
			articleTitle: "God or Nature or Universe",
			tags: "Spinoza, God, Nature, Universe, Ethics",
			thumbnail: "/public/images/god.webp",
			shortIntro: "Spinoza's view on God, Nature, and Universe",
			category: "Universe",
		},
		seo: {
			title: "God or Nature or Universe",
			description: "Spinoza's view on God, Nature, and Universe",
			keywords: "Spinoza, God, Nature, Universe, Ethics",
			ogImage: "/public/images/god.webp",
			author: MAMZI.name,
		},
	},
	{
		key: ArticlesKeys.BuildingBlocks,
		url: "/universe/building-blocks",
		path: "/pages/universe/building-blocks.tsx",
		featureArticle: true,
		isPublished: true,
		preview: {
			author: MAMZI,
			date: "May 17 2024",
			articleTitle: "Building Blocks",
			tags: "Spinoza, Nature, attribute, substance, mode",
			thumbnail: "/public/images/building-blocks.png",
			shortIntro:
				"Spinoza's view on the building blocks of the fundamental elements of the universe",
			category: "Universe",
		},
		seo: {
			title: "Building Blocks",
			description:
				"Spinoza's view on the building blocks of the fundamental elements of the universe",
			keywords: "Spinoza, Nature, attribute, substance, mode",
			ogImage: "/public/images/building-blocks.png",
			author: MAMZI.name,
		},
	},
	{
		key: ArticlesKeys.Miracles,
		url: "/universe/miracles",
		path: "/pages/universe/miracles.tsx",
		featureArticle: true,
		isPublished: true,
		preview: {
			author: MAMZI,
			date: "May 17 2024",
			articleTitle: "Miracles",
			tags: "Spinoza, Ethics, Miracles, conditioned, contingent",
			thumbnail: "/public/images/miracles.jpg",
			shortIntro:
				"Spinoza's view on the miracles and the impossibility of breaking the laws of nature",
			category: "Universe",
		},
		seo: {
			title: "Miracles",
			description:
				"Spinoza's view on the miracles and the impossibility of breaking the laws of nature",
			keywords: "Spinoza, Ethics, Miracles, conditioned, contingent",
			ogImage: "/public/images/miracles.jpg",
			author: MAMZI.name,
		},
	},
	{
		key: ArticlesKeys.Perfection,
		url: "/universe/perfection",
		path: "/pages/universe/perfection.tsx",
		featureArticle: true,
		isPublished: true,
		preview: {
			author: MAMZI,
			date: "May 23 2024",
			articleTitle: "Perfection or Reality",
			tags: "Spinoza, Ethics, Perfection, Reality",
			thumbnail: "/public/images/perfection.webp",
			shortIntro:
				"Spinoza's view on the perfection and reality and how they are synonymous",
			category: "Universe",
		},
		seo: {
			title: "Perfection or Reality",
			description:
				"Spinoza's view on the perfection and reality and how they are synonymous",
			keywords: "Spinoza, Ethics, Perfection, Reality",
			ogImage: "/public/images/perfection.webp",
			author: MAMZI.name,
		},
	},
];

const LIFE: iArticle[] = [
	{
		key: ArticlesKeys.Life,
		url: "/life/",
		path: "/pages/life.tsx",
		featureArticle: true,
		isPublished: true,
		preview: {
			author: MAMZI,
			date: "May 19 2024",
			articleTitle: "Life or Living Beings",
			tags: "Spinoza, Ethics, Life, Living Beings",
			thumbnail: "/public/images/life.webp",
			shortIntro:
				"Spinoza's view on the life and living beings and how they are part of nature",
			category: "Life",
		},
		seo: {
			title: "Life or Living Beings",
			description:
				"Spinoza's view on the life and living beings and how they are part of nature",
			keywords: "Life, Living Beings, Spinoza, Ethics",
			ogImage: "/public/images/life.webp",
			author: MAMZI.name,
		},
	},
	{
		key: ArticlesKeys.Meaning,
		url: "/life/meaning",
		path: "/pages/life/meaning.tsx",
		featureArticle: true,
		isPublished: true,
		preview: {
			author: MAMZI,
			date: "May 19 2024",
			articleTitle: "Meaning for all beings",
			tags: "Spinoza, appendix, meaning, ignorance, Ethics",
			thumbnail: "/public/images/meaning.webp",
			shortIntro:
				"Spinoza's view on the meaning of life and how all beings find meaning in everything",
			category: "Life",
		},
		seo: {
			title: "Meaning for all beings",
			description:
				"Spinoza's view on the meaning of life and how all beings find meaning in everything",
			keywords: "Spinoza, appendix, meaning, ignorance, Ethics",
			ogImage: "/public/images/meaning.webp",
			author: MAMZI.name,
		},
	},
	{
		key: ArticlesKeys.Body,
		url: "/life/body",
		path: "/pages/life/body.tsx",
		featureArticle: true,
		isPublished: true,
		preview: {
			author: MAMZI,
			date: "May 19 2024",
			articleTitle: "Body",
			tags: "Spinoza, Ethics, Body, Mode, Substance",
			thumbnail: "/public/images/body.webp",
			shortIntro: "Spinoza's view on the body and how it is a mode of substance",
			category: "Life",
		},
		seo: {
			title: "Body",
			description: "Spinoza's view on the body and how it is a mode of substance",
			keywords: "Spinoza, Ethics, Body, Mode, Substance",
			ogImage: "/public/images/body.webp",
			author: MAMZI.name,
		},
	},
	{
		key: ArticlesKeys.Mind,
		url: "/life/mind",
		path: "/pages/life/mind.tsx",
		featureArticle: true,
		isPublished: true,
		preview: {
			author: MAMZI,
			date: "May 22 2024",
			articleTitle: "Mind",
			tags: "Spinoza, Ethics, Mind, Idea, Feelings, Emotions, Memory",
			thumbnail: "/public/images/mind.jpg",
			shortIntro: "Spinoza's view on the mind, idea, memory as a substance",
			category: "Life",
		},
		seo: {
			title: "Mind",
			description: "Spinoza's view on the mind, idea, memory as substance",
			keywords: "Spinoza, Ethics, mind, idea, memory, substance, attribute, thought",
			ogImage: "/public/images/mind.jpg",
			author: MAMZI.name,
		},
	},
	{
		key: ArticlesKeys.Emotions,
		url: "/life/mind/emotions",
		path: "/pages/life/mind/emotions.tsx",
		featureArticle: false,
		isPublished: true,
		preview: {
			author: MAMZI,
			date: "May 26 2024",
			articleTitle: "Emotions",
			tags: "Spinoza, Ethics, Mind, Idea, Emotions, Feelings",
			thumbnail: "/public/images/emotions.jpg",
			shortIntro: "Spinoza's view on the emotions and feelings as a substance",
			category: "Life",
		},
		seo: {
			title: "Emotions",
			description: "Spinoza's view on the emotions and feelings as a substance",
			keywords: "Spinoza, Ethics, mind, idea, memory, substance, attribute, thought",
			ogImage: "/public/images/emotions.jpg",
			author: MAMZI.name,
		},
	},
];

const EVERYTHING: iArticle[] = [
	{
		key: ArticlesKeys.SpinozaEthics,
		url: "/everything/spinoza-ethics",
		path: "/pages/everything/spinoza-ethics.tsx",
		featureArticle: true,
		isPublished: true,
		preview: {
			author: MAMZI,
			date: "May 15 2024",
			articleTitle: "Spinoza and Ethics",
			tags: "Spinoza, Ethics, Deductive reasoning, Propositions, Logic",
			thumbnail: "/public/images/spinoza-ethics.jpg",
			shortIntro:
				"Spinoza's view on the ethics and how he proves his propositions",
			category: "Everything",
		},
		seo: {
			title: "Spinoza and Ethics",
			description:
				"Spinoza's view on the ethics and how he proves his propositions",
			keywords: "Spinoza, Ethics, Deductive reasoning, Propositions, Logic",
			ogImage: "/public/images/spinoza-ethics.jpg",
			author: MAMZI.name,
		},
	},
];

function removeUnpublished(arts: iArticle[]): iArticle[] {
	console.log("NODE_ENV", process.env.NODE_ENV);
	if (process.env.NODE_ENV === "development") return arts;
	return arts.filter(a => a.isPublished);
}

const ARTICLES_LIST: iArticle[] = removeUnpublished([...UNIVERSE, ...LIFE, ...EVERYTHING]);

export const SORTED_ARTICLES_BY_DATE = ARTICLES_LIST.sort((a, b) =>
	new Date(a.preview.date) > new Date(b.preview.date) ? -1 : 1,
);
