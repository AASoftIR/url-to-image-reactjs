import styled from "styled-components";
export const StyleLoader = styled.div`
	width: 80vw;
	height: 80vh;
	margin: 0 auto;
	position: fixed;
	left: 10%;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 100000;
	.progress-bar {
		width: 100%;
		height: 20px;
		background-color: #ccc;
		border-radius: 10px;
		margin-bottom: 20px;
	}

	.progress-bar-inner {
		height: 100%;
		background-color: #4caf50;
		border-radius: 10px;
		transition: all 0.3s;
	}
`;
