import Navbar from "@/components/Navbar/Navbar";
import { Box } from "@/components/Shared/ChakraComponentsWrapper";
import Providers from "@/components/Shared/Providers";
import WindowSizeMessage from "@/components/Shared/WindowSizeMessage";
import Sidebar from "@/components/Sidebar/Sidebar";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const inter = Open_Sans({ subsets: ["latin"] });

export const metadata = {
	title: "Tracker Go",
	description: "Joblogic Internal Application",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${inter.className}`}>
				<Providers>
					<WindowSizeMessage>
						<Box className="flex">
							<Sidebar />
							<Box className="flex-1 h-screen overflow-y-auto">
								<Navbar />
								{children}
							</Box>
						</Box>
					</WindowSizeMessage>
				</Providers>
			</body>
		</html>
	);
}
