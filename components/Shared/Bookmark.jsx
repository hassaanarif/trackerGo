"use client";

import { useState } from "react";
import { RiBookmarkFill, RiBookmarkLine } from "react-icons/ri";
import { Box } from "../Shared/ChakraComponentsWrapper";

function Bookmark({ isActive }) {
	const [bookmark, setBookmark] = useState(isActive);
	function handleBookmarkClick() {
		setBookmark(!bookmark);
	}

	return bookmark ? (
		<Box>
			<RiBookmarkFill onClick={handleBookmarkClick} cursor={"pointer"} style={{ height: "1.5rem", width: "1.5rem" }} />
		</Box>
	) : (
		<Box>
			<RiBookmarkLine onClick={handleBookmarkClick} cursor={"pointer"} style={{ height: "1.5rem", width: "1.5rem" }} />
		</Box>
	);
}

export default Bookmark;
