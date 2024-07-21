import { ArticlesKeys } from "../../BLOG_CONSTANTS/_ARTICLE_PORT";
import { Image, PageLayout } from "../../src/components";
import Markdown from "../../src/components/Markdown";
import { ImageSize } from "../../src/shared/enums";
import { EthSts } from "../../src/utils/markdown";

export const PerfectionMetadata = {
	key: ArticlesKeys.Perfection,
	url: "/universe/perfection",
	path: "/pages/universe/perfection.tsx",
	featureArticle: false,
	isPublished: true,
	date: "Jul 21 2024",
	articleTitle: "Perfection or Reality",
	tags: "Spinoza, Ethics, Perfection, Reality",
	thumbnail: "/public/images/perfection.webp",
	shortIntro: "Spinoza view on perfection and reality and how they are synonymous",
	category: "Universe",
};

const content = `

# Perfection or Reality

> ${EthSts("2D6")}: Reality and perfection I use as synonymous terms.

We call infinite numbers between 0 A 1 because there is infinite numbers in between to stand.
Now if we consider any point in space as 0 and another as 1, we have infinite points to consider, because reality is infinite.


You can have all the positive (+) numbers from 0 to infinite, now you have infinite numbers, but you don't have half of them which to be negatives (-)!
Now you can consider 2 points in space, you have infinite places between them, but you don't have all of them.

Now if we consider ourselves as extended things with definite shape living in this reality,
  you would realize we finite as bodies, also everything else as matter.
From our body to the biggest galaxies are all in this extended substance (space) which is also called reality.
That's why reality is perfect, because it contains all the space, as to say, it contains all the numbers.

While we, as finite beings, perceive only a portion of this infinity, it does not diminish the perfection of the whole.
In other words, as extended things we are finite modes of this infinite substance.

<h2 id="necessity"> Necessity and Accuracy </h2>

I want to explain necessity with a simple example.


<img
  src="/public/images/universe/perfection/sniper-game-scope.jpg"
  caption="bullet calculation in a video game"
  size={ImageSize.DEFAULT}
  alt="sniper-scope-game"
/>

At the time that we shoot a bullet in a video game, it's calculations happen within a limited scope of computation.
The program with round the numbers, specially decimal ones so it can do the calculations faster.
For example the point that bullet end up in the space within the game if we say to be the coordinates [10.23][20.56],
  we see that they are finite.

Now let's talk about what happen when we shoot a bullet in nature.
The bullet that we shoot, the calculations of it will happen infinity accurate as [10.2381239812038...][20.56891273918723...].
This is what is called infinite necessity of accuracy.
The point is that everything else in nature, calculates infinity and happens exactly as it should.
This necessity is what makes everything possible exactly as it should.

Now if we look at other events that happen in the world,
  we see that because of this, it never could have happened any other way.
It follows that things could have only happened differently in our mind,
  and not in the perfect reality where everything happens in it with infinite necessity,
  exactly as it should.

> ${EthSts("2P44")}.Corollary: Hence it follows, that it is only through our imagination that we consider things, whether in respect to the future or the past, as contingent.


### Add on

Now these days based on modern physics we know that space is not infinite, but finite.
Spinoza did't knew this in that time and he based it on being infinite.
There are so little discoveries we had to be the contrary of what he said,
  and this matter also different but still yet doesn't invalidate anything else of the system.
It's just good for us to know space is container of reality that we exist in it,
  it's hugely big extended thing that we as finite things conceive under it.
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
