import { Image, PageLayout } from "../../src/components";
import Markdown from "../../src/components/Markdown";
import { ImageSize } from "../../src/shared/enums";

const content = `

### Requirements to know:

- [Universe](/universe/)
- [Causality](/universe/causality/)

# Life

So far we talked that everything is substance.
And substance is conditioned by nature to act in a certain way.
We also talked in the [Building Blocks](/universe/building-blocks/) that everything is made of the same substance which is nature, our body and mind are also substance.

### How did life start and evolve?

Life started as a simple cell and evolved into more complex organisms over time, this is called evolution.
From Spinoza's point of view, each cell is the cause of the next cell, and so on, until we get to the most complex organism through which is us, humans.

I left this part of life to Darwin, he did a great job explaining how life evolved from simple cells to complex organisms, and how we are all connected to each other as living beings.
He has a book called [On the Origin of Species](https://en.wikipedia.org/wiki/On_the_Origin_of_Species), which explains how life evolved from simple cells to complex organisms.

> [2D1](https://ethica.bc.edu/#/element/2D1) - By body I mean a mode which expresses in a certain determinate manner the essence of God, in so far as he is considered as an extended thing.

Your body is a mode/state of the essence of God/Nature which is in specific shape and form.

> [2P11](https://ethica.bc.edu/#/element/2P11) - The first element, which constitutes the actual being of the human mind, is the idea of some particular thing actually existing.

Our perception of our body is the very first element of our mind that constitutes our being.

### What do all beings struggle for?

> [3P6](https://ethica.bc.edu/#/element/3P6) - Each thing, as far as it can by its own power, strives to persevere in its being.

Strive to be and exist more in this world, if our goal was anything else than this, our generation would not continue surviving.

- Struggle for survival ( [Conatus](https://en.wikipedia.org/wiki/Conatus) )
- Struggle for well being ( quality of life )

> [4P4](https://ethica.bc.edu/#/element/4P4) It is impossible, that man should not be a part of Nature, or that he should be capable of undergoing no changes, save such as can be understood through his nature only as their adequate cause.

It's impossible not to be part of nature.
And it's impossible to be capable of confronting nature and not be affected by it.

> [4P4Corollary](https://ethica.bc.edu/#/element/4P40Corollary) Hence it follows, that man is necessarily always a prey to his passions, that he follows and obeys the general order of nature, and that he accommodates himself thereto, as much as the nature of things demands.

All are the prey to their passions( emotions/desires ), which is part of the general order of nature.

> [4P21](https://ethica.bc.edu/#/element/4P21) We can never be by free will the cause of any of our actions, but always the necessary cause.

Because all living beings are part of the nature, and nature is governed by laws, and we are governed by nature, so we can never be free. Our actions are always the necessary cause of the nature.

> [2P31](https://ethica.bc.edu/#/element/2P31) - Will cannot be called a free cause, but only a necessary cause.

Will is not a free cause, but a necessary cause. It's necessary for us to have a will to survive and reproduce, it's not free.

> [2P31Coroll.1](https://ethica.bc.edu/#/element/2P31Coroll1) - Hence it follows, first, that God does not act according to freedom of the will.

God(substance = all living beings = you) does not act according to freedom of the will, but by necessity.

### What kind of things we call living beings?

Anything with a physical form and mind is a living being.

### Conclusion

Life is a struggle for existence and well-being, and all beings are part of nature and governed by its laws.
We are not free, but necessary causes of our actions, and our will is not free, but a necessary cause. God does not act according to freedom of the will, but by necessity.

### To demonstrate this:

When we look at animals in the wild world eating each other, we don't feel pity or interrupt, because we know about the cycle of life and how it works between animals and in nature. We accepted that animals do not have free will and act based on there instincts and needs.
But we have not accepted this for matter for ourselves since we believe that we have the ability of thinking and we gain free will because of it, but that's not the case, since all living beings are part of nature and governed by its laws, and we are governed by nature, so we can never be free. Now with this point of view, consider world events and how people act, and you will see that it's all part of the general order of nature and everything is necessary.

`;

const Article = () => {
	return (
		<PageLayout blogwithsidebar>
			<>
				<Image
					className="mt-5"
					src="/public/images/life.webp"
					alt="universe"
					size={ImageSize.DEFAULT}
				/>
				<Markdown>{content}</Markdown>
			</>
		</PageLayout>
	);
};

export default Article;
