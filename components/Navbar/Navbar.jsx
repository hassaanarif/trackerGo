import SidebarToggleButton from "@/components/Navbar/SidebarToggleButton";
import { Avatar, Box } from "@/components/Shared/ChakraComponentsWrapper";

export default function Navbar() {
	return (
		<Box as="nav" className={"flex px-2 justify-between items-center h-10 sticky top-0 z-[1]  bg-[var(--JL-default)]"}>
			<SidebarToggleButton />
			<Box className="items-center justify-end">
				<Avatar bg="grey" width={8} height={8} />
			</Box>
		</Box>
	);
}
