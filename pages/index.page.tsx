import { ArticleParam, ArticlesTree } from "../BLOG_CONSTANTS/_ARTICLES_LIST";
import { PageLayout, Text, Image, LinkTo, List } from "../src/components";
import { ArticlesKeys } from "../BLOG_CONSTANTS/_ARTICLE_PORT";
import { DEFAULT_SEO } from "../BLOG_CONSTANTS/_BLOG_SETUP";
import UltimateTree from "../src/components/Tree";
import { ImageSize } from "../src/shared/enums";

export const HomeMetadata: ArticleParam = {
	key: ArticlesKeys.Home,
	url: "/",
	path: "/pages/.tsx",
	featureArticle: true,
	isPublished: true,
	articleTitle: "Mamzi's Blog",
	category: "Universe",
	shortIntro:
		"The home page of the ultimate answer to life, the universe, and everything.",
	thumbnail: "/public/images/42.png",
	tags: "life, universe, everything, answer, question, blog, 42",
	date: "May 22 2024",
};

const Home = () => {
	// TODO: use FeaturedArticleSection here later
	return (
		<PageLayout home PAGE_SEO={DEFAULT_SEO}>
			<>
				<div className="w-full md:pt-[100px] md:pb-[70px] pt-[130px] pb-20 mb-10 dark:bg-slate-800 bg-slate-200">
					<div className="container text-center px-3">
						<Text title className="text-3xl">
							Mamzi's Blog or the Ultimate Answer to Life, the Universe and Everything
						</Text>

						<Text className="mt-5 dark:text-yellow-400">
							A peaceful and authentic mental framework based on Spinoza's Ethics
						</Text>

						<Image
							className="mt-1"
							src="/public/images/42.png"
							alt="the Ultimate Answer to Life, the Universe and Everything"
							size={ImageSize.XS}
						/>
					</div>
				</div>
				<div className="container mx-auto lg:px-[15px] px-0">
					<h3>What you will see in this blog</h3>
					<Text>
						A summary of Spinoza's ethics restructured to the ultimate tree, and the rest
						after that will be other things that I write about
					</Text>
					<Text>
						Spinoza's Ethics is a perfect base for ultimate answer, Spinoza has proved the
						fundamentals of the Universe, life, mind and everything! through reading it I
						discovered many proven facts of the world which made me rethink of almost
						everything I knew.
					</Text>
					<Text>
						Ethics does not have any contradiction with nature or itself, it's completely
						scientific and based on facts. its the book of mental state and happiness that
						comes with a deep peace.
					</Text>
					<h3>The ultimate answer and its story</h3>
					<div>
						But about the ultimate answer, it's coming from{" "}
						<a href="https://en.wikipedia.org/wiki/The_Hitchhiker%27s_Guide_to_the_Galaxy">
							Hitchhiker's Guide to the Galaxy
						</a>{" "}
						Hitchhiker's Guide to the Galaxy is a science fiction story which people from
						hyperspace make a computer called deep thought to answer the question, it took
						6.5 million years for it to deeply think of the answer and come up with 42!
						Then it suggested to make a computational deterministic matrix to work for 10
						million years to compute the final result, but it accidentally destroyed
						because the president thought his signing a autograph for a fan, and not the
						destruction of a planet.
						<Image
							className="mt-1"
							src="/images/deep-thought.png"
							alt="Deep Thought"
							size={ImageSize.DEFAULT}
						/>
						{/*  */}
						The computational matrix was called Earth! made by people in hyperspace(the
						world of improbability) to find the answer of how and why life began. Because
						it's only possible in a deterministic world to form life.
						<h4>
							<strong>Does it bell a ring for you?</strong>
						</h4>
						<List>
							<li>Is our world deterministic?</li>
							<li>Is our world working like a computer?</li>
							<li>Is there randomness in our world?</li>
							<li>So then are we also programmed?</li>
							<li>
								If we are mechanical, and there is no randomness, then the path of our
								life is also determined?
							</li>
							<li>
								And lastly, what is the only way to overcome and reach freedom in a
								predetermined system
							</li>
						</List>
					</div>
					<h2>Why you should want to know Ethics?</h2>
					<section>
						<Text>
							Spinoza, realizing that we all primarily seek happiness, he set out to find
							supreme and unending happiness. He saw that most people try to achieve
							happiness through three primary avenues:
						</Text>
						<List>
							<li>wealth</li>
							<li>popularity</li>
							<li>sensual pleasure</li>
						</List>
						<Text>
							Noticing that these avenues do not lead to happiness, he sought and found a
							path that did lead to happiness and detailed it in his Ethics. His method
							was meticulously logical and didn’t depend on spirits, mystery, or wishful
							thinking. It depended on understanding the true nature of things.
						</Text>
						<a href="https://www.youtube.com/watch?v=mSm2le8mDFM">Source</a>
					</section>
					<h2>Ultimate Tree - Pivot on Ethics to ultimate answer</h2>
					<UltimateTree articles={ArticlesTree} />
					<h4>Be my feedback loop</h4>
					<h3>How do I do it?</h3>

					<Text>
						You can open a issue on the{" "}
						<LinkTo href="https://github.com/mreza0100/my-answeres-to-life-universe-everything.github.io/issues">
							Issues{" "}
						</LinkTo>
						Or you can send a PR to the{" "}
						<a href="https://github.com/mreza0100/my-answeres-to-life-universe-everything.github.io">
							GitHub repository
						</a>
					</Text>
					<Text>
						Also you can send me an email to:{" "}
						<a href="mailto:mamzi.khosravivala@gmail.com">mamzi.khosravivala@gmail.com</a>
					</Text>
				</div>
			</>
		</PageLayout>
	);
};

export default Home;
