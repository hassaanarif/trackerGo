"use client";

import { Box } from "@/components/Shared/ChakraComponentsWrapper";
import { useContext } from "react";
import { SidebarContext } from "./SidebarToggleProvider";

function SidebarWrapper({ children }) {
	const { showSidebar } = useContext(SidebarContext);
	return (
		<Box
			as={"aside"}
			className={`sidebar overflow-y-auto h-screen bg-[var(--JL-default)] text-white flex flex-col transition-all ease-in ${
				showSidebar ? "w-44" : "w-0"
			}`}
		>
			{children}
		</Box>
	);
}

export default SidebarWrapper;
