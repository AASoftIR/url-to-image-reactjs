import { ImgStyle } from "./styled/ImgStyle";
export default function ImgWrapper({ src, url }) {
	return (
		<ImgStyle>
			<img src={src} alt={url} loading="lazy" />
		</ImgStyle>
	);
}
