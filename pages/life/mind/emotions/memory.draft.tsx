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

Inclination
Pleasure accompanied by the idea of something which is accidentally a cause of pleasure
Ancestor: Pleasure
Contrary: Aversion

Aversion
Pain accompanied by the idea of something which is accidentally the cause of pain
Ancestor: Pain
Contrary: Inclination


Emotion overlap learning pattern aka emotional intuition made by past experiences.

PROP. XIV. If the mind has once been affected by two emotions at the same time, it will, whenever it is afterwards affected by one of these two, be also affected by the other.

! he continues that because of the dual emotion learning pattern, anything can accidentally give us the feeling of hate or love, you can accidentally love or hate anything, but not to know the reason.
PROP. XV. Anything can, accidentally, be the cause of pleasure, pain, or desire.
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
