import SideBarToggleProvider from "../Sidebar/SidebarToggleProvider";
import ChakraProvider from "./ChakraProvider";

function Providers({ children }) {
	return (
		<ChakraProvider>
			<SideBarToggleProvider>{children}</SideBarToggleProvider>
		</ChakraProvider>
	);
}

export default Providers;
