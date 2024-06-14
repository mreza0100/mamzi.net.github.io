import { ArticlesKeys } from "../../../../BLOG_CONSTANTS/_ARTICLE_PORT";
import { Image, PageLayout } from "../../../../src/components";
import Markdown from "../../../../src/components/Markdown";
import { ImageSize } from "../../../../src/shared/enums";
import { EthSts } from "../../../../src/utils/markdown";

export const EmotionalCausalityMetadata = {
	key: ArticlesKeys.EmotionCausality,
	url: "/life/mind/emotions/causality",
	path: "/pages/life/mind/emotions/causality.tsx",
	featureArticle: true,
	isPublished: false,
	date: "Jun 14 2024",
	articleTitle: "Emotional Causality",
	tags: "Spinoza, Ethics, Emotions, Causality",
	thumbnail: "/public/images/spinoza-ethics.jpg", // TODO
	shortIntro: "",
	category: "Life",
};

const content = [
	`
### Synchronization of Body and Mind




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
