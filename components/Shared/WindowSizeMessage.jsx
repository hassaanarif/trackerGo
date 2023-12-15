"use client";

import { useMediaQuery } from "@chakra-ui/react";

const WindowSizeMessage = ({ children }) => {
	const [isSmallerThan1000] = useMediaQuery("(max-width: 1000px)");

	if (isSmallerThan1000) {
		return <p style={{ textAlign: "center", fontSize: "16px", padding: "20px" }}>Kindly open the browser in a large window.</p>;
	}

	return children;
};

export default WindowSizeMessage;
