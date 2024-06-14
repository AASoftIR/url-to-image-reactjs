import { Container } from "./styled/Container";
import { ThemeProvider } from "styled-components";
import Header from "./Header";
import { Global } from "./styled/Global";
import { useState, useEffect } from "react";
import ImgWrapper from "./ImgWrapper";
import LoadingComponent from "./Loader";
import Button from "./Button";
import { InputStyle } from "./styled/Input";
import { FooterContainer, FooterText } from "./styled/Foot";

const theme = {
	colors: {
		header: "rgba(0, 0, 139,0.6)",
		footer: "rgba(0, 0, 139,0.3)",
	},
};
const App = () => {
	const [imgItem, setImgItem] = useState("google.com");
	const [load, setLoad] = useState(true);
	useEffect(() => {
		setTimeout(() => setLoad(false), 2700);
	}, [load]);

	return (
		<ThemeProvider theme={theme}>
			<Global />
			<Header />
			{load ? <LoadingComponent prog={0} /> : ""}
			<Container>
				<Container>
					<InputStyle>
						<input
							type="url"
							onInput={(e) => {
								try {
									const urlRegex = /^[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+$/;

									if (urlRegex.test(e.target.value.trim())) {
										setImgItem(e.target.value.trim());
										setLoad(true);
									}
								} catch (err) {
									throw err;
								}
							}}
							placeholder="Type The Url..."
						/>
					</InputStyle>
				</Container>
				{!load ? (
					<ImgWrapper
						src={
							"https://api.screenshotone.com/take?access_key=" +
							import.meta.env.VITE_TOKEN_APP +
							"&url=https%3A%2F%2F" +
							imgItem +
							"&viewport_width=1920&viewport_height=1080&device_scale_factor=1&image_quality=80&format=jpg&block_ads=true&block_cookie_banners=true&full_page=false&block_trackers=true&block_banners_by_heuristics=false&delay=0&timeout=60"
						}
						alt={imgItem}
					/>
				) : (
					""
				)}
				{!load ? (
					<Button
						url={
							"https://api.screenshotone.com/take?access_key=" +
							import.meta.env.VITE_TOKEN_APP +
							"&url=https%3A%2F%2F" +
							imgItem +
							"&viewport_width=1920&viewport_height=1080&device_scale_factor=1&image_quality=80&format=jpg&block_ads=true&block_cookie_banners=true&full_page=false&block_trackers=true&block_banners_by_heuristics=false&delay=0&timeout=60"
						}
					/>
				) : (
					""
				)}
			</Container>
			<FooterContainer>
				<FooterText>
					© 2024 AASoft{" "}
					<a href="https://github.com/AASoftIR">
						Github: https://github.com/AASoftIR
					</a>{" "}
					All Rights Reserved.
				</FooterText>
			</FooterContainer>
		</ThemeProvider>
	);
};

export default App;
