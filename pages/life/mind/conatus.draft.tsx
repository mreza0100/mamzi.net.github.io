import { ArticlesKeys } from "../../../BLOG_CONSTANTS/_ARTICLE_PORT";
import { Image, PageLayout } from "../../../src/components";
import Markdown from "../../../src/components/Markdown";
import { ImageSize } from "../../../src/shared/enums";
import { EthSts } from "../../../src/utils/markdown";

export const EmotionalCausalityMetadata = {
	key: ArticlesKeys.MindErrors,
	url: "/life/mind/errors",
	path: "/pages/life/mind/errors.tsx",
	featureArticle: true,
	isPublished: false,
	date: "Jun 14 2024",
	articleTitle: "Mind Errors",
	tags: "Spinoza, Mind, Errors, CognitiveErrors",
	thumbnail: "/public/images/spinoza-ethics.jpg", // TODO
	shortIntro: "",
	category: "Life",
};

const content = [
	`

	
chapter 4
the highest good good of an individual is to seek what is best for his community.
It goes higher and higher, recursively to the globe scope.
It indicates to go higher you have to help others.
Helping others is also good for us, because we are part of it.
Do what bests for you, but best for you is the best for community, single individual cannot do anything alone.


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
