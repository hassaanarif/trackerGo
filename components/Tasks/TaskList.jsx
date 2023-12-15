"use client";

import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Badge,
	Box,
	ListItem,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	Text,
	UnorderedList,
	Link,
	useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";
import { InfoIcon, StarIcon, TimeIcon } from "@chakra-ui/icons";
import moment from "moment/moment";

function TaskList({ tasks }) {
	const value = useColorModeValue("blackAlpha.50", "whiteAlpha.100");

	return (
		<Box as="section">
			<Tabs position={"relative"} variant="enclosed-colored">
				<TabList paddingX={2}>
					<Tab borderTopLeftRadius={3} _selected={{ color: "white", bg: "var(--JL-default)" }} background={value}>
						UK
						<Badge marginLeft={2} variant="outline" colorScheme="whatsapp" borderRadius={"base"}>
							{tasks.length}
						</Badge>
					</Tab>
					<Tab borderTopRightRadius={3} _selected={{ color: "white", bg: "var(--JL-default)" }} background={value}>
						US
						<Badge marginLeft={2} variant="outline" colorScheme="whatsapp" borderRadius={"base"}>
							{tasks.length - 10}
						</Badge>
					</Tab>
				</TabList>
				<TabPanels>
					<TabPanel margin={0} padding={0}>
						<Accordion allowMultiple>
							{tasks.map((task) => {
								return (
									<AccordionItem key={task.Id}>
										<AccordionButton margin={0} justifyContent={"space-between"} paddingX={2} paddingY={0}>
											<Box fontWeight={"medium"} display={"flex"} flexDirection={"column"} alignItems={"start"} flexBasis={"25%"}>
												<Link as={NextLink} href={`/TaskDetail/${task.Id}`} fontWeight={"bold"} fontSize={"lg"} color="blue.600">
													{task.Id}
												</Link>
												<Text fontSize={"small"} textAlign={"left"}>
													{moment(task.Timestamp).format("DD/MM/YYYY HH:mm:ss")}
												</Text>
											</Box>

											<Box
												fontWeight={"medium"}
												display={"flex"}
												fontSize={"small"}
												marginLeft={2}
												flexDirection={"column"}
												alignItems={"start"}
												textAlign={"left"}
												flexBasis={"25%"}
											>
												<Text>
													Client:{" "}
													<Link as={NextLink} href={"/ClientDetail/1234"} color="blue.600">
														{task.Company?.Name}
													</Link>
												</Text>
												<Text>
													Client Group:{" "}
													<Link as={NextLink} href={"/ClientGroupDetail/1234"} color="blue.600">
														{task.Company?.Tracker_Client_Groups?.Name}
													</Link>
												</Text>
											</Box>

											<Box
												fontWeight={"medium"}
												display={"flex"}
												fontSize={"small"}
												marginLeft={2}
												flexDirection={"column"}
												alignItems={"start"}
												textAlign={"left"}
												flexBasis={"25%"}
											>
												<Text>
													Logged By:{" "}
													<Link as={NextLink} href={"/TrackerUserDetail/1234"} color="blue.600">
														{task.Tracker_Users_Tracker_Tasks_LoggedByUserIdToTracker_Users?.Name}
													</Link>
												</Text>
												<Text>
													Assigned By:{" "}
													<Link as={NextLink} href={"/TrackerUserDetail/1234"} color="blue.600">
														{task.Tracker_Users_Tracker_Tasks_AllocatedToUserIdToTracker_Users?.Name}
													</Link>
												</Text>
											</Box>

											<Box display={"flex"} gap={1} flexBasis={"25%"} justifyContent={"flex-end"}>
												<StarIcon fontSize={"larger"} />
												<InfoIcon fontSize={"larger"} />
												<TimeIcon fontSize={"larger"} />
												<AccordionIcon fontSize={"larger"} />
											</Box>
										</AccordionButton>
										<AccordionPanel fontSize={"smaller"}>
											<UnorderedList>
												<ListItem>
													<Box>Client</Box>
												</ListItem>
											</UnorderedList>
										</AccordionPanel>
									</AccordionItem>
								);
							})}
						</Accordion>
					</TabPanel>

					<TabPanel>Panel 2 data goes here</TabPanel>
				</TabPanels>
			</Tabs>
		</Box>
	);
}

export default TaskList;
