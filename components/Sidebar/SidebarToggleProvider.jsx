"use client";

import { createContext, useState } from "react";

export const SidebarContext = createContext();

function SidebarToggleProvider({ children }) {
	const storedValue = localStorage.getItem("showSidebar");

	const [showSidebar, setShowSidebar] = useState(storedValue === null || storedValue === undefined ? true : JSON.parse(storedValue));

	const toggleSidebar = () => {
		const value = !showSidebar;
		localStorage.setItem("showSidebar", value);
		setShowSidebar(value);
	};

	return <SidebarContext.Provider value={{ showSidebar, toggleSidebar }}>{children}</SidebarContext.Provider>;
}

export default SidebarToggleProvider;
