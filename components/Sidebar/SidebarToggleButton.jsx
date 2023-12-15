"use client";

import { HamburgerIcon } from "@chakra-ui/icons";
import { useContext } from "react";
import { SidebarContext } from "./SidebarToggleProvider";

function SidebarToggleButton() {
	const { showSidebar, toggleSidebar } = useContext(SidebarContext);

	return (
		<HamburgerIcon
			className="hover:cursor-pointer transition-all ease-in"
			boxSize={"5"}
			onClick={toggleSidebar}
			opacity={showSidebar ? 1 : 0}
			zIndex={1}
			color={"white"}
		/>
	);
}

export default SidebarToggleButton;
