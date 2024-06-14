import styled from "styled-components";
export const InputStyle = styled.div`
	display: block;
	input {
		display: block;
		width: 100%;
		border: 2px solid #ccc;
		border-radius: 0.5px;
		background-color: rgba(255, 255, 255, 0.2);
		padding: 12px 20px;
		box-sizing: border-box;
		transition: 0.3s;
		caret-color: rgb(0, 200, 0);
		color: #fff; /* Text color */
		text-shadow: 0 0 30px #00ff00; /* Green glow effect */
	}
	input::placeholder {
		color: #fff; /* Text color */
		text-shadow: 0 0 30px #00ff00; /* Green glow effect */
	}

	input:focus {
		border-color: #4caf50;
		outline: none;
	}
`;
