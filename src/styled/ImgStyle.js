import styled from "styled-components";
export const ImgStyle = styled.div`
	margin: 30px auto;
	display: flex;
	justify-content: center;
	align-items: center;
	aspect-ratio: video;
	transition: all 0.4s ease;

	img {
		border-radius: 18px;
		width: 70%;
		height: auto;
		filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.8));
		transition: all 0.4s ease;
	}

	img:hover {
		cursor: pointer;
		scale: 1.5;
		z-index: 1000;
	}
`;
