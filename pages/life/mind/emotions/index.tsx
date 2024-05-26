import { Image, PageLayout } from "../../../../src/components";
import Markdown from "../../../../src/components/Markdown";
import { ImageSize } from "../../../../src/shared/enums";

const content = `

### Requirements to know:

- [Universe](/universe/)
- [Causality](/universe/causality/)
- [Mind](/life/mind/)

---

# ON THE ORIGIN AND NATURE OF THE EMOTIONS



## Introduction and motivation

> [3PREF](https://ethica.bc.edu/#/element/3PREF) Most writers on the emotions and on human conduct seem to be treating
 rather of matters outside nature than of natural
 phenomena following nature's general laws. They appear to conceive man to
 be situated in nature as a kingdom within a kingdom: for they believe
 that he disturbs rather than follows nature's order, that he has absolute control over his actions,
 and that he is determined solely by himself.

The sense of free will leads to the idea of being separated from the rest of the nature and assume ourselves contingent.
 
> They attribute human infirmities and fickleness,
 not to the power of nature in general, but to some mysterious flaw in the nature of man,
 which accordingly they bemoan, deride, despise, or, as usually happens,
 abuse.

Human mind is not perfect, there are errors because of it's complex contingent nature which we explained in the [mind](/life/mind/);
Anger, disappointment, pride, love, willing to limit someone else's life, these just don't happen by itself in a mysterious way,
There are causes that makes them happen.
If we know ourselves contingent, we would never understand and always be confused and go by the mercy of fortune.

> **He who succeeds in hitting off the weakness of the human mind more eloquently or more acutely than his fellows, is looked upon as a seer.**





---




> [3P1](https://ethica.bc.edu/#/element/3P1): Our mind is in certain cases active, and in certain cases passive. In so far as it has adequate ideas it is necessarily active, and in so far as it has inadequate ideas, it is necessarily passive.

<!-- connecting active and passing to adequate and inadequate ideas -->

#### Setting ground for active and passive mind and connection to adequacy of ideas:

> [3P3](https://ethica.bc.edu/#/element/3P3): The activities of the mind arise solely from adequate ideas; the passive states of the mind depend solely on inadequate ideas.

<!-- ether active our passive, endeavor to persist in its being for an indefinite period, and of this endeavor it is conscious. It make sense to be something instinct, in evolution, the only way all species can survive is to have this instinct to survive and reproduce. Animals have passive mode, but still strive, and if clear and distinct ideas were about to stop this process, we would have not survive to be. So mind try to survive in being as much as can with emotion and logic -->

> [3P9](https://ethica.bc.edu/#/element/3P9): The mind, both in so far as it has clear and distinct ideas, and also in so far as it has confused ideas, endeavours to persist in its being for an indefinite period, and of this endeavour it is conscious.



`;

const Article = () => {
	return (
		<PageLayout blogwithsidebar>
			<Image
				className="mt-5"
				src="/public/images/mind.jpg"
				alt="universe"
				size={ImageSize.DEFAULT}
			/>
			<Markdown>{content}</Markdown>
		</PageLayout>
	);
};

export default Article;
