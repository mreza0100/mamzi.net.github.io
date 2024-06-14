import { ArticlesKeys } from "../../BLOG_CONSTANTS/_ARTICLE_PORT";
import { Image, PageLayout } from "../../src/components";
import Markdown from "../../src/components/Markdown";
import { ImageSize } from "../../src/shared/enums";

export const MiraclesMetadata = {
	key: ArticlesKeys.Miracles,
	url: "/universe/miracles",
	path: "/pages/universe/miracles.tsx",
	featureArticle: true,
	isPublished: true,
	date: "May 17 2024",
	articleTitle: "Miracles",
	tags: "Spinoza, Ethics, Miracles, conditioned, contingent",
	thumbnail: "/public/images/miracles.jpg",
	shortIntro:
		"Spinoza's view on the miracles and the impossibility of breaking the laws of nature",
	category: "Universe",
};

const content = `
### Requirements to know:

- [Universe](/universe/)
- [Causality](/universe/causality/)

# Miracles

Miracles are events that happen without a cause or explanation, defying the laws of nature. We might see them as randomness, but randomness differs from unpredictability.

In the world described in Universe and Causality, miracles have no place.

To make a miracle happen, you need to break one of these laws:

- **The laws of Nature**:
  - Like when Arthur in Hitchhiker's Guide to the Galaxy flies by throwing himself to the ground and missing.
- **Creation Ex Nihilo (making something from nothing)**:
  - Matter and energy (aka substance) transform, not created or destroyed.
  - Like making a bag appear from nothing, that's not possible in our world.

We have never seen any effect without a cause.

We have never seen any cause without an effect.

We have never observed any of the rules of nature being broken in the process of causality. If it were possible to break them, we would have taken maximum advantage.

### How impossible is it to break a law of nature?

Consider a triangle; it has 3 sides and 3 angles.

<div style="text-align:left">
<img
src="/images/triangle.png"
alt="matrix"
title="hermes"
width="auto"
height="200px"
style="padding: 15px; "
/>

</div>

A + B + C = 180 degrees
This is the rule that applies to all triangles in the world.

To perform a miracle, you need to break a rule like this, which our mind knows is impossible because it's reality, and reality is perfect.

The triangle is perfect because it's impossible to break its rules, as it's part of reality. In the [perfection](/universe/perfection/) page, we discussed the deep concept of perfection.

> [1P29](https://ethica.bc.edu/#/element/1P29) "Nothing in the universe is contingent, but all things are conditioned to exist and operate in a particular manner by the necessity of the divine nature."

- Not contingent, but conditioned.
  - Nothing is free in the world; everything is conditioned by the necessity of the divine nature and can only follow its predetermined path.
- Necessity of the divine nature:
  - Like the triangle example, divine nature represents the unbreakable rules of nature due to their perfect nature.

> [1P33](https://ethica.bc.edu/#/element/1P33) "Things could have been produced by God (nature) in no other way, and in no other order than that in which they have been produced."

Assume every moment is a node in a linear graph:

1 -> 2 -> 3 -> 4 -> 5 -> 6 -> ... -> 1000

The result of the next moment follows from the previous moment, and so on.

The sequence is fixed for the future because the future results from the past. In the above example, you can predict the 1000th moment because the sequence is fixed and chained to preceding nodes. Considering a miracle's backward traversal of causes and effects, it's impossible to break the chain because it is fixed and the future is a result of the past, logically speaking.

Hume argued that the evidence for the laws of nature is so strong that breaking them is impossible, and the evidence for miracles is so weak that believing them is impossible. This relates to how to invalidate a proposition: counterexamples are effective, and the strong evidence for natural laws makes them unbreakable, whereas the weak evidence for miracles makes them unbelievable.

[more to read](https://en.wikipedia.org/wiki/Of_Miracles)

### Conclusion

Miracles are events without a cause or explanation, beyond the laws of nature. It's impossible to break the perfect laws of nature because they are part of reality, just like triangles.

### References:

[Properties of a triangle](https://www.cuemath.com/geometry/properties-of-a-triangle/)


`;

const Article = () => {
	return (
		<PageLayout blogwithsidebar>
			<>
				<Image
					className="mt-5"
					src="/public/images/miracles.jpg"
					alt=""
					size={ImageSize.DEFAULT}
				/>
				<Markdown>{content}</Markdown>
			</>
		</PageLayout>
	);
};

export default Article;
