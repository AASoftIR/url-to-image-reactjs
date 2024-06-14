import styled from "styled-components";
export const StyledHead = styled.header`
	width: 35%;
	background-color: ${({ theme }) => theme.colors.header};
	padding: 12px 10px;
	border-radius: 50px;
	text-align: center;
	display: flex;
	justify-content: space-around;
	align-items: center;
	color: white;
	font-size: 2.2rem;
	font-family: "sans";
	margin: 0 auto;
	transition: all 0.5s ease;
	&:hover {
		width: 100%;
		border-radius: 0;
		font-family: "sans";

		color: #fff; /* Text color */
		text-shadow: 0 0 5px #fff, /* First layer of glow */ 0 0 10px #fff,
			/* Second layer of glow */ 0 0 15px #fff,
			/* Third layer of glow */ 0 0 20px #ff00ff,
			/* Fourth layer of glow (pink) */ 0 0 30px #ff00ff,
			/* Fifth layer of glow (pink) */ 0 0 40px #ff00ff; /* Sixth layer of glow (pink) */
	}
`;
