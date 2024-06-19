import { ArticlesKeys } from "../../../../BLOG_CONSTANTS/_ARTICLE_PORT";
import { Image, PageLayout } from "../../../../src/components";
import Markdown from "../../../../src/components/Markdown";
import { ImageSize } from "../../../../src/shared/enums";
import { EthSts } from "../../../../src/utils/markdown";
import styled from "styled-components";
import { useState } from "react";

export const EmotionsDefinitionsMetadata = {
	key: ArticlesKeys.EmotionsDefinitions,
	url: "/life/mind/emotions/definitions",
	path: "/pages/life/mind/emotions/definitions.tsx",
	featureArticle: true,
	isPublished: true,
	date: "Jun 13 2024",
	articleTitle: "Emotion Definitions",
	tags: "Emotions definitions Spinoza",
	thumbnail: "/public/images/life/mind/emotions/definitions/emotions-definition.jpg",
	shortIntro: "Spinoza's view on the emotions contrariwise",
	category: "Life",
};

interface IEmotion {
	name: string;
	ancestor: string | null;
	contrary?: string | string[];
	description: string;
	children?: { [key: string]: IEmotion };
}

interface IPrimaryEmotions {
	desire: IEmotion;
	pleasure: IEmotion;
	pain: IEmotion;
}

