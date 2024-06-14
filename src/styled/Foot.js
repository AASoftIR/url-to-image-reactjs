import styled from "styled-components";

export const FooterContainer = styled.footer`
	background-color: ${(props) => props.theme.colors.footer};
	color: white;
	text-align: center;
	padding: 20px 0;
	width: 100%;
	position:fixed;
	bottom:0;
	left:0
	margin-top: 50px;
	transition:all 0.5s ease;
	&:hover{
			text-shadow: 0 0 5px #fff, /* First layer of glow */ 0 0 10px #fff,
			/* Second layer of glow */ 0 0 15px #fff,
			/* Third layer of glow */ 0 0 20px #ff00ff,
			/* Fourth layer of glow (pink) */ 0 0 30px #ff00ff,
			/* Fifth layer of glow (pink) */ 0 0 40px #ff00ff; /* Sixth layer of glow (pink) */}
`;

export const FooterText = styled.p`
	margin: 0;
`;
