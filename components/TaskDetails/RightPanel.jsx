"use client";
import { Alert, AlertIcon, Box, Link, Tab, TabList, TabPanel, TabPanels, Tabs } from "@/components/Shared/ChakraComponentsWrapper";
import DropdownMenu from "@/components/Shared/DropdownMenu";
import { Divider, useColorModeValue } from "@chakra-ui/react";
import moment from "moment";
import { Link as NextLink } from "next/link";

function RightPanel() {
	const departmentDivBackgroundColor = useColorModeValue("lightgray", "gray.600");
	const linkTextColor = useColorModeValue("blue.600", "blue.200");

	return (
		<Tabs>
			<TabList>
				<Tab fontSize={"small"} fontWeight={"bold"} padding={2}>
					Task Details
				</Tab>
				<Tab fontSize={"small"} fontWeight={"bold"} padding={2}>
					Client Details
				</Tab>
			</TabList>

			<TabPanels>
				{/* Task Info panel */}

				<TabPanel padding={2} margin={0}>
					<Box display={"flex"} alignItems={"center"} mb={2}>
						<Box as="label" flexBasis={"40%"} fontSize={"small"} fontWeight={"bold"}>
							Owner:
						</Box>
						<Box flexBasis={"60%"}>
							<DropdownMenu
								dataSource={[
									{ id: 1, text: "Hassaan", department: "Dev UK" },
									{ id: 2, text: "Khawaja", department: "Dev UK" },
									{ id: 3, text: "Jason", department: "Dev UK" },
									{ id: 4, text: "Abdullah", department: "Dev UK" },
									{ id: 5, text: "Harris", department: "Data Analyst" },
									{ id: 6, text: "Majid", department: "Data Analyst" },
									{ id: 7, text: "Haroon", department: "Micro Sales" },
									{ id: 8, text: "Qureshi", department: "Micro Sales" },
									{ id: 9, text: "Humayun", department: "Technical Support" },
								]}
								groupBy={"department"}
								defaultId={1}
							/>
						</Box>
					</Box>

					<Box display={"flex"} alignItems={"center"} mb={2}>
						<Box as="label" flexBasis={"40%"}></Box>
						<Box minHeight={"30px"} backgroundColor={departmentDivBackgroundColor} width={"100%"} flexBasis={"60%"} fontSize={"small"} borderRadius={"base"} padding={1}>
							<Box as="p" fontWeight={"bold"}>
								Department:
							</Box>
							<Link as={NextLink} color={linkTextColor}>
								Development UK
							</Link>
						</Box>
					</Box>

					<Box display={"flex"} alignItems={"center"} mb={2}>
						<Box as="label" flexBasis={"40%"} fontSize={"small"} fontWeight={"bold"}>
							Product:
						</Box>
						<Box flexBasis={"60%"}>
							<DropdownMenu
								dataSource={[
									{ id: 1, text: "Hassaan", department: "Dev UK" },
									{ id: 2, text: "Khawaja", department: "Dev UK" },
									{ id: 3, text: "Jason", department: "Dev UK" },
									{ id: 4, text: "Abdullah", department: "Dev UK" },
									{ id: 5, text: "Harris", department: "Data Analyst" },
									{ id: 6, text: "Majid", department: "Data Analyst" },
									{ id: 7, text: "Haroon", department: "Micro Sales" },
									{ id: 8, text: "Qureshi", department: "Micro Sales" },
									{ id: 9, text: "Humayun", department: "Technical Support" },
								]}
								groupBy={"department"}
								defaultId={1}
							/>
						</Box>
					</Box>
					<Box display={"flex"} alignItems={"center"} mb={2}>
						<Box as="label" flexBasis={"40%"} fontSize={"small"} fontWeight={"bold"}>
							Call Type:
						</Box>
						<Box flexBasis={"60%"}>
							<DropdownMenu
								dataSource={[
									{ id: 1, text: "Hassaan", department: "Dev UK" },
									{ id: 2, text: "Khawaja", department: "Dev UK" },
									{ id: 3, text: "Jason", department: "Dev UK" },
									{ id: 4, text: "Abdullah", department: "Dev UK" },
									{ id: 5, text: "Harris", department: "Data Analyst" },
									{ id: 6, text: "Majid", department: "Data Analyst" },
									{ id: 7, text: "Haroon", department: "Micro Sales" },
									{ id: 8, text: "Qureshi", department: "Micro Sales" },
									{ id: 9, text: "Humayun", department: "Technical Support" },
								]}
								groupBy={"department"}
								defaultId={1}
							/>
						</Box>
					</Box>
					<Box display={"flex"} alignItems={"center"} mb={2}>
						<Box as="label" flexBasis={"40%"} fontSize={"small"} fontWeight={"bold"}>
							Domain:
						</Box>
						<Box flexBasis={"60%"}>
							<DropdownMenu
								dataSource={[
									{ id: 1, text: "Hassaan", department: "Dev UK" },
									{ id: 2, text: "Khawaja", department: "Dev UK" },
									{ id: 3, text: "Jason", department: "Dev UK" },
									{ id: 4, text: "Abdullah", department: "Dev UK" },
									{ id: 5, text: "Harris", department: "Data Analyst" },
									{ id: 6, text: "Majid", department: "Data Analyst" },
									{ id: 7, text: "Haroon", department: "Micro Sales" },
									{ id: 8, text: "Qureshi", department: "Micro Sales" },
									{ id: 9, text: "Humayun", department: "Technical Support" },
								]}
								groupBy={"department"}
								defaultId={1}
							/>
						</Box>
					</Box>
					<Box display={"flex"} alignItems={"center"} mb={2}>
						<Box as="label" flexBasis={"40%"} fontSize={"small"} fontWeight={"bold"}>
							Sub Category:
						</Box>
						<Box flexBasis={"60%"}>
							<DropdownMenu
								dataSource={[
									{ id: 1, text: "Hassaan", department: "Dev UK" },
									{ id: 2, text: "Khawaja", department: "Dev UK" },
									{ id: 3, text: "Jason", department: "Dev UK" },
									{ id: 4, text: "Abdullah", department: "Dev UK" },
									{ id: 5, text: "Harris", department: "Data Analyst" },
									{ id: 6, text: "Majid", department: "Data Analyst" },
									{ id: 7, text: "Haroon", department: "Micro Sales" },
									{ id: 8, text: "Qureshi", department: "Micro Sales" },
									{ id: 9, text: "Humayun", department: "Technical Support" },
								]}
								groupBy={"department"}
								defaultId={1}
							/>
						</Box>
					</Box>
					<Box display={"flex"} alignItems={"center"} mb={2}>
						<Box as="label" flexBasis={"40%"} fontSize={"small"} fontWeight={"bold"}>
							Requested By:
						</Box>
						<Box flexBasis={"60%"}>
							<DropdownMenu
								dataSource={[
									{ id: 1, text: "Hassaan", department: "Dev UK" },
									{ id: 2, text: "Khawaja", department: "Dev UK" },
									{ id: 3, text: "Jason", department: "Dev UK" },
									{ id: 4, text: "Abdullah", department: "Dev UK" },
									{ id: 5, text: "Harris", department: "Data Analyst" },
									{ id: 6, text: "Majid", department: "Data Analyst" },
									{ id: 7, text: "Haroon", department: "Micro Sales" },
									{ id: 8, text: "Qureshi", department: "Micro Sales" },
									{ id: 9, text: "Humayun", department: "Technical Support" },
								]}
								groupBy={"department"}
								defaultId={1}
							/>
						</Box>
					</Box>

					<Box display={"flex"} alignItems={"center"} mb={2}>
						<Box as="label" flexBasis={"40%"}></Box>
						<Box minHeight={"30px"} backgroundColor={departmentDivBackgroundColor} width={"100%"} flexBasis={"60%"} fontSize={"small"} borderRadius={"base"} padding={1}>
							<Box display={"flex"} gap={1}>
								<Box as="p" fontWeight={"bold"}>
									Type:
								</Box>
								<Box as="span"> Main</Box>
							</Box>
							<Box display={"flex"} gap={1}>
								<Box as="p" fontWeight={"bold"}>
									Telephone:
								</Box>
								<Box as="span"> +92 30090092</Box>
							</Box>
							<Box display={"flex"} gap={1}>
								<Box as="p" fontWeight={"bold"}>
									Email:
								</Box>
								<Link href="mailto:abcd@gmail.com" color={linkTextColor}>
									{" "}
									abcd@gmail.com
								</Link>
							</Box>
						</Box>
					</Box>

					<Box display={"flex"} alignItems={"center"} mb={2}>
						<Box as="label" flexBasis={"40%"} fontSize={"small"} fontWeight={"bold"}>
							Source:
						</Box>
						<Box flexBasis={"60%"}>
							<DropdownMenu
								dataSource={[
									{ id: 1, text: "Hassaan", department: "Dev UK" },
									{ id: 2, text: "Khawaja", department: "Dev UK" },
									{ id: 3, text: "Jason", department: "Dev UK" },
									{ id: 4, text: "Abdullah", department: "Dev UK" },
									{ id: 5, text: "Harris", department: "Data Analyst" },
									{ id: 6, text: "Majid", department: "Data Analyst" },
									{ id: 7, text: "Haroon", department: "Micro Sales" },
									{ id: 8, text: "Qureshi", department: "Micro Sales" },
									{ id: 9, text: "Humayun", department: "Technical Support" },
								]}
								groupBy={"department"}
								defaultId={1}
							/>
						</Box>
					</Box>

					<Divider border={"1px solid lightgray"} marginTop={5} />

					<Box fontSize={"small"} mt={4}>
						<Box display={"flex"} gap={1}>
							<Box as="p" fontWeight={"bold"}>
								Time Since Logged:
							</Box>
							<Box as="span"> 4D 20H 33M</Box>
						</Box>

						<Box display={"flex"} gap={1}>
							<Box as="p" fontWeight={"bold"}>
								Completed Count:
							</Box>
							<Box as="span"> 2</Box>
						</Box>

						<Box display={"flex"} gap={1}>
							<Box as="p" fontWeight={"bold"}>
								Logged At:
							</Box>
							<Box as="span"> {moment().format("DD/MM/YYYY HH:mm")}</Box>
						</Box>

						<Box display={"flex"} gap={1}>
							<Box as="p" fontWeight={"bold"}>
								Logged By:
							</Box>
							<Box as="span">Khawaja Hassaan Arif</Box>
						</Box>
					</Box>
				</TabPanel>

				{/* Client Info panel */}

				<TabPanel padding={2} margin={0}>
					<Box fontSize={"small"}>
						<Box display={"flex"} gap={1}>
							<Box as="p" fontWeight={"bold"}>
								Client:
							</Box>
							<Link> Plumbcare</Link>
						</Box>
						<Box display={"flex"} gap={1}>
							<Box as="p" fontWeight={"bold"}>
								Group:
							</Box>
							<Link> Plumbcare Group</Link>
						</Box>
						<Box display={"flex"} gap={1}>
							<Box as="p" fontWeight={"bold"}>
								Account Manager:
							</Box>
							<Link> Hassaan Khawaja</Link>
						</Box>
						<Box display={"flex"} gap={1}>
							<Box as="p" fontWeight={"bold"}>
								Team:
							</Box>
							<Link> Alpha Romeo</Link>
						</Box>
						<Box display={"flex"} gap={1}>
							<Box as="p" fontWeight={"bold"}>
								Main Telephone:
							</Box>
							<Link> +92 310092001</Link>
						</Box>
						<Box display={"flex"} gap={1}>
							<Box as="p" fontWeight={"bold"}>
								Main Email:
							</Box>
							<Link> abcd@gmail.com</Link>
						</Box>
						<Box display={"flex"} gap={1}>
							<Box as="p" fontWeight={"bold"}>
								Primary User:
							</Box>
							<Link>Hassaan Khawaja</Link>
						</Box>
						<Box display={"flex"} gap={1}>
							<Box as="p" fontWeight={"bold"} flexShrink={0}>
								Tenant ID:
							</Box>
							<Link whiteSpace={"pre-wrap"}>179883ed-b117-4e85-9bb1-3a48d6ef2c94</Link>
						</Box>
						<Box display={"flex"} gap={1}>
							<Box as="p" fontWeight={"bold"}>
								Country:
							</Box>
							<Link>Pakistan</Link>
						</Box>
						<Box display={"flex"} gap={1}>
							<Box as="p" fontWeight={"bold"}>
								Shard Key:
							</Box>
							<Link>A000</Link>
						</Box>

						<Box mt={2} display={"flex"} flexDirection={"column"} gap={1}>
							<Alert status="error" borderRadius={"base"} padding={1}>
								<AlertIcon />
								There was an error processing your request
							</Alert>
							<Alert status="info" borderRadius={"base"} padding={1}>
								<AlertIcon />
								There was an error processing your request
							</Alert>
							<Alert status="success" borderRadius={"base"} padding={1}>
								<AlertIcon />
								There was an error processing your request
							</Alert>
							<Alert status="warning" borderRadius={"base"} padding={1}>
								<AlertIcon />
								There was an error processing your request
							</Alert>
						</Box>
					</Box>
				</TabPanel>
			</TabPanels>
		</Tabs>
	);
}

export default RightPanel;
