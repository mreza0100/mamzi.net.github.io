import { combineClasses } from "../../utils/utils";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

interface IProps {
	children: string;
	className?: string;
}

const Markdown = ({ children, className }: IProps) => {
	return (
		// padding
		<div className={combineClasses("md:p-5 p-12", className)}>
			<div className="shadow-lg p-5">
				<MarkdownStyles>
					<ReactMarkdown rehypePlugins={[rehypeRaw]}>
						{children}
					</ReactMarkdown>
				</MarkdownStyles>
			</div>
		</div>
	);
};

const MarkdownStyles = styled("article")(props => ({
	padding: "0.5em",
	fontSize: "0.9em",
	lineHeight: "1.7",
	"& p": {
		margin: "1em 0",
	},
	"& h1": {
		fontSize: "2em",
		margin: "1em 0",
	},
	"& h2": {
		fontSize: "1.5em",
		margin: "1em 0",
	},
	"& h3": {
		fontSize: "1.17em",
		margin: "1em 0",
	},
	"& h4": {
		fontSize: "1em",
		margin: "1em 0",
	},
	"& h5": {
		fontSize: "0.83em",
		margin: "1em 0",
	},
	"& h6": {
		fontSize: "0.67em",
		margin: "1em 0",
	},
	"& a": {
		color: "blue",
	},
	"& ul": {
		paddingInlineStart: "1em",
	},
	"& li": {
		margin: "0.25em 0",
		listStyleType: "initial",
	},
	"blockquote p": {
		["border-left"]: "5px solid #000000",
		["padding-left"]: "1em",
		fontSize: "1.1em",
		color: "#f88400",
	},
}));

export default Markdown;
