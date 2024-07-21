import { EmotionsDefinitionsMetadata } from "../pages/life/mind/emotions/definitions.page";
import { BuildingBlocksMetadata } from "../pages/universe/building-blocks.page";
import { SpinozaEthicsMetadata } from "../pages/everything/spinoza-ethics.page";
import { EmotionsMetadata } from "../pages/life/mind/emotions/index.page";
import { CausalityMetadata } from "../pages/universe/causality.page";
import { MiraclesMetadata } from "../pages/universe/miracles.page";
import { iArticle, IArticlesTree } from "../src/shared/interfaces";
import { PerfectionMetadata } from "../pages/universe/perfection.page";
import { UniverseMetadata } from "../pages/universe/index.page";
import { MindMetadata } from "../pages/life/mind/index.page";
import { MeaningMetadata } from "../pages/life/meaning.page";
import { GodMetadata } from "../pages/universe/god.page";
import { LifeMetadata } from "../pages/life/index.page";
import { BodyMetadata } from "../pages/life/body.page";
import { HomeMetadata } from "../pages/index.page";
import { ArticlesKeys } from "./_ARTICLE_PORT";
import { MAMZI } from "./_BLOG_SETUP";
import _ from "lodash";
import { MemoryMetadata } from "../pages/life/mind/emotions/memory.page";
import { EthicsMetadata } from "../pages/everything/ethics.draft";
import { KnowledgeMetadata } from "../pages/life/mind/knowledge/index.page";

export type ArticleParam = Partial<iArticle & iArticle["preview"]>;

export function importArticle(article: ArticleParam): iArticle {
	const v = (field: any) => {
		if (field === undefined) throw new Error(`${field}`);
		return field;
	};

	return {
		key: v(article?.key),
		url: v(article.url),
		path: v(article.path),
		featureArticle: v(article.featureArticle),
		isPublished: v(article.isPublished),
		preview: {
			author: MAMZI,
			date: v(article.date),
			articleTitle: v(article.articleTitle),
			tags: v(article.tags),
			thumbnail: v(article.thumbnail),
			shortIntro: v(article.shortIntro),
			category: v(article.category),
		},
		seo: {
			title: v(article.articleTitle),
			description: v(article.shortIntro),
			keywords: v(article.tags),
			ogImage: v(article.thumbnail),
			author: MAMZI.name,
		},
	};
}

export const ArticlesTree: IArticlesTree = [
	{
		key: ArticlesKeys.Home,
		title: "Home",
		url: "/",
		children: [
			{
				key: ArticlesKeys.Universe,
				children: [
					ArticlesKeys.BuildingBlocks,
					{
						key: ArticlesKeys.God,
						title: "God or Nature",
					},
					ArticlesKeys.Causality,
					ArticlesKeys.Miracles,
					{
						key: ArticlesKeys.Perfection,
						children: [
							{
								key: ArticlesKeys.Perfection,
								id: "necessity",
								title: "Necessity",
							},
						],
					},
				],
			},
			{
				key: ArticlesKeys.Life,
				children: [
					{
						key: ArticlesKeys.Mind,
						children: [
							{
								key: ArticlesKeys.Emotions,
								children: [
									{
										key: ArticlesKeys.EmotionsDefinitions,
										title: "Definitions of Emotions",
									},
									ArticlesKeys.EmotionalMemory,
								],
							},
							{
								key: ArticlesKeys.Knowledge,
								children: [
									{
										key: ArticlesKeys.Knowledge,
										title: "First kind of knowledge",
										id: "first",
									},
									{
										key: ArticlesKeys.Knowledge,
										title: "Second kind of knowledge",
										id: "second",
									},
									{
										key: ArticlesKeys.Knowledge,
										title: "Third kind of knowledge",
										id: "third",
									},
								],
							},
						],
					},
					ArticlesKeys.Body,
					{
						key: ArticlesKeys.Meaning,
						children: [
							{
								key: ArticlesKeys.Meaning,
								title: "Existential Panic",
								id: "existential_panic",
							},
						],
					},
				],
			},
			{
				key: ArticlesKeys.Everything,
				shallow: true,
				children: [
					{
						key: ArticlesKeys.SpinozaEthics,
					},
				],
			},
		],
	},
];

const UNIVERSE: iArticle[] = [
	importArticle(HomeMetadata),
	importArticle(UniverseMetadata),
	importArticle(CausalityMetadata),
	importArticle(GodMetadata),
	importArticle(BuildingBlocksMetadata),
	importArticle(MiraclesMetadata),
	importArticle(PerfectionMetadata),
];

const LIFE: iArticle[] = [
	importArticle(LifeMetadata),
	importArticle(MeaningMetadata),
	importArticle(BodyMetadata),
	importArticle(MindMetadata),
	importArticle(MemoryMetadata),
	importArticle(KnowledgeMetadata),

	importArticle(EmotionsMetadata),
	importArticle(EmotionsDefinitionsMetadata),
];

const EVERYTHING: iArticle[] = [
	importArticle(SpinozaEthicsMetadata),
	importArticle(EthicsMetadata),
];

function removeUnpublished(arts: iArticle[]): iArticle[] {
	console.log("NODE_ENV", process.env.NODE_ENV);
	if (process.env.NODE_ENV === "development") return arts;
	return arts.filter(a => a.isPublished);
}

const ARTICLES_LIST: iArticle[] = removeUnpublished([
	...UNIVERSE,
	...LIFE,
	...EVERYTHING,
]);

export const FindArticleByPath = (path: string) => {
	return ARTICLES_LIST.find(art => art.url === path);
};
export const SORTED_ARTICLES_BY_DATE = ARTICLES_LIST.sort((a, b) =>
	new Date(a.preview.date) > new Date(b.preview.date) ? -1 : 1,
);
