"use client";

import { ChakraProvider as ChakraTopProvider, ColorModeScript } from "@/components/Shared/ChakraComponentsWrapper";
import theme from "@/utils/theme";

function ChakraProvider({ children }) {
	return (
		<ChakraTopProvider theme={theme}>
			<ColorModeScript initialColorMode={theme.config.initialColorMode} />
			{children}
		</ChakraTopProvider>
	);
}

export default ChakraProvider;