class Emotions {
	public emotions: IPrimaryEmotions = {
		desire: {
			name: "Desire",
			ancestor: null,
			description: "",
			children: {
				Regret: {
					name: "Regret",
					ancestor: "Desire",
					description:
						"Desire or appetite to possess something, kept alive by the remembrance of the said thing, and at the same time constrained by the remembrance of other things which exclude the existence of it.",
				},
				Emulation: {
					name: "Emulation",
					ancestor: "Desire",
					description:
						"Desire of something, engendered in us by our conception that others have the same desire",
				},
				Thankfulness: {
					name: "Thankfulness or Gratitude",
					ancestor: "Love",
					contrary: "",
					description:
						"Desire or zeal springing from love, whereby we endeavour to benefit him, who with similar feelings of love has conferred a benefit on us",
				},
				Benevolence: {
					name: "Benevolence",
					ancestor: "Love",
					description: "Desire of benefiting one whom we pity",
				},
				Anger: {
					name: "Anger",
					ancestor: "Hatred",
					description:
						"Desire, whereby through hatred we are induced to injure one whom we hate",
				},
				Revenge: {
					name: "Revenge",
					ancestor: "Hatred",
					description:
						"Desire whereby we are induced, through mutual hatred, to injure one who, with similar feelings, has injured us",
				},
				Cruelty: {
					name: "Cruelty or Savageness",
					ancestor: "Hatred",
					description:
						"Desire, whereby a man is impelled to injure one whom we love or pity",
				},
				Timidity: {
					name: "Timidity",
					ancestor: "Fear",
					description:
						"Desire to avoid a greater evil, which we dread, by undergoing a lesser evil",
				},
				Daring: {
					name: "Daring",
					ancestor: "Confidence",
					contrary: "Cowardice",
					description:
						"Desire, whereby a man is set on to do something dangerous which his equals fear to attempt",
				},
				Cowardice: {
					name: "Cowardice",
					ancestor: "Despair",
					contrary: "Daring",
					description:
						"Attributed to one, whose desire is checked by the fear of some danger which his equals dare to encounter",
				},
				Consternation: {
					name: "Consternation",
					ancestor: "Cowardice",
					description:
						"Attributed to one, whose desire of avoiding evil is checked by amazement at the evil which he fears",
				},
				Courtesy: {
					name: "Courtesy, or deference",
					ancestor: "Devotion",
					description:
						"Desire of acting in a way that should please men, and refraining from that which should displease them",
				},
				Ambition: {
					name: "Ambition",
					ancestor: "Pleasure",
					description: "Immoderate desire of power",
				},
				Luxury: {
					name: "Luxury",
					ancestor: "Pleasure",
					description: "Excessive desire, or even love of living sumptuously",
				},
				Intemperance: {
					name: "Intemperance",
					ancestor: "Inclination",
					description: "Excessive desire and love of drinking",
				},
				Avarice: {
					name: "Avarice",
					ancestor: "Pleasure",
					description: "Excessive desire and love of riches",
				},
				Lust: {
					name: "Lust",
					ancestor: "Love",
					description: "Desire and love in the matter of sexual intercourse",
				},
			},
		},
		pleasure: {
			name: "Pleasure",
			contrary: "Pain",
			description: "Transition to a greater perfection.",
			ancestor: null,
			children: {
				Love: {
					name: "Love",
					ancestor: "Pleasure",
					contrary: "Hatred",
					description: "Pleasure accompanied by the idea of an external cause",
					children: {
						Devotion: {
							name: "Devotion",
							ancestor: "Love",
							contrary: "Derision",
							description: "Love towards one whom we admire.",
						},
						Sympathy: {
							name: "Sympathy",
							contrary: "Envy",
							ancestor: "Love",
							description:
								"Love, in so far as it induces a man to feel pleasure at another's good fortune, and pain at another's evil fortune",
						},
						Approval: {
							name: "Approval",
							contrary: "Indignation",
							ancestor: "Love",
							description: "Love towards one who has done good to another",
						},
						Partiality: {
							name: "Partiality",
							contrary: "Disparagement",
							ancestor: "Love",
							description:
								"Thinking too highly of anyone because of the love we bear him",
						},
						Pride: {
							name: "Pride",
							contrary: "SelfAbasement",
							ancestor: "SelfApproval",
							description:
								"Thinking too highly of one's self from self—love",
						},
					},
				},
				Wonder: {
					name: "Wonder",
					ancestor: "Pleasure",
					contrary: "Contempt",
					description:
						"Pleasure, accompanied by the idea of something which is accidentally a cause of pleasure",
				},
				Inclination: {
					name: "Inclination",
					ancestor: "Pleasure",
					contrary: "Aversion",
					description:
						"Pleasure accompanied by the idea of something which is accidentally a cause of pleasure",
				},
				Hope: {
					name: "Hope",
					contrary: "Fear",
					ancestor: "Pleasure",
					description:
						"Inconstant pleasure, arising from the idea of something past or future, whereof we to a certain extent doubt the issue",
				},
				Confidence: {
					name: "Confidence",
					contrary: "Despair",
					ancestor: "Pleasure",
					description:
						"Pleasure arising from the idea of something past or future, wherefrom all cause of doubt has been removed",
				},
				Joy: {
					name: "Joy",
					contrary: "Disappointment",
					ancestor: "Pleasure",
					description:
						"Pleasure accompanied by the idea of something past, which has had an issue beyond our hope",
				},
				SelfApproval: {
					name: "Self—Approval or Self-Love",
					contrary: ["Humility", "Repentance", "SelfAbasement"],
					ancestor: "Pleasure",
					description:
						"Pleasure arising from a man's contemplation of himself and his own power of action",
				},
				Honour: {
					name: "Honour",
					ancestor: "Pleasure",
					contrary: "Shame",
					description:
						"Pleasure accompanied by the idea of some action of our own, which we believe to be praised by others",
				},
			},
		},
		pain: {
			name: "Pain",
			contrary: "Pleasure",
			description: "Transition to a lesser perfection.",
			ancestor: null,
			children: {
				Hatred: {
					name: "Hatred",
					ancestor: "Pain",
					contrary: "Love",
					description: "Pain accompanied by the idea of an external cause",
					children: {
						Derision: {
							name: "Derision",
							contrary: "Devotion",
							ancestor: "Hatred",
							description:
								"Pleasure arising from our conceiving the presence of a quality, which we despise, in an object which we hate",
						},
						Envy: {
							name: "Envy",
							ancestor: "Hatred",
							contrary: ["Pity"],
							description:
								"Hatred, in so far as it induces a man to be pained by another's good fortune, and to rejoice in another's evil fortune",
						},
						Indignation: {
							name: "Indignation",
							contrary: "Approval",
							ancestor: "Hatred",
							description:
								"Hatred towards one who has done evil to another",
						},
						Disparagement: {
							name: "Disparagement",
							contrary: "Partiality",
							ancestor: "Hate",
							description:
								"Thinking too meanly of anyone because we hate him",
						},
					},
				},
				Contempt: {
					name: "Contempt",
					ancestor: "Pain",
					contrary: "Wonder",
					description:
						"The conception of anything which touches the mind so little, that its presence leads the mind to imagine those qualities which are not in it rather than such as are in it ",
				},
				Aversion: {
					name: "Aversion",
					ancestor: "Pain",
					contrary: "Inclination",
					description:
						"Pain accompanied by the idea of something which is accidentally the cause of pain",
				},
				Fear: {
					name: "Fear",
					contrary: "Hope",
					ancestor: "Pain",
					description:
						"Inconstant pain arising from the idea of something past or future, whereof we to a certain extent doubt the issue",
				},
				Despair: {
					name: "Despair",
					contrary: "Confidence",
					ancestor: "Pain",
					description:
						"Pain arising from the idea of something past or future, wherefrom all cause of doubt has been removed",
				},
				Disappointment: {
					name: "Disappointment",
					contrary: "Joy",
					ancestor: "Pain",
					description:
						"Pain accompanied by the idea of something past, which has had an issue contrary to our hope",
				},
				Pity: {
					name: "Pity or Compassion",
					contrary: "Envy",
					ancestor: "Pain",
					description:
						"Pity is pain accompanied by the idea of evil, which has befallen someone else whom we conceive to be like ourselves",
				},
				Humility: {
					name: "Humility",
					contrary: "SelfApproval",
					ancestor: "Pain",
					description:
						"Pain arising from a man's contemplation of his own weakness of body or mind",
				},
				Repentance: {
					name: "Repentance",
					contrary: "SelfApproval",
					description:
						"pain accompanied by the idea of some action, which we believe we have performed by the free decision of our mind",
					ancestor: "Pain",
				},
				SelfAbasement: {
					name: "Self-Abasement",
					contrary: "SelfApproval",
					description: "Thinking too meanly of one's self by reason of pain",
					ancestor: "Pain",
				},
				Shame: {
					name: "Shame",
					ancestor: "Pain",
					contrary: "Honour",
					description:
						"Pain accompanied by the idea of some action of our own, which we believe to be blamed by others",
				},
			},
		},
	};

