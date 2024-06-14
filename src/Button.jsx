import React from "react";
import { Btn } from "./styled/Button";
export default function Button({ url }) {
	return (
		<Btn>
			<a href={url} download={url} target="_blank">
				Download
			</a>
		</Btn>
	);
}
