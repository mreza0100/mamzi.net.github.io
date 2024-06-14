import { List } from "..";
import LinkTo from "../LinkTo";
import Text from "../Text";
import { ArticlesTree, FindArticleByPath } from "../../../BLOG_CONSTANTS/_ARTICLES_LIST";
import { getPageURL } from "../../utils/utils";
import { useRouter } from "next/router";
import { ArticlesKeys } from "../../../BLOG_CONSTANTS/_ARTICLE_PORT";
import { IArticleBranch, IArticlesTree } from "../../shared/interfaces";

interface IProps {
	articles?: IArticlesTree;
}

export default function UltimateTree({ articles = ArticlesTree }: IProps) {
	const branches = normalizeTree(articles);
	const router = useRouter();

	const currentArticle = FindArticleByPath(router.pathname);

	return (
		<List>
			{branches.map(b => {
				const isThisCurrentPage = currentArticle?.key === b.key;
				b.title = isThisCurrentPage ? b.title + " - You are here" : b.title;
				return (
					<li key={b.key}>
						{b.shallow ?
							<Text>{b.title}</Text>
						:	<LinkTo newTab={false} href={b.url || ""}>
								{b.title}
							</LinkTo>
						}
						{b.children && <UltimateTree articles={b.children} />}
					</li>
				);
			})}
		</List>
	);
}

function normalizeTree(articles: IArticlesTree | undefined): IArticleBranch[] {
	articles = articles ?? [];
	const result: IArticleBranch[] = [];

	for (let i = 0; i < articles.length; i++) {
		const branch: IArticleBranch = {
			title: "",
			key: ArticlesKeys.Home,
			url: "",
			children: [],
			shallow: false,
		};

		const art = articles[i];
		if (typeof art === "string") {
			branch.key = art;
			branch.url = getPageURL(art);
			branch.title = art;
		} else {
			branch.key = art.key;
			branch.title = art.title || art.key;
			branch.children = normalizeTree(art.children);
			branch.shallow = art.shallow;
			branch.url = branch?.shallow ? undefined : getPageURL(art.key);
		}
		result.push(branch);
	}

	return result;
}
