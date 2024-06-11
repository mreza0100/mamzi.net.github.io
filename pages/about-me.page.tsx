/**These are necessary imports / components for the page */
import { ImageSize, TextAlign, ListType } from "../src/shared/enums";
import { PageLayout, Text, List, Image, LinkTo, Seperator, Slider } from "../src/components";
import { CURRENT_YEAR } from "../src/constants/appConstants";
import { iSEO } from "../src/shared/interfaces";

const AboutUs = () => {
	const PAGE_SEO: iSEO = {
		title: "Mamzi Khosravi - About Me",
		description: `Software developer and thinker`,
		keywords: "Mamzi Khosravi Software Engineering Thinking Philosophy",
		author: "Mamzi Khosravi",
	};
	return (
		<PageLayout PAGE_SEO={PAGE_SEO} home>
			<section className="container px-3 md:pb-20 md:pt-10 pt-20">
				<div>
					<Text
						title
						className="mb-5 mt-10 dark:text-sky-400 text-sky-600"
					>
						I'm Mamzi
					</Text>
					<Text className="text-s mb-5">
						This is an open source blog hosted by Github Pages using
						<a href="https://github.com/webexpe13/blog-template-using-nextjs-typescript-tailwindcss">
							[this template]
						</a>
					</Text>
				</div>
				<div>
					<h5>Why I made this blog?</h5>
					<span>
						This is my personal Doctrine as the guide to Life, Universe
						and everything. I have decided to make this manifesto
						online so others may use in variant ways for themselves. I
						have to point out that unfortunately this doctrine is not
						yet completed. You see, because the answer to Life,
						Universe and everything is everything, it cannot finish
						anytime soon and it will be permanently under construction.
						So thank you for your patience, I strive to write and grow
						it as I change my obsession and fit it into this wild
						picture.
					</span>
				</div>
				<div>
					<br />
					<br />
					<h2>FAQ</h2>
					<List>
						<li>
							What are the quotes I see in between text?
							<List>
								<li>
									Every quote has a reference link that you
									can check out. But it's mostly Spinoza
								</li>
							</List>
						</li>
						<li>
							Why Spinoza
							<List>
								<li>
									I have restructured Spinoza's Ethics as
									to fit into the picture of the ultimate
									question. His way of thinking and the
									Doctrine of him is spectacularly
									magnificent and wondering. It's been one
									of the best guides I have found to
									explain how life and universe works. This
									is a mental framework which helps you
									understand reality. If you are interested
									to know more, you can read
									<br />
									<a href="/everything/spinoza-ethics">
										spinoza and ethics
									</a>
								</li>
							</List>
						</li>
					</List>
				</div>
			</section>
		</PageLayout>
	);
};

export default AboutUs;
