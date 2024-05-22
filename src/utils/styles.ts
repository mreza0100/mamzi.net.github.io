import React from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

export function useMarkdown(): JSX.Element {
	return <ReactMarkdown rehypePlugins={[rehypeRaw]}>{markdown}</ReactMarkdown>;
}

const markdownStyles = styled("article")(props => ({
	color: "blue",
	fontSize: "1.5em",
}));
