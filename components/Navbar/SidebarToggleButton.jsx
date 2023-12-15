"use client";

import { SidebarContext } from "@/components/Sidebar/SidebarToggleProvider";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useContext } from "react";

function SidebarToggleButton() {
	const { showSidebar, toggleSidebar } = useContext(SidebarContext);

	return (
		<HamburgerIcon
			className="hover:cursor-pointer transition-all ease-in"
			boxSize={"5"}
			onClick={toggleSidebar}
			opacity={showSidebar ? 0 : 1}
			zIndex={1}
			color={"white"}
		/>
	);
}

export default SidebarToggleButton;
