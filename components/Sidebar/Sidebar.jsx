import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	Flex,
	ListItem,
	Text,
	UnorderedList,
} from "@/components/Shared/ChakraComponentsWrapper";

import client from "@/public/Images/clients.png";
import dashboard from "@/public/Images/dashboard.png";
import logic from "@/public/Images/logic.png";
import mobile from "@/public/Images/mobile.png";
import tasks from "@/public/Images/task.png";
import tools from "@/public/Images/tools.png";
import tracker from "@/public/Images/tracker.png";
import users from "@/public/Images/users.png";
import Image from "next/image";
import Link from "next/link";
import SidebarToggleButton from "./SidebarToggleButton";
import SidebarWrapper from "./SidebarWrapper";
import ThemeToggleButton from "./ThemeToggleButton";

function Sidebar() {
	return (
		<SidebarWrapper>
			<Accordion fontWeight={"thin"} allowMultiple>
				<Flex as="div" alignItems="center" justifyContent="space-between" fontWeight="semibold" width="inherit" paddingX={2} height={10}>
					<Link width={"auto"} href={"/"}>
						TrackerGo
					</Link>
					<SidebarToggleButton />
				</Flex>

				<AccordionItem className="hover:bg-[var(--JL-default-hover)] transition-all ease-in rounded-md" border={"none"} marginX={2} marginY={1}>
					<AccordionButton paddingX={2} paddingY={2}>
						<Image alt="client Icon" src={client} width={20} height={20} className="mr-2 invert" />
						<Box as="span" flex="1" textAlign="left">
							Clients
						</Box>
						<AccordionIcon />
					</AccordionButton>
					<AccordionPanel fontSize={"smaller"}>
						<UnorderedList>
							<ListItem className="hover:bg-[var(--JL-default)] transition-all ease-in rounded-md">
								<Link className="w-full inline-block px-2 py-1" href={"/Clients"}>
									Clients
								</Link>
							</ListItem>
							<ListItem className="hover:bg-[var(--JL-default)] transition-all ease-in rounded-md">
								<Link className="w-full inline-block px-2 py-1" href={"/ClientGroups"}>
									Client Groups
								</Link>
							</ListItem>
							<ListItem className="hover:bg-[var(--JL-default)] transition-all ease-in rounded-md">
								<Link className="w-full inline-block px-2 py-1" href={"/SubscriptionSummary"}>
									Subscription Summary
								</Link>
							</ListItem>
						</UnorderedList>
					</AccordionPanel>
				</AccordionItem>

				<AccordionItem className="hover:bg-[var(--JL-default-hover)] transition-all ease-in rounded-md" border={"none"} marginX={2} marginY={1}>
					<AccordionButton paddingX={2} paddingY={2}>
						<Image alt="task Icon" src={tasks} width={20} height={20} className="mr-2 invert" />
						<Box as="span" flex="1" textAlign="left">
							<Link className="w-full inline-block" href={"/Tasks"}>
								Tasks
							</Link>
						</Box>
					</AccordionButton>
				</AccordionItem>

				<AccordionItem className="hover:bg-[var(--JL-default-hover)] transition-all ease-in rounded-md" border={"none"} marginX={2} marginY={1}>
					<AccordionButton paddingX={2} paddingY={2}>
						<Image alt="task Icon" src={mobile} width={20} height={20} className="mr-2 invert" />
						<Box as="span" flex="1" textAlign="left">
							Mobile
						</Box>
						<AccordionIcon />
					</AccordionButton>

					<AccordionPanel fontSize={"smaller"}>
						<UnorderedList>
							<ListItem className="hover:bg-[var(--JL-default)] transition-all ease-in rounded-md">
								<Link className="w-full inline-block px-2 py-1" href={"/MobileBackups"}>
									Mobile Backups
								</Link>
							</ListItem>
						</UnorderedList>
					</AccordionPanel>
				</AccordionItem>

				<AccordionItem className="hover:bg-[var(--JL-default-hover)] transition-all ease-in rounded-md" border={"none"} marginX={2} marginY={1}>
					<AccordionButton paddingX={2} paddingY={2}>
						<Image alt="task Icon" src={users} width={20} height={20} className="mr-2 invert" />
						<Box as="span" flex="1" textAlign="left">
							Users
						</Box>
						<AccordionIcon />
					</AccordionButton>

					<AccordionPanel fontSize={"smaller"}>
						<UnorderedList>
							<ListItem className="hover:bg-[var(--JL-default)] transition-all ease-in rounded-md">
								<Link className="w-full inline-block px-2 py-1" href={"/TrackerUsers"}>
									Tracker Users
								</Link>
							</ListItem>
							<ListItem className="hover:bg-[var(--JL-default)] transition-all ease-in rounded-md">
								<Link className="w-full inline-block px-2 py-1" href={"/JLWebUsers"}>
									JLWeb Users
								</Link>
							</ListItem>
							<ListItem className="hover:bg-[var(--JL-default)] transition-all ease-in rounded-md">
								<Link className="w-full inline-block px-2 py-1" href={"/MobileUsers"}>
									Mobile Users
								</Link>
							</ListItem>
						</UnorderedList>
					</AccordionPanel>
				</AccordionItem>

				<AccordionItem className="hover:bg-[var(--JL-default-hover)] transition-all ease-in rounded-md" border={"none"} marginX={2} marginY={1}>
					<AccordionButton paddingX={2} paddingY={2}>
						<Image alt="task Icon" src={logic} width={20} height={20} className="mr-2 invert" />
						<Box as="span" flex="1" textAlign="left">
							Logic
						</Box>
						<AccordionIcon />
					</AccordionButton>

					<AccordionPanel fontSize={"smaller"}>
						<UnorderedList>
							<ListItem className="hover:bg-[var(--JL-default)] transition-all ease-in rounded-md">
								<Link className="w-full inline-block px-2 py-1" href={"/LinkLogic"}>
									LinkLogic
								</Link>
							</ListItem>
							<ListItem className="hover:bg-[var(--JL-default)] transition-all ease-in rounded-md">
								<Link className="w-full inline-block px-2 py-1" href={"/WebLogic"}>
									WebLogic
								</Link>
							</ListItem>
						</UnorderedList>
					</AccordionPanel>
				</AccordionItem>

				<AccordionItem className="hover:bg-[var(--JL-default-hover)] transition-all ease-in rounded-md" border={"none"} marginX={2} marginY={1}>
					<AccordionButton paddingX={2} paddingY={2}>
						<Image alt="task Icon" src={dashboard} width={20} height={20} className="mr-2 invert" />
						<Box as="span" flex="1" textAlign="left">
							<Link className="w-full inline-block " href={"/Dashboards"}>
								Dashboards
							</Link>
						</Box>
					</AccordionButton>
				</AccordionItem>

				<AccordionItem className="hover:bg-[var(--JL-default-hover)] transition-all ease-in rounded-md" border={"none"} marginX={2} marginY={1}>
					<AccordionButton paddingX={2} paddingY={2}>
						<Image alt="task Icon" src={tracker} width={20} height={20} className="mr-2 invert" />
						<Box as="span" flex="1" textAlign="left">
							Tracker
						</Box>
						<AccordionIcon />
					</AccordionButton>

					<AccordionPanel fontSize={"smaller"}>
						<UnorderedList>
							<ListItem className="hover:bg-[var(--JL-default)] transition-all ease-in rounded-md">
								<Link className="w-full inline-block px-2 py-1" href={"/Roles"}>
									Roles
								</Link>
							</ListItem>
							<ListItem className="hover:bg-[var(--JL-default)] transition-all ease-in rounded-md">
								<Link className="w-full inline-block px-2 py-1" href={"/Teams"}>
									Teams
								</Link>
							</ListItem>
							<ListItem className="hover:bg-[var(--JL-default)] transition-all ease-in rounded-md">
								<Link className="w-full inline-block px-2 py-1" href={"/Tags"}>
									Tags
								</Link>
							</ListItem>
						</UnorderedList>
					</AccordionPanel>
				</AccordionItem>

				<AccordionItem className="hover:bg-[var(--JL-default-hover)] transition-all ease-in rounded-md" border={"none"} marginX={2} marginY={1}>
					<AccordionButton paddingX={2} paddingY={2}>
						<Image alt="task Icon" src={tools} width={20} height={20} className="mr-2 invert" />
						<Box as="span" flex="1" textAlign="left">
							Tools
						</Box>
						<AccordionIcon />
					</AccordionButton>
					<AccordionPanel fontSize={"smaller"}>
						<UnorderedList>
							<ListItem className="hover:bg-[var(--JL-default)] transition-all ease-in rounded-md">
								<Link className="w-full inline-block px-2 py-1" href={"/Map"}>
									Map
								</Link>
							</ListItem>
							<ListItem className="hover:bg-[var(--JL-default)] transition-all ease-in rounded-md">
								<Link className="w-full inline-block px-2 py-1" href={"/FormUpload"}>
									Form Upload
								</Link>
							</ListItem>
							<ListItem className="hover:bg-[var(--JL-default)] transition-all ease-in rounded-md">
								<Link className="w-full inline-block px-2 py-1" href={"/InboundDashboard"}>
									Inbound Dashboard
								</Link>
							</ListItem>
						</UnorderedList>
					</AccordionPanel>
				</AccordionItem>
			</Accordion>

			<Flex justifyContent={"space-between"} alignItems={"center"} paddingX={4} paddingY={2} marginTop={"auto"}>
				<Text as={"span"} fontSize={"small"} fontWeight={"semibold"}>
					Theme
				</Text>
				<ThemeToggleButton />
			</Flex>
		</SidebarWrapper>
	);
}

export default Sidebar;
