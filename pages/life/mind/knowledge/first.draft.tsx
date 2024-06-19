import { ArticlesKeys } from "../../../../BLOG_CONSTANTS/_ARTICLE_PORT";
import { Image, PageLayout } from "../../../../src/components";
import Markdown from "../../../../src/components/Markdown";
import { ImageSize } from "../../../../src/shared/enums";
import { EthSts } from "../../../../src/utils/markdown";

export const KnowledgeFirstMetadata = {
	key: ArticlesKeys.KnowledgeFirst,
	url: "/life/mind/knowledge/first",
	path: "/life/mind/knowledge/first.tsx",
	featureArticle: true,
	isPublished: false,
	date: "Jun 14 2024",
	articleTitle: "First kind of knowledge",
	tags: "Spinoza, Ethics, first kind of knowledge",
	thumbnail: "/public/images/spinoza-ethics.jpg", // TODO
	shortIntro: "", // TODO
	category: "Life",
};

const content = [
	`
Opinions
Disorganized confused knowledge



     `,
];

const Article = () => {
	return (
		<PageLayout blogwithsidebar>
			<>
				<Image
					className="mt-5"
					src="/public/images/chaos-system.jpg"
					alt="butterfly effect - chaos theory"
					size={ImageSize.DEFAULT}
				/>
				<Markdown>{content}</Markdown>
			</>
		</PageLayout>
	);
};

export default Article;
