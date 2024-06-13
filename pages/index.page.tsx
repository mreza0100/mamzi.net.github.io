import { PageLayout, Text, Image, List, LinkTo } from "../src/components";
import { ArticlesTree } from "../BLOG_CONSTANTS/_ARTICLES_LIST";
import { DEFAULT_SEO } from "../BLOG_CONSTANTS/_BLOG_SETUP";
import UltimateTree from "../src/components/Tree";
import { ImageSize } from "../src/shared/enums";
import Markdown from "../src/components/Markdown";

const Home = () => {
	return (
		<PageLayout home PAGE_SEO={DEFAULT_SEO}>
			<>
				<section className="w-full md:pt-[100px] md:pb-[70px] pt-[130px] pb-20 mb-10 dark:bg-slate-800 bg-slate-200">
					<div className="container text-center px-3">
						<Text title className="text-3xl">
							Mamzi's Blog or the Ultimate Answer to Life, the
							Universe and Everything
						</Text>

						<Text className="mt-5">
							A place to think aligned with reality or a mental
							framework
						</Text>
						<Text className="text-yellow-700 dark:text-yellow-500">
							This manifesto will be permanently under construction
							and will never finish, thank you for your patience.
						</Text>
						<Image
							className="mt-1"
							src="/public/images/42.png"
							alt="the Ultimate Answer to Life, the Universe and Everything"
							size={ImageSize.XS}
						/>
					</div>
				</section>
				<div className="container mx-auto lg:px-[15px] px-0">
					<Text>
						Unlike what you might think, the answer to life, the
						universe, and everything is not 42. It's actually 43 :D In
						the story of the
						<LinkTo href="https://en.wikipedia.org/wiki/The_Hitchhiker%27s_Guide_to_the_Galaxy">
							Hitchhiker's Guide to the Galaxy
						</LinkTo>
						, the answer to the ultimate question of life, the
						universe, and everything is 42, calculated by a so called
						supercomputer named Deep Thought. Deep thought, thought
						deeply for 7.5 million years and came up with the answer
						42!
					</Text>
					<Text>---</Text>
					<Text>Why he actually choose 42:</Text>
					<Markdown>
						{`> The answer to this is very simple. It was a joke. It had to
						be a number, an ordinary, smallish number, and I chose that
						one. Binary representations, base thirteen, Tibetan monks
						are all complete nonsense. I sat at my desk, stared into
						the garden and thought '42 will do' I typed it out. End of
						story.`}
					</Markdown>
					<Text>And 42 did it!</Text>
					<Text>
						Hitchhiker's Guide to the Galaxy is a great science fiction
						book of impossibles, and that's exactly what makes it
						interesting. It also has a movie if you don't want to read
						5 books.
					</Text>
					<Text>
						Deep thought suggested to build a new computer, in a way
						that it incorporate living beings into the computational
						matrix, and will run for 10 million years to find the
						ultimate question of life, the universe, and everything.
					</Text>
					<Text>**It's called Earth!**</Text>
					<Text>
						So the Earth was bought by the 2 white lab mice to run the
						experiment. But after 8 million years, the Earth was
						destroyed by the Vogons, and they destroyed it to build a
						new hyperspace bypass.
					</Text>
					<Text>
						Arthur a normal english person and a girl who he liked
						survived the destruction of the Earth, and they were picked
						up by the Heart of Gold, a spaceship that can travel
						through hyperspace and the story goes on.
					</Text>
					<Text>
						I consider Douglas Adams very clever with his ideas, and I
						think he was a genius in his own way. He touches on
						fundamental sensitive topics in a way that it's not
						personal, but it's funny and interesting.
					</Text>
					<Text>
						So the Earth was made by people in hyperspace to find the
						answer as it grow from the most basic form of life to the
						most complex form of life, in a deterministic way, because
						only then it's possible to form life!?
					</Text>
					<h4>Does it bell a ring for you?</h4>
					<List>
						<li>Is our world deterministic?</li>
						<li>Is our world working like a computer?</li>
						<li>Is there randomness in our world?</li>
						<li>So we are also programmed?</li>
						<li>
							If we are, what are the rules and conditions of our
							logic and emotions of mind?
						</li>
					</List>
					<Text>
						How can you model the universe and life and start proving
						how things work? Spinoza did it, and I'm trying to do
						summarize it in a different structure but with the same
						manner and context of Ethics, after that I will write about
						other topics that fit into the frame, including software
						and computer.
					</Text>
					<Text>
						The question is so big that all the other questions in the
						world fall under it!
					</Text>
					<Text>
						That's why it needs everything from the ground up to define
						again in a particularly logical way.
					</Text>
					<List className="text-md">
						<li>Matter</li>
						<li>Life</li>
						<li>Universe</li>
						<li>Emotions</li>
						<li>Thoughts</li>
						<li>Intuition</li>
						<li>Instinct</li>
						<li>Existence</li>
						<li>Consciousness</li>
						<li>Mind</li>
						<li>Body</li>
						<li>Meanings</li>
						<li>Purpose</li>
						<li>Good</li>
						<li>Evil</li>
						<li>Morality</li>
						<li>Ethics and everything</li>
					</List>
					<Text>
						What each of them are by definition of reality as a mental
						framework.
					</Text>
					<h4>Nothing is personal, but everything is logical</h4>
					<Text>
						I strive to keep it that way, and I hope you also find it
						useful.
					</Text>
					<h2>Index</h2>
					<UltimateTree articles={ArticlesTree} />
					<h4>Be my feedback loop</h4>
					<Text>
						One thing that is very different from coding and writing is
						that you don't have a feedback loop When you write code,
						the compiler tell you if it works or not, but when you
						write, no one tell you how far you are from the truth. So I
						would appreciate if you could give me feedback on what you
						think about the content of this blog, and how I can improve
						it.
					</Text>
					<h3>How do I do it?</h3>
					<Text>
						You can open a issue on the{" "}
						<LinkTo href="https://github.com/mreza0100/my-answeres-to-life-universe-everything.github.io/issues">
							GitHub repository{" "}
						</LinkTo>
						Or you can send a PR to the{" "}
						<a href="https://github.com/mreza0100/my-answeres-to-life-universe-everything.github.io">
							GitHub repository
						</a>
					</Text>
					<Text>
						Also you can send me an email to:{" "}
						<a href="mailto:mamzi.khosravivala@gmail.com">
							mamzi.khosravivala@gmail.com
						</a>
					</Text>
				</div>
			</>
		</PageLayout>
	);
};

export default Home;
