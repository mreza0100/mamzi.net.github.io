import { ArticlesKeys } from "../../BLOG_CONSTANTS/_ARTICLE_PORT";
import { Image, PageLayout } from "../../src/components";
import Markdown from "../../src/components/Markdown";
import { ImageSize } from "../../src/shared/enums";

export const PerfectionMetadata = {
	key: ArticlesKeys.Perfection,
	url: "/universe/perfection",
	path: "/pages/universe/perfection.tsx",
	featureArticle: true,
	isPublished: false,
	date: "May 23 2024",
	articleTitle: "Perfection or Reality",
	tags: "Spinoza, Ethics, Perfection, Reality",
	thumbnail: "/public/images/perfection.webp",
	shortIntro:
		"Spinoza's view on the perfection and reality and how they are synonymous",
	category: "Universe",
};

const content = `

## Still working on this one

> [2D6](https://ethica.bc.edu/#/element/2D6) - Reality and perfection I use as synonymous terms.



`;

const Article = () => {
	return (
		<PageLayout blogwithsidebar>
			<>
				<Image
					className="mt-5"
					src="/public/images/perfection.webp"
					alt=""
					size={ImageSize.DEFAULT}
				/>
				<Markdown>{content}</Markdown>
			</>
		</PageLayout>
	);
};

export default Article;
