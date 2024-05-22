/**These are necessary imports / components for the page */
import { PageLayout, Text, Image } from "../src/components";
import { DEFAULT_SEO } from "../BLOG_CONSTANTS/_BLOG_SETUP";
import Markdown from "../src/components/Markdown";
import { ImageSize } from "../src/shared/enums";
import { getPageURL } from "../src/utils/utils";
import { ArticlesKeys } from "../BLOG_CONSTANTS/_ARTICLES_LIST";

const content = `

Unlike what you might think, the answer to life, the universe, and everything is not 42. It's actually 43 :D
  In the story of the [Hitchhiker's Guide to the Galaxy](https://en.wikipedia.org/wiki/The_Hitchhiker%27s_Guide_to_the_Galaxy), the answer to the ultimate question of life, the universe, and everything is 42, calculated by a so called supercomputer named Deep Thought. Deep thought, thought deeply for 7.5 million years and came up with the answer 42!
  
  
  ---
  Why he actually choose 42:
  
  > The answer to this is very simple. It was a joke. It had to be a number, an ordinary, smallish number, and I chose that one. Binary representations, base thirteen, Tibetan monks are all complete nonsense. I sat at my desk, stared into the garden and thought '42 will do' I typed it out. End of story.
  
  And 42 did it!
  
  Hitchhiker's Guide to the Galaxy is a great since fiction book of impossibles, and that's exactly what makes it interesting.
  It also has a movie if you don't want to read 5 books.
  
  Deep thought suggested to build a new computer, in a way that it incorporate living beings into the computational matrix, and will run for 10 million years to find the ultimate question of life, the universe, and everything.
  
  **It's called Earth!**
  
  So the Earth was bought by the 2 white lab mice to run the experiment.
  But after 8 million years, the Earth was destroyed by the Vogons, and they destroyed it to build a new hyperspace bypass.
  
  Arthur a normal english person and a girl who he liked survived the destruction of the Earth, and they were picked up by the Heart of Gold, a spaceship that can travel through hyperspace and the story goes on.
  
  I consider Douglas Adams very clever with his ideas, and I think he was a genius in his own way.
  He touches on fundamental sensitive topics in a way that it's not personal, but it's funny and interesting.
  
  So the Earth was made by people in hyperspace to find the answer as it grow from the most basic form of life to the most complex form of life, in a deterministic way, because only then it's possible to form life!?
  
  ### Does it bell a ring for you?

  - **Is our world deterministic?**
  - **Is our world working like a computer?**
  - **Is there randomness in our world?**
  - **So we are also programmed?**
  - **If we are, what are the rules and conditions of our logic and emotions of mind?**
  
  How can you model the universe and life and start proving how things work? Spinoza did it, and I'm trying to do it too.
  
  #### The story doesn't make sense
  
  - It states that the area of the Universe is infinite.
  - There is a restaurant at the end of the universe, so it's not infinite!
  - It states that the Universe is the same size as the mind of the person who is thinking about it, so it fits in the mind of the person who is thinking about it!
  
  The question is so big that all the other questions in the world fall under it!
  
  The very first thing is to define these things:
  
  - Matter
  - Life
  - Universe
  - Emotions
  - Thoughts
  - Intuition
  - Instinct
  - Existence
  - Consciousness
  - Mind
  - Body
  - Meanings
  - Purpose
  - Good
  - Evil
  - Morality
  - Ethics and everything
  
  What I'm talking about is a logically proof of life universe and how it works in a way that it makes sense to everything for everyone.
  
  #### **Almost nothing here is personal, but mostly logical.**
  
  I strive to keep it that way, and I hope you also find it useful.

  # Index
  
  - [Universe](${getPageURL(ArticlesKeys.Universe)})
       - [Building blocks](${getPageURL(ArticlesKeys.BuildingBlocks)})
       - [Concerning God or Nature](${getPageURL(ArticlesKeys.God)})
       - [Causality](${getPageURL(ArticlesKeys.Causality)})
       - [Miracles](${getPageURL(ArticlesKeys.Miracles)})
  - [Life](${getPageURL(ArticlesKeys.Life)})
       - [Mind](${getPageURL(ArticlesKeys.Mind)})
       - [Body](${getPageURL(ArticlesKeys.Body)})
       - [Meaning](${getPageURL(ArticlesKeys.Meaning)})
  - Everything
    
    - [Spinoza and Ethics](${getPageURL(ArticlesKeys.SpinozaEthics)})

       
  ### Be my feedback loop
  
  One thing that is very different from coding and writing is that you don't have a feedback loop
  When you write code, the compiler tell you if it works or not, but when you write, no one tell you how far you are from the truth.
  So I would appreciate if you could give me feedback on what you think about the content of this blog, and how I can improve it.
  
  #### How do I do it?
  
  You can open a issue on the [GitHub repository](https://github.com/mreza0100/my-answeres-to-life-universe-everything.github.io/issues)
  Or you can send a PR to the [GitHub repository](https://github.com/mreza0100/my-answeres-to-life-universe-everything.github.io)
  
  Also you can send me an email to: [mamzi.khosravivala@gmail.com](mailto:mamzi.khosravivala@gmail.com)
  
  <!--
  - [Ethics and Spinoza]({{ site.baseurl }}/roadmap/ethics.html)
  - Cause and affect
  - Our perspective, understanding and point of view
  - Substance, Mode and attributes
  
       - Mind
            - Logic
                 - Consciousness logic
                 - Intuitive logic
            - Emotions
                 - Natural emotion
                 - Intuitive emotion
            - Subconscious
                 - Memory
                 - Instinct
                 - Intuition
            - Idea
                 - Concept
                 - Belief
                 - Knowledge
                 - Wisdom
            - Interface
                 - Sensations
                 - Controllers
       - Body
  
            - Evolution
                 - Natural selection
                 - Nature brutality brute force
  
  - Universe
  
       - Nature
       - Substance
       - Advanced cause and affect
       - Existence
  
       - Death
       - Free will
       - Purpose
       - Meaning
       - Good and evil
       - Perfection
       - Morality
       - Intelligent growth pattern -->

`;

const Home = () => {
	return (
		<PageLayout home PAGE_SEO={DEFAULT_SEO}>
			<section className="w-full md:pt-[100px] md:pb-[70px] pt-[130px] pb-20 mb-10 dark:bg-slate-800 bg-slate-200">
				<div className="container text-center px-3">
					<Text title className="text-3xl">
						The Ultimate Answer to Life, the Universe, and Everything
					</Text>

					<Text subtitle className="mt-5 text-xl">
						By M.Khosravivala - inspired by Spinoza and Douglas Adams!
					</Text>
					<Image
						className="mt-4"
						src="/public/images/42.png"
						alt="nextjs-simple-blog-template"
						size={ImageSize.SMALL}
					/>
				</div>
			</section>
			<div className="container mx-auto lg:px-[15px] px-0">
				<Markdown>{content}</Markdown>
			</div>
		</PageLayout>
	);
};

export default Home;
