import React, { useState, useEffect } from "react";
import { StyleLoader } from "./styled/Loader";
const ProgressBar = ({ prog }) => {
	const [progress, setProgress] = useState(prog ? prog : 0);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setProgress((prevProgress) => prevProgress + 10);
			if (progress >= 100) {
				clearInterval(intervalId);
			}
		}, 700);
	}, []);

	return (
		<StyleLoader>
			<div className="progress-bar">
				<div
					className="progress-bar-inner"
					style={{
						width: `${progress < 100 ? progress : 100}%`,
					}}
				/>
			</div>
		</StyleLoader>
	);
};

export default ProgressBar;
