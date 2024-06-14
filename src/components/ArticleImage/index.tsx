import classes from "./Images.module.scss";
import { ImageSize } from "../../shared/enums";
import { combineClasses, transformImagePaths } from "../../utils/utils";
import Zoom from "react-medium-image-zoom";
import LinkTo from "../LinkTo";

interface IArticleImage {
	src: string;
	key?: any;
	caption?: string;
	size?: ImageSize;
	alt?: string;
	className?: string;
	source?: string;
}
const Image = ({
	src,
	key,
	caption,
	size = ImageSize.DEFAULT,
	alt,
	className,
	source,
}: IArticleImage) => {
	return (
		<div
			key={key}
			className={combineClasses(
				classes.article_image,
				classes.article_image__wrapper,
				className,
				classes["size_" + size],
				"display-block mx-auto my-5",
			)}>
			<Zoom>
				<img
					src={transformImagePaths(src)}
					alt={alt}
					width="100%"
					className={combineClasses("block")}
				/>
			</Zoom>
			{caption && (
				<p
					className={combineClasses(
						classes.article_image__caption,
						"mb-0 mt-2 text-sm w-full text-center",
					)}>
					{caption}
				</p>
			)}
			{source && (
				<p
					className={combineClasses(
						classes.article_image__caption,
						"mb-0 mt-2 text-sm w-full text-center",
					)}>
					<LinkTo newTab href={source}>
						source
					</LinkTo>
				</p>
			)}
		</div>
	);
};

export default Image;
