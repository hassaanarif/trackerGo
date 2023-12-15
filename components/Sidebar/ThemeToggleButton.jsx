"use client";

import { Switch, useColorMode } from "@/components/Shared/ChakraComponentsWrapper";

function ThemeToggleButton() {
	const { colorMode, toggleColorMode } = useColorMode();

	return <Switch colorScheme="red" id="themeToggleSwitch" isChecked={colorMode === "dark"} onChange={toggleColorMode} />;
}

export default ThemeToggleButton;