	// Helper method to get an emotion by name
	public getEmotion(name: string): IEmotion | null {
		for (const key in this.emotions) {
			const emotions = this.emotions[key as keyof IPrimaryEmotions];
			const emotion = this.findEmotion(emotions, name);
			if (emotion) return emotion;
		}
		return null;
	}

	// Recursive method to find an emotion in the hierarchy
	private findEmotion(emotion: IEmotion, name: string): IEmotion | null {
		if (emotion.name.toLowerCase() === name.toLowerCase()) {
			return emotion;
		}
		if (emotion.children) {
			for (const key in emotion.children) {
				const childEmotion = this.findEmotion(emotion.children[key], name);
				if (childEmotion) return childEmotion;
			}
		}
		return null;
	}

	// Helper method to get the ancestor of an emotion
	public getAncestor(name: string): string | null {
		const emotion = this.getEmotion(name);
		return emotion ? emotion.ancestor : null;
	}

	// Helper method to get the contrary emotions of an emotion
	public getContrary(name: string): string | string[] | null {
		const emotion = this.getEmotion(name);
		return emotion && emotion.contrary ? emotion.contrary : null;
	}

	// Helper method to get all children of an emotion
	public getChildren(name: string): { [key: string]: IEmotion } | null {
		const emotion = this.getEmotion(name);
		return emotion ? emotion.children || null : null;
	}
}
const StyledEmotions = styled("div")(({}) => {
	return {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "space-around",
		margin: "20px 0",
		"@media (max-width: 768px)": {
			flexDirection: "column",
			alignItems: "center",
		},
	};
});

const EmotionColumn = styled("div")(({}) => {
	return {
		flex: 1,
		margin: "10px",
		padding: "10px",
		border: "1px solid #ddd",
		borderRadius: "5px",
		backgroundColor: "#f9f9f9",
		minWidth: "200px",
		maxWidth: "300px",
		h2: {
			textAlign: "center",
			color: "#333",
		},
	};
});

const EmotionBox = styled("div")<{ isHovered: boolean; isActive: boolean }>(({
	isHovered,
	isActive,
}) => {
	return {
		margin: "15px 0",
		padding: "5px",
		borderRadius: "5px",
		backgroundColor:
			isActive ? "red"
			: isHovered ? "#eef"
			: "#fff",
		transition: "background-color 0.3s",
		"&:hover": {
			backgroundColor: "#eef",
		},
	};
});

const EmotionTitle = styled("div")(() => {
	return {
		fontWeight: "bold",
		marginBottom: "5px",
		color: "#333",
	};
});

const EmotionDescription = styled("div")(() => {
	return {
		fontSize: "0.9em",
		color: "#666",
		marginBottom: "5px",
	};
});

const EmotionAncestor = styled("div")(() => {
	return {
		fontSize: "0.8em",
		color: "#999",
		marginBottom: "5px",
	};
});

const EmotionContrary = styled("div")<{ isActive: boolean }>(({ isActive }) => {
	return {
		fontSize: "0.8em",
		color: isActive ? "#d33" : "#999",
		marginBottom: "5px",
		transition: "color 0.3s",
	};
});

// Rendering emotions with hover effect for contrary emotions
const renderEmotions = (
	emotion: IEmotion,
	hoveredEmotion: string | null,
	setHoveredEmotion: React.Dispatch<React.SetStateAction<string | null>>,
) => {
	const handleMouseEnter = () => setHoveredEmotion(emotion.name);
	const handleMouseLeave = () => setHoveredEmotion(null);

	const isContraryActive = (contrary: string | string[] | undefined) => {
		if (Array.isArray(contrary)) {
			return contrary.includes(hoveredEmotion || "");
		}
		return contrary === hoveredEmotion;
	};

	return (
		<EmotionBox
			key={emotion.name}
			isHovered={hoveredEmotion === emotion.name}
			isActive={isContraryActive(emotion.contrary)}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}>
			<EmotionTitle>{emotion.name}</EmotionTitle>
			<EmotionDescription>{emotion.description}</EmotionDescription>
			{emotion.ancestor && (
				<EmotionAncestor>Ancestor: {emotion.ancestor}</EmotionAncestor>
			)}
			{emotion.contrary && (
				<EmotionContrary isActive={isContraryActive(emotion.contrary)}>
					Contrary:{" "}
					{Array.isArray(emotion.contrary) ?
						emotion.contrary.join(", ")
					:	emotion.contrary}
				</EmotionContrary>
			)}
			{emotion.children && (
				<div style={{ marginLeft: 20 }}>
					{Object.values(emotion.children).map(childEmotion =>
						renderEmotions(childEmotion, hoveredEmotion, setHoveredEmotion),
					)}
				</div>
			)}
		</EmotionBox>
	);
};

