import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";
import { combineClasses } from "../../utils/utils";
import styled from "styled-components";

const Pre = styled("pre")`
	text-align: left;
	overflow: hidden;
	font-size: 14px;
	border-radius: 6px;
	overflow: auto;
	max-height: 350px;

	& .token-line {
		line-height: 1.3em;
		height: 1.3em;
	}
`;

const CodeBlock = ({ code, className }: { code: string; className?: string }) => {
	return (
		<div className={combineClasses("bg-blue-500 md:p-5 p-2", className)}>
			<div className="shadow-lg">
				<Highlight {...defaultProps} theme={theme} code={code} language="tsx">
					{({ className, style, tokens, getLineProps, getTokenProps }) => (
						<Pre className={className} style={style}>
							{tokens.map((line, i) => (
								<div
									{...getLineProps({ line, key: i })}
									key={Math.random()}>
									{line.map((token, key) => (
										<span
											{...getTokenProps({
												token,
												key,
											})}
											key={Math.random()}
										/>
									))}
								</div>
							))}
						</Pre>
					)}
				</Highlight>
			</div>
		</div>
	);
};

export default CodeBlock;
