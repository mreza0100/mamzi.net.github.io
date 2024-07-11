import { TextAlign } from "../../shared/enums";
import styled from "styled-components";
import Text from "../Text";

export enum BannerColors {
	DARK_BLUE = "#1282A2",
	ORANGE = "#DB510F",
	RED = "#BD1E1E",
}

interface iBanner {
	title?: string;
	color?: string;
	children: string;
}

const Banner = ({ title, children, color }: iBanner) => {
	return (
		<BannerStyled bgcolor={color}>
			<div>
				<h3 className="md:text-xl text-[18px] font-bold cursor-pointer hover:opacity-80 transition-opacity flex justify-between md:items-center items-start">
					{title}
				</h3>
				<Text textAlign={TextAlign.CENTER} className="text-white dark:text-yellow-500">
					{children}
				</Text>
			</div>
		</BannerStyled>
	);
};

const BannerStyled = styled("div")<{ bgcolor?: string }>(props => {
	return {
		display: "flex",
		justifyContent: "center",
		margin: "20px",
		div: {
			display: "block",
			width: "90%",
			padding: "1.2rem",
			borderRadius: "1.5rem",
			backgroundColor: props.bgcolor,
			color: "white",
			h3: {
				display: "block",
				fontSize: "1.3555rem",
				textAlign: "center",
			},
			p: {
				display: "block",
				textAlign: "center",
				padding: "0.5rem",
				fontSize: "1.2rem",
			},
		},
	};
});

export default Banner;
