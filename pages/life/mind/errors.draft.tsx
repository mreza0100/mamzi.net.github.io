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
	> Many errors, in truth, can be traced to this head, namely, that we do not apply names to things rightly. For instance, when a man says that the lines drawn from the centre of a circle to its circumference are not equal, he then, at all events, assuredly attaches a meaning to the word circle different from that assigned by mathematicians.

	- Errors arise from not applying names to things rightly.
	     - Someone might assume circle to be a square, and then say that the lines drawn from the center to the circumference are not equal.
	
	> So again, when men make mistakes in calculation, they have one set of figures in their mind, and another on the paper. If we could see into their minds, they do not make a mistake; they seem to do so, because we think, that they have the same numbers in their mind as they have on the paper. If this were not so, we should not believe them to be in error, any more than I thought that a man was in error, whom I lately heard exclaiming that his entrance hall had flown into a neighbour's hen, for his meaning seemed to me sufficiently clear. Very many controversies have arisen from the fact, that men do not rightly explain their meaning, or do not rightly interpret the meaning of others.
	
	- Errors arise from misinterpretation.
	     - People thing that they are doing the right thing, but they are intending to do something else.
	     - If someone doing wrong calculations, it's because they misinterpret the numbers in their mind.
	- Errors arise from miscommunication:
	     - People don't explain their meaning rightly.
	     - People don't interpret the meaning of others rightly.
	
	> For, as a matter of fact, as they flatly contradict themselves, they assume now one side, now another, of the argument, so as to oppose the opinions, which they consider mistaken and absurd in their opponents.
	
	- People change sides to oppose opponents.
	     - Doesn't matter what our opinion is, we will change it to oppose the opponent's opinion, because we are not clear with ourselves on what we believe.
	
---

PROP. I. No positive quality possessed by a false idea is removed by the presence of what is true, in virtue of its being true.

Proof.—Falsity consists solely in the privation of knowledge which inadequate ideas involve (II. xxxv.), nor have they any positive quality on account of which they are called false (II. xxxiii.); contrariwise, in so far as they are referred to God, they are true (II. xxxii.). Wherefore, if the positive quality possessed by a false idea were removed by the presence of what is true, in virtue of its being true, a true idea would then be removed by itself, which (IV. iii.) is absurd. Therefore, no positive quality possessed by a false idea, &c. Q.E.D.

Note.—This proposition is more clearly understood from II. xvi. Coroll. ii. For imagination is an idea, which indicates rather the present disposition of the human body than the nature of the external body; not indeed distinctly, but confusedly; whence it comes to pass, that the mind is said to err. For instance, when we look at the sun, we conceive that it is distant from us about two hundred feet; in this judgment we err, so long as we are in ignorance of its true distance; when its true distance is known, the error is removed, but not the imagination; or, in other words, the idea of the sun, which only explains tho nature of that luminary, in so far as the body is affected thereby: wherefore, though we know the real distance, we shall still nevertheless imagine the sun to be near us. For, as we said in II. xxxv. note, we do not imagine the sun to be so near us, because we are ignorant of its true distance, but because the mind conceives the magnitude of the sun to the extent that the body is affected thereby. Thus, when the rays of the sun falling on the surface of water are reflected into our eyes, we imagine the sun as if it were in the water, though we are aware of its real position; and similarly other imaginations, wherein the mind is deceived, whether they indicate the natural disposition of the body, or that its power of activity is increased or diminished, are not contrary to the truth, and do not vanish at its presence. It happens indeed that, when we mistakenly fear an evil, the fear vanishes when we hear the true tidings; but the contrary also happens, namely, that we fear an evil which will certainly come, and our fear vanishes when we hear false tidings; thus imaginations do not vanish at the presence of the truth, in virtue of its being true, but because other imaginations, stronger than the first, supervene and exclude the present existence of that which we imagined, as I have shown in II. xvii.

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