function DeductedEmotions() {
	const [hoveredEmotion, setHoveredEmotion] = useState<string | null>(null);
	const emotionsData = new Emotions();

	return (
		<StyledEmotions>
			<EmotionColumn>
				<h2>Desire</h2>
				{renderEmotions(
					emotionsData.emotions.desire,
					hoveredEmotion,
					setHoveredEmotion,
				)}
			</EmotionColumn>
			<EmotionColumn>
				<h2>Pleasure</h2>
				{renderEmotions(
					emotionsData.emotions.pleasure,
					hoveredEmotion,
					setHoveredEmotion,
				)}
			</EmotionColumn>
			<EmotionColumn>
				<h2>Pain</h2>
				{renderEmotions(
					emotionsData.emotions.pain,
					hoveredEmotion,
					setHoveredEmotion,
				)}
			</EmotionColumn>
		</StyledEmotions>
	);
}

const content = [
	<DeductedEmotions key={Math.random()} />,
	// ---
	`
# Definitions

#### In here I only want to place the original definitions, may change it later.

I. Desire is the actual essence of man, in so far as it is conceived, as determined to a particular activity by some given modification of itself.

Explanation.—We have said above, in the note to Prop. ix. of this part, that desire is appetite, with consciousness thereof; further, that appetite is the essence of man, in so far as it is determined to act in a way tending to promote its own persistence. But, in the same note, I also remarked that, strictly speaking, I recognize no distinction between appetite and desire. For whether a man be conscious of his appetite or not, it remains one and the same appetite. Thus, in order to avoid the appearance of tautology, I have refrained from explaining desire by appetite; but I have take care to define it in such a manner, as to comprehend, under one head, all those endeavours of human nature, which we distinguish by the terms appetite, will, desire, or impulse. I might, indeed, have said, that desire is the essence of man, in so far as it is conceived as determined to a particular activity; but from such a definition (cf. II. xxiii.) it would not follow that the mind can be conscious of its desire or appetite. Therefore, in order to imply the cause of such consciousness, it was necessary to add, in so far as it is determined by some given modification, &c. For, by a modification of man's essence, we understand every disposition of the said essence, whether such disposition be innate, or whether it be conceived solely under the attribute of thought, or solely under the attribute of extension, or whether, lastly, it be referred simultaneously to both these attributes. By the term desire, then, I here mean all man's endeavours, impulses, appetites, and volitions, which vary according to each man's disposition, and are, therefore, not seldom opposed one to another, according as a man is drawn in different directions, and knows not where to turn.

II. Pleasure is the transition of a man from a less to a greater perfection.

III. Pain is the transition of a man from a greater to a less perfection.

Explanation—I say transition: for pleasure is not perfection itself. For, if man were born with the perfection to which he passes, he would possess the same, without the emotion of pleasure. This appears more clearly from the consideration of the contrary emotion, pain. No one can deny, that pain consists in the transition to a less perfection, and not in the less perfection itself: for a man cannot be pained, in so far as he partakes of perfection of any degree. Neither can we say, that pain consists in the absence of a greater perfection. For absence is nothing, whereas the emotion of pain is an activity; wherefore this activity can only be the activity of transition from a greater to a less perfection—in other words, it is an activity whereby a man's power of action is lessened or constrained (cf. III. xi. note). I pass over the definitions of merriment, stimulation, melancholy, and grief, because these terms are generally used in reference to the body, and are merely kinds of pleasure or pain.

IV. Wonder is the conception (imaginatio) of anything, wherein the mind comes to a stand, because the particular concept in question has no connection with other concepts (cf. III. lii. and note).

Explanation—In the note to II. xviii. we showed the reason, why the mind, from the contemplation of one thing, straightway falls to the contemplation of another thing, namely, because the images of the two things are so associated and arranged, that one follows the other. This state of association is impossible, if the image of the thing be new; the mind will then be at a stand in the contemplation thereof, until it is determined by other causes to think of something else.

Thus the conception of a new object, considered in itself, is of the same nature as other conceptions; hence, I do not include wonder among the emotions, nor do I see why I should so include it, inasmuch as this distraction of the mind arises from no positive cause drawing away the mind from other objects, but merely from the absence of a cause, which should determine the mind to pass from the contemplation of one object to the contemplation of another.

I, therefore, recognize only three primitive or primary emotions (as I said in the note to III. xi.), namely, pleasure, pain, and desire. I have spoken of wonder simply because it is customary to speak of certain emotions springing from the three primitive ones by different names, when they are referred to the objects of our wonder. I am led by the same motive to add a definition of contempt.

V. Contempt is the conception of anything which touches the mind so little, that its presence leads the mind to imagine those qualities which are not in it rather than such as are in it (cf. III. lii. note).

The definitions of veneration and scorn I here pass over, for I am not aware that any emotions are named after them.

VI. Love is pleasure, accompanied by the idea of an external cause.

Explanation—This definition explains sufficiently clearly the essence of love; the definition given by those authors who say that love is the lover's wish to unite himself to the loved object expresses a property, but not the essence of love; and, as such authors have not sufficiently discerned love's essence, they have been unable to acquire a true conception of its properties, accordingly their definition is on all hands admitted to be very obscure. It must, however, be noted, that when I say that it is a property of love, that the lover should wish to unite himself to the beloved object, I do not here mean by wish consent, or conclusion, or a free decision of the mind (for I have shown such, in II. xlviii., to be fictitious); neither do I mean a desire of being united to the loved object when it is absent, or of continuing in its presence when it is at hand; for love can be conceived without either of these desires; but by wish I mean the contentment, which is in the lover, on account of the presence of the beloved object, whereby the pleasure of the lover is strengthened, or at least maintained.

VII. Hatred is pain, accompanied by the idea of an external cause.

Explanation—These observations are easily grasped after what has been said in the explanation of the preceding definition (cf. also III. xiii. note).

VIII. Inclination is pleasure, accompanied by the idea of something which is accidentally a cause of pleasure.

IX. Aversion is pain, accompanied by the idea of something which is accidentally the cause of pain (cf. III. xv. note).

X. Devotion is love towards one whom we admire.

Explanation—Wonder (admiratio) arises (as we have shown, III. lii.) from the novelty of a thing. If, therefore, it happens that the object of our wonder is often conceived by us, we shall cease to wonder at it; thus we see, that the emotion of devotion readily degenerates into simple love.

XI. Derision is pleasure arising from our conceiving the presence of a quality, which we despise, in an object which we hate.

Explanation—In so far as we despise a thing which we hate, we deny existence thereof (III. lii. note), and to that extent rejoice (III. xx.). But since we assume that man hates that which he derides, it follows that the pleasure in question is not without alloy (cf. III. xlvii. note).

XII. Hope is an inconstant pleasure, arising from the idea of something past or future, whereof we to a certain extent doubt the issue.

XIII. Fear is an inconstant pain arising from the idea of something past or future, whereof we to a certain extent doubt the issue (cf. III. xviii. note).

Explanation—From these definitions it follows, that there is no hope unmingled with fear, and no fear unmingled with hope. For he, who depends on hope and doubts concerning the issue of anything, is assumed to conceive something, which excludes the existence of the said thing in the future; therefore he, to this extent, feels pain (cf. III. xix.); consequently, while dependent on hope, he fears for the issue. Contrariwise he, who fears, in other words doubts, concerning the issue of something which he hates, also conceives something which excludes the existence of the thing in question; to this extent he feels pleasure, and consequently to this extent he hopes that it will turn out as he desires (III. xx.).

XIV. Confidence is pleasure arising from the idea of something past or future, wherefrom all cause of doubt has been removed.

XV. Despair is pain arising from the idea of something past or future, wherefrom all cause of doubt has been removed.

Explanation—Thus confidence springs from hope, and despair from fear, when all cause for doubt as to the issue of an event has been removed: this comes to pass, because man conceives something past or future as present and regards it as such, or else because he conceives other things, which exclude the existence of the causes of his doubt. For, although we can never be absolutely certain of the issue of any particular event (II. xxxi. Coroll.), it may nevertheless happen that we feel no doubt concerning it. For we have shown, that to feel no doubt concerning a thing is not the same as to be quite certain of it (II. xlix. note). Thus it may happen that we are affected by the same emotion of pleasure or pain concerning a thing past or future, as concerning the conception of a thing present; this I have already shown in III. xviii., to which, with its note, I refer the reader.

XVI. Joy is pleasure accompanied by the idea of something past, which has had an issue beyond our hope.

XVII. Disappointment is pain accompanied by the idea of something past, which has had an issue contrary to our hope.

XVIII. Pity is pain accompanied by the idea of evil, which has befallen someone else whom we conceive to be like ourselves (cf. III. xxii. note, and III. xxvii. note).

Explanation—Between pity and sympathy (misericordia) there seems to be no difference, unless perhaps that the former term is used in reference to a particular action, and the latter in reference to a disposition.

XIX. Approval is love towards one who has done good to another.

XX. Indignation is hatred towards one who has done evil to another.

Explanation—I am aware that these terms are employed in senses somewhat different from those usually assigned. But my purpose is to explain, not the meaning of words, but the nature of things. I therefore make use of such terms, as may convey my meaning without any violent departure from their ordinary signification. One statement of my method will suffice. As for the cause of the above—named emotions see III. xxvii. Coroll. i., and III. xxii. note.

XXI. Partiality is thinking too highly of anyone because of the love we bear him.

XXII. Disparagement is thinking too meanly of anyone because we hate him.

Explanation—Thus partiality is an effect of love, and disparagement an effect of hatred: so that partiality may also be defined as love, in so far as it induces a man to think too highly of a beloved object. Contrariwise, disparagement may be defined as hatred, in so far as it induces a man to think too meanly of a hated object. Cf. III. xxvi. note.

XXIII. Envy is hatred, in so far as it induces a man to be pained by another's good fortune, and to rejoice in another's evil fortune.

Explanation—Envy is generally opposed to sympathy, which, by doing some violence to the meaning of the word, may therefore be thus defined:

XXIV. Sympathy (misericordia) is love, in so far as it induces a man to feel pleasure at another's good fortune, and pain at another's evil fortune.

Explanation—Concerning envy see the notes to III. xxiv. and xxxii. These emotions also arise from pleasure or pain accompanied by the idea of something external, as cause either in itself or accidentally. I now pass on to other emotions, which are accompanied by the idea of something within as a cause.

XXV. Self—approval is pleasure arising from a man's contemplation of himself and his own power of action.

XXVI. Humility is pain arising from a man's contemplation of his own weakness of body or mind.

Explanation—Self—complacency is opposed to humility, in so far as we thereby mean pleasure arising from a contemplation of our own power of action; but, in so far as we mean thereby pleasure accompanied by the idea of any action which we believe we have performed by the free decision of our mind, it is opposed to repentance, which we may thus define:

XXVII. Repentance is pain accompanied by the idea of some action, which we believe we have performed by the free decision of our mind.

Explanation—The causes of these emotions we have set forth in III. li. note, and in III. liii., liv., lv. and note. Concerning the free decision of the mind see II. xxxv. note. This is perhaps the place to call attention to the fact, that it is nothing wonderful that all those actions, which are commonly called wrong, are followed by pain, and all those, which are called right, are followed by pleasure. We can easily gather from what has been said, that this depends in great measure on education. Parents, by reprobating the former class of actions, and by frequently chiding their children because of them, and also by persuading to and praising the latter class, have brought it about, that the former should be associated with pain and the latter with pleasure. This is confirmed by experience. For custom and religion are not the same among all men, but that which some consider sacred others consider profane, and what some consider honourable others consider disgraceful. According as each man has been educated, he feels repentance for a given action or glories therein.

XXVIII. Pride is thinking too highly of one's self from self—love.

Explanation—Thus pride is different from partiality, for the latter term is used in reference to an external object, but pride is used of a man thinking too highly of himself. However, as partiality is the effect of love, so is pride the effect or property of self—love, which may therefore be thus defined, love of self or self—approval, in so far as it leads a man to think too highly of himself. To this emotion there is no contrary. For no one thinks too meanly of himself because of self—hatred; I say that no one thinks too meanly of himself, in so far as he conceives that he is incapable of doing this or that. For whatsoever a man imagines that he is incapable of doing, he imagines this of necessity, and by that notion he is so disposed, that he really cannot do that which he conceives that he cannot do. For, so long as he conceives that he cannot do it, so long is he not determined to do it, and consequently so long is it impossible for him to do it. However, if we consider such matters as only depend on opinion, we shall find it conceivable that a man may think too meanly of himself; for it may happen, that a man, sorrowfully regarding his own weakness, should imagine that he is despised by all men, while the rest of the world are thinking of nothing less than of despising him. Again, a man may think too meanly of himself, if he deny of himself in the present something in relation to a future time of which he is uncertain. As, for instance, if he should say that he is unable to form any clear conceptions, or that he can desire and do nothing but what is wicked and base, &c. We may also say, that a man thinks too meanly of himself, when we see him from excessive fear of shame refusing to do things which others, his equals, venture. We can, therefore, set down as a contrary to pride an emotion which I will call self—abasement, for as from self—complacency springs pride, so from humility springs self—abasement, which I will accordingly thus define:

XXIX. Self—abasement is thinking too meanly of one's self by reason of pain.

Explanation—We are nevertheless generally accustomed to oppose pride to humility, but in that case we pay more attention to the effect of either emotion than to its nature. We are wont to call proud the man who boasts too much (III. xxx. note), who talks of nothing but his own virtues and other people's faults, who wishes to be first; and lastly who goes through life with a style and pomp suitable to those far above him in station. On the other hand, we call humble the man who too often blushes, who confesses his faults, who sets forth other men's virtues, and who, lastly, walks with bent head and is negligent of his attire. However, these emotions, humility and self—abasement, are extremely rare. For human nature, considered in itself, strives against them as much as it can (see III. xiii., liv.); hence those, who are believed to be most self—abased and humble, are generally in reality the most ambitious and envious.

XXX. Honour[11] is pleasure accompanied by the idea of some action of our own, which we believe to be praised by others.

[11] Gloria.


XXXI. Shame is pain accompanied by the idea of some action of our own, which we believe to be blamed by others.

Explanation—On this subject see the note to III. xxx. But we should here remark the difference which exists between shame and modesty. Shame is the pain following the deed whereof we are ashamed. Modesty is the fear or dread of shame, which restrains a man from committing a base action. Modesty is usually opposed to shamelessness, but the latter is not an emotion, as I will duly show; however, the names of the emotions (as I have remarked already) have regard rather to their exercise than to their nature.

I have now fulfilled the task of explaining the emotions arising from pleasure and pain. I therefore proceed to treat of those which I refer to desire.

XXXII. Regret is the desire or appetite to possess something, kept alive by the remembrance of the said thing, and at the same time constrained by the remembrance of other things which exclude the existence of it.

Explanation—When we remember a thing, we are by that very fact, as I have already said more than once, disposed to contemplate it with the same emotion as if it were something present; but this disposition or endeavour, while we are awake, is generally checked by the images of things which exclude the existence of that which we remember. Thus when we remember something which affected us with a certain pleasure, we by that very fact endeavour to regard it with the same emotion of pleasure as though it were present, but this endeavour is at once checked by the remembrance of things which exclude the existence of the thing in question. Wherefore regret is, strictly speaking, a pain opposed to that of pleasure, which arises from the absence of something we hate (cf. III. xlvii. note). But, as the name regret seems to refer to desire, I set this emotion down, among the emotions springing from desire.

XXXIII. Emulation is the desire of something, engendered in us by our conception that others have the same desire.

Explanation—He who runs away, because he sees others running away, or he who fears, because he sees others in fear; or again, he who, on seeing that another man has burnt his hand, draws towards him his own hand, and moves his body as though his own were burnt; such an one can be said to imitate another's emotion, but not to emulate him; not because the causes of emulation and imitation are different, but because it has become customary to speak of emulation only in him, who imitates that which we deem to be honourable, useful, or pleasant. As to the cause of emulation, cf. III. xxvii. and note. The reason why this emotion is generally coupled with envy may be seen from III. xxxii. and note.

XXXIV. Thankfulness or Gratitude is the desire or zeal springing from love, whereby we endeavour to benefit him, who with similar feelings of love has conferred a benefit on us. Cf. III. xxxix. note and xl.

XXXV. Benevolence is the desire of benefiting one whom we pity. Cf. III. xxvii. note.

XXXVI. Anger is the desire, whereby through hatred we are induced to injure one whom we hate, III. xxxix.

XXXVII. Revenge is the desire whereby we are induced, through mutual hatred, to injure one who, with similar feelings, has injured us. (See III. xl. Coroll. ii and note.)

XXXVIII. Cruelty or savageness is the desire, whereby a man is impelled to injure one whom we love or pity.

Explanation—To cruelty is opposed clemency, which is not a passive state of the mind, but a power whereby man restrains his anger and revenge.

XXXIX. Timidity is the desire to avoid a greater evil, which we dread, by undergoing a lesser evil. Cf. III. xxxix. note.

XL. Daring is the desire, whereby a man is set on to do something dangerous which his equals fear to attempt.

XLI. Cowardice is attributed to one, whose desire is checked by the fear of some danger which his equals dare to encounter.

Explanation—Cowardice is, therefore, nothing else but the fear of some evil, which most men are wont not to fear; hence I do not reckon it among the emotions springing from desire. Nevertheless, I have chosen to explain it here, because, in so far as we look to the desire, it is truly opposed to the emotion of daring.

XLII. Consternation is attributed to one, whose desire of avoiding evil is checked by amazement at the evil which he fears.

Explanation—Consternation is, therefore, a species of cowardice. But, inasmuch as consternation arises from a double fear, it may be more conveniently defined as a fear which keeps a man so bewildered and wavering, that he is not able to remove the evil. I say bewildered, in so far as we understand his desire of removing the evil to be constrained by his amazement. I say wavering, in so far as we understand the said desire to be constrained by the fear of another evil, which equally torments him: whence it comes to pass that he knows not, which he may avert of the two. On this subject, see III. xxxix. note, and III. lii. note. Concerning cowardice and daring, see III. li. note.

XLIII. Courtesy, or deference (Humanitas seu modestia), is the desire of acting in a way that should please men, and refraining from that which should displease them.

XLIV. Ambition is the immoderate desire of power.

Explanation—Ambition is the desire, whereby all the emotions (cf. III. xxvii. and xxxi.) are fostered and strengthened; therefore this emotion can with difficulty be overcome. For, so long as a man is bound by any desire, he is at the same time necessarily bound by this. "The best men," says Cicero, "are especially led by honour. Even philosophers, when they write a book contemning honour, sign their names thereto," and so on.

XLV. Luxury is excessive desire, or even love of living sumptuously.

XLVI. Intemperance is the excessive desire and love of drinking.

XLVII. Avarice is the excessive desire and love of riches.

XLVIII. Lust is desire and love in the matter of sexual intercourse.

Explanation—Whether this desire be excessive or not, it is still called lust. These last five emotions (as I have shown in III. lvi.) have on contraries. For deference is a species of ambition. Cf. III. xxix. note.

Again, I have already pointed out, that temperance, sobriety, and chastity indicate rather a power than a passivity of the mind. It may, nevertheless, happen, that an avaricious, an ambitious, or a timid man may abstain from excess in eating, drinking, or sexual indulgence, yet avarice, ambition, and fear are not contraries to luxury, drunkenness, and debauchery. For an avaricious man often is glad to gorge himself with food and drink at another man's expense. An ambitious man will restrain himself in nothing, so long as he thinks his indulgences are secret; and if he lives among drunkards and debauchees, he will, from the mere fact of being ambitious, be more prone to those vices. Lastly, a timid man does that which he would not. For though an avaricious man should, for the sake of avoiding death, cast his riches into the sea, he will none the less remain avaricious; so, also, if a lustful man is downcast, because he cannot follow his bent, he does not, on the ground of abstention, cease to be lustful. In fact, these emotions are not so much concerned with the actual feasting, drinking, &c., as with the appetite and love of such. Nothing, therefore, can be opposed to these emotions, but high—mindedness and valour, whereof I will speak presently.

The definitions of jealousy and other waverings of the mind I pass over in silence, first, because they arise from the compounding of the emotions already described; secondly, because many of them have no distinctive names, which shows that it is sufficient for practical purposes to have merely a general knowledge of them. However, it is established from the definitions of the emotions, which we have set forth, that they all spring from desire, pleasure, or pain, or, rather, that there is nothing besides these three; wherefore each is wont to be called by a variety of names in accordance with its various relations and extrinsic tokens. If we now direct our attention to these primitive emotions, and to what has been said concerning the nature of the mind, we shall be able thus to define the emotions, in so far as they are referred to the mind only.

`,
	`
## GENERAL DEFINITION OF THE EMOTIONS

Emotion, which is called a passivity of the soul, is a confused idea, whereby the mind affirms concerning its body, or any part thereof, a force for existence (existendi vis) greater or less than before, and by the presence of which the mind is determined to think of one thing rather than another.

Explanation—I say, first, that emotion or passion of the soul is a confused idea. For we have shown that the mind is only passive, in so far as it has inadequate or confused ideas. (III. iii.) I say, further, whereby the mind affirms concerning its body or any part thereof a force for existence greater than before. For all the ideas of bodies, which we possess, denote rather the actual disposition of our own body (II. xvi. Coroll. ii.) than the nature of an external body. But the idea which constitutes the reality of an emotion must denote or express the disposition of the body, or of some part thereof, because its power of action or force for existence is increased or diminished, helped or hindered. But it must be noted that, when I say a greater or less force for existence than before, I do not mean that the mind compares the present with the past disposition of the body, but that the idea which constitutes the reality of an emotion affirms something of the body, which, in fact, involves more or less of reality than before.

And inasmuch as the essence of mind consists in the fact (II. xi., xiii.), that it affirms the actual existence of its own body, and inasmuch as we understand by perfection the very essence of a thing, it follows that the mind passes to greater or less perfection, when it happens to affirm concerning its own body, or any part thereof, something involving more or less reality than before.

When, therefore, I said above that the power of the mind is increased or diminished, I merely meant that the mind had formed of its own body, or of some part thereof, an idea involving more or less of reality, than it had already affirmed concerning its own body. For the excellence of ideas, and the actual power of thinking are measured by the excellence of the object. Lastly, I have added by the presence of which the mind is determined to think of one thing rather than another, so that, besides the nature of pleasure and pain, which the first part of the definition explains, I might also express the nature of desire.
`,
];

const Article = () => {
	return (
		<PageLayout blogwithsidebar>
			<>
				<Image
					className="mt-5"
					src="/public/images/life/mind/emotions/definitions/emotions-definition.jpg"
					alt="contrary emotions"
					size={ImageSize.MEDIUM}
				/>
				<Markdown>{content}</Markdown>
			</>
		</PageLayout>
	);
};

export default Article;
