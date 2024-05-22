import { Image, PageLayout } from "../../src/components";
import Markdown from "../../src/components/Markdown";
import { ImageSize } from "../../src/shared/enums";

const content = `

## Still working on this one

> [2D6](https://ethica.bc.edu/#/element/2D6) - Reality and perfection I use as synonymous terms.



`;

const Article = () => {
	return (
		<PageLayout blogwithsidebar>
			<Image
				className="mt-5"
				src="/public/images/perfection.webp"
				alt=""
				size={ImageSize.DEFAULT}
			/>
			<Markdown>{content}</Markdown>
		</PageLayout>
	);
};

export default Article;
