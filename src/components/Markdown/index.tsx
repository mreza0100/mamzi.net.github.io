import { Image } from "../../../src/components";
import { combineClasses } from "../../utils/utils";
import styled from "styled-components";
import React from "react";
import RenderMD from "markdown-to-jsx";
import LinkTo from "../LinkTo";
import Banner from "../Banner";
import List from "../List";

type Child = React.ReactElement<IProps> | string;

interface IProps {
	children: Child | Child[];
	className?: string;
	featured?: boolean;
	title?: string;
}

export function collectTitles(md: string): string[] {
	return md.split("\n").filter(line => line.startsWith("#"));
}

const Markdown = ({ children, className }: IProps) => {
	children = Array.isArray(children) ? children : [children];
	const overrides = { img: Image, a: LinkTo, Banner, ul: List };

	return (
		<div className={combineClasses("pl-1", className)}>
			<MarkdownStyles className="shadow-lg">
				{children.map((child, index) => {
					if (typeof child === "string") {
						return (
							<RenderMD options={{ overrides }} key={index}>
								{child}
							</RenderMD>
						);
					}

					let title = null;
					if (child.props && child.props.title) {
						title = <RenderMD key={index}>{child.props.title + "\n<br />"}</RenderMD>;
					}

					return (
						<>
							{title}
							{child}
						</>
					);
				})}
			</MarkdownStyles>
		</div>
	);
};

const MarkdownStyles = styled("article")(props => ({
	padding: "0.5em",
	fontSize: "1em",
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
		// color: "blue",
	},
	"& ul": {
		paddingInlineStart: "1em",
	},
	"& li": {
		margin: "0.25em 0",
		listStyleType: "initial",
	},
	blockquote: {
		["border-left"]: "5px solid #000000",
		["padding-left"]: "1em",
		fontSize: "1.1em",
		color: "#f88400",
		["a"]: {
			color: "red",
			":hover": {
				color: "ActiveBorder",
			},
		},
	},
}));

export default Markdown;
