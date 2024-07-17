import YouTube from "react-youtube";
import styled from "styled-components";

export default function Youtube(props: any) {
	return (
		<StyledYoutube>
			<YouTube {...props} />
		</StyledYoutube>
	);
}

const StyledYoutube = styled.div(props => {
	return {
		display: "flex",
		justifyContent: "center",
		height: "500px",
		"> div": {
			display: "block",
			width: "85%",
			iframe: {
				width: "100%",
				height: "100%",
			},
		},
	};
});
