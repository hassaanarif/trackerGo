"use client";

import { useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import { CgClose } from "react-icons/cg";
import { PiPlayFill, PiStopFill } from "react-icons/pi";
import AlertDialogReuseable from "../Shared/AlertDialogReuseable";
import { Box, Button, FormControl, FormLabel, Input, Menu, MenuButton, MenuList, Spinner, Textarea } from "../Shared/ChakraComponentsWrapper";
import DropdownMenu from "../Shared/DropdownMenu";

function TimeLog() {
	const [loading, setLoading] = useState(false);
	const [isTimeLogged, setIsTimeLogged] = useState(false);
	const { isOpen, onOpen, onClose } = useDisclosure();

	function handlePlayIconClick() {
		setLoading(true);

		setTimeout(() => {
			setLoading(false);
			setIsTimeLogged(true);
		}, 1000);
	}
	function handleAlertYes() {
		onClose();
		setLoading(true);

		setTimeout(() => {
			setLoading(false);
			setIsTimeLogged(false);
		}, 1000);
	}

	if (loading)
		return (
			<Box display={"flex"} gap={1} alignItems={"center"}>
				<Spinner color="red.500" />
			</Box>
		);

	if (!isTimeLogged)
		return (
			<Box display={"flex"} gap={1} alignItems={"center"}>
				<PiPlayFill style={{ width: "1.5rem", height: "1.5rem", fill: "limegreen" }} cursor={"pointer"} onClick={handlePlayIconClick} />
			</Box>
		);

	return (
		<>
			<Box display={"flex"} gap={1} alignItems={"center"}>
				<Menu>
					{({ onClose }) => (
						<>
							<MenuButton>
								<PiStopFill style={{ width: "1.5rem", height: "1.5rem", fill: "orange" }} />
							</MenuButton>
							<MenuList px={2} py={1} minW={"20vw"}>
								<FormControl>
									<FormLabel mb={0} fontSize={"sm"}>
										Start Date And Time{" "}
										<Box as="span" color={"red"}>
											*
										</Box>
									</FormLabel>
									<Input type="datetime-local" p={1} size={"small"} fontSize={"sm"} borderRadius={"md"} />
								</FormControl>

								<FormControl mt={2}>
									<FormLabel mb={0} fontSize={"sm"}>
										End Date And Time{" "}
										<Box as="span" color={"red"}>
											*
										</Box>
									</FormLabel>
									<Input type="datetime-local" p={1} size={"small"} fontSize={"sm"} isRequired borderRadius={"md"} />
								</FormControl>

								<FormControl mt={2}>
									<FormLabel mb={0} fontSize={"sm"}>
										Note{" "}
										<Box as="span" color={"red"}>
											*
										</Box>
									</FormLabel>
									<Textarea resize={"none"} rows={6} padding={1} fontSize={"sm"} />
								</FormControl>

								<FormControl mt={2}>
									<FormLabel mb={0} fontSize={"sm"}>
										Status{" "}
										<Box as="span" color={"red"}>
											*
										</Box>
									</FormLabel>
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
								</FormControl>

								<Box display={"flex"} gap={1} alignItems={"center"} justifyContent={"flex-end"} mt={2}>
									<Button colorScheme="red" size={"xs"} onClick={onClose}>
										Close
									</Button>
									<Button colorScheme={"whatsapp"} size={"xs"}>
										Save
									</Button>
								</Box>
							</MenuList>
						</>
					)}
				</Menu>

				<CgClose color="red" style={{ width: "1.5rem", height: "1.5rem" }} cursor={"pointer"} onClick={onOpen} />
			</Box>

			<AlertDialogReuseable heading="Discard Logged Time?" description="Are you sure you want to discard the logged time?" isOpen={isOpen} onClose={onClose} onYes={handleAlertYes} />
		</>
	);
}

export default TimeLog;
