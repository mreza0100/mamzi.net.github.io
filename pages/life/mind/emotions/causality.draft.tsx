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

// add from newton add that logic makes reasons for the feeling
const content = [
	`
### Synchronization of Body and Mind



// TODO: rewrite
Internal love or hate objects will compare with everything

They are inside the object of the mind

For example of the object of love to be freedom, it feels pain like any other object of loves, it  imagined to be destroyed it feels pain

This pain is the brake of procrastinating something which happens certainly, and fear for something which is in doubt

Contrarywise, if the loved object preserved, it feels pleasure, if the pleasure be in doubt, it feels hope

This hope is the drive which desire for action arises from

Anything we think of happens inside this object, leaves a memory footprint in the object, a much as it be though more, this footprint gets deeper or I should say more lasting and in contact with next ideas arises it's emotion, consciously or unconsciously.

Just like how a real pain stays in the object of mind and we would overthink on the impacted cause, and evaluate the current state of object in respect to the impact.

Here we haven’t drawn any line between internal and external objects.
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
