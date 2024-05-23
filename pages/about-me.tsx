/**These are necessary imports / components for the page */
import { ImageSize, TextAlign, ListType } from "../src/shared/enums";
import { PageLayout, Text, List, Image, LinkTo, Seperator, Slider } from "../src/components";
import { CURRENT_YEAR } from "../src/constants/appConstants";
import { iSEO } from "../src/shared/interfaces";

const AboutUs = () => {
	const PAGE_SEO: iSEO = {
		title: "Mamzi Khosravi - About Me",
		description: `A software engineer with a common sense`,
		keywords: "Mamzi Khosravi Software Engineering Thinker Philosophy",
		author: "Mamzi Khosravi",
	};
	return (
		<PageLayout PAGE_SEO={PAGE_SEO} home>
			<section className="container px-3 md:pb-20 md:pt-10 pt-20">
				<div className="">
					<Text
						title
						className="mb-5 mt-10 dark:text-sky-400 text-sky-600"
					>
						My name is Mamzi
					</Text>
					<Text subtitle className="text-xl mb-5">
						This is an open source blog hosted by Github Pages and used
						<a href="https://github.com/webexpe13/blog-template-using-nextjs-typescript-tailwindcss">
							blog-template-using-nextjs-typescript-tailwindcss
						</a>
						as it's react template.
					</Text>
				</div>

				<Text>
					I have made this blog to write my ideas and thoughts about
					everything.
					<br />
					This is a good chance for me to write my thoughts in an organized
					way. Also it's a good thing to work with React as it's been a
					while I haven't touched these stuffs.
				</Text>
				<h3>Why did I named it like this?</h3>
				<Text>
					Because this way I can write about any topic I want. I can write.
				</Text>

				<h3>Why Spinoza?</h3>
				<Text>
					Spinoza has answered the question before, after reading and
					understanding him, I found a framework of thinking to proof
					reality and the world we live in. So I decided to restructure it
					in the context of ultimate question and use it as the framework
					of my blog, so others can also use. So far, this has been my most
					ambitious attempt to get into details of any Philosophy and I
					have the goal in mind to complete it over the time of my life.
				</Text>

				<h3>What is the purpose of this blog?</h3>
				<Text>
					Just writing, human does do everything with an end goal in mind,
					but I just want to do This. This blog with grow as my
					observations change over time.
				</Text>
			</section>
		</PageLayout>
	);
};

export default AboutUs;
