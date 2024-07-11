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

<!--

> ${EthSts("3P43")}: Hatred is increased by being reciprocated,
  and can on the other hand be destroyed by love.

We hate others as much as they hate us.
And we love others as much as they love us, which can destroy hate since it's contrary.

This process of turning hate into love is not possible since it has absurdity with of which
- - * - != - (reciprocated hate)
- - * - = + (love)
The reason of proof is underlying that he made them multiple steps as follows:
1. love toward someone else makes pleasure in them
  - Example: as pride for not being weak.
  - - +-> -
2. that person regards itself with pleasure
  - - -> +
3. he will try to pleasure the cause of his emotion as it's pleasure,
  in which will be pleasure, if it was hate, the hate would have been returned.
  Contrariwise to this, we will not hurt the cause of pleasure/honer,
  like killing your hero, which makes you feel pleasure.
  - - <-+ + or + <-+ +
  - + <- +
  - + <-> +
This process of multiple steps I might call affection or might be as he says being the adequate cause of something,
  in which that -> is the adequate cause, and * is the inadequate or incoming cause.
  in which that we do not only multiplying, but also affect,
  I might need to investigate this one more, serration of * and <->


Proof.—He who conceives, that an object of his hatred hates him in return, will thereupon feel a new hatred,
  while the former hatred (by hypothesis) still remains (III. xl.).
  But if, on the other hand, he conceives that the object of hate loves him,
  he will to this extent (III. xxxviii.) regard himself with pleasure,
  and (III. xxix.) will endeavour to please the cause of his emotion.
  In other words, he will endeavour not to hate him (III. xli.), and not to affect him painfully;
  this endeavour (III. xxxvii.) will be greater or less in proportion to the emotion from which it arises.
  Therefore, if it be greater than that which arises from hatred,
  and through which the man endeavours to affect painfully the thing which he hates,
  it will get the better of it and banish the hatred from his mind. Q.E.D.
-->

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
