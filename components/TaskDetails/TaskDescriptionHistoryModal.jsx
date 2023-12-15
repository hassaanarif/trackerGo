"use client";

import { Box, Button, Flex, Heading, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalOverlay } from "@/components/Shared/ChakraComponentsWrapper";
import { useColorModeValue } from "@chakra-ui/react";
import moment from "moment";

function TaskDescriptionHistoryModal({ taskData, isOpen, onClose }) {
	const historyModalBackgoundColor = useColorModeValue("#FFF", "gray.800");
	const historyModalTextBackgoundColor = useColorModeValue("#EEE", "gray.700");

	return (
		<Modal isOpen={isOpen} onClose={onClose} motionPreset="slideInBottom">
			<ModalOverlay />
			<ModalContent maxWidth={""} width={"60%"} height={"80vh"} backgroundColor={historyModalBackgoundColor}>
				<Flex py={1} px={5} alignItems={"center"} justifyContent={"space-between"} borderBottom={"1px solid #CCC"}>
					<Heading fontSize={"md"} fontWeight={"bold"}>
						Description History
					</Heading>
					<ModalCloseButton position={""} size={"md"} />
				</Flex>
				<ModalBody paddingX={5} overflowY={"auto"}>
					{taskData.Tracker_Task_Audit.filter((event) => event.FieldName === "Subject").map((subject) => {
						return (
							<>
								<Box mt={3} mb={1} fontSize={"xs"}>
									{moment(subject.Timestamp).format("DD/MM/YYYY HH:mm:ss") + " - Updated By " + subject.Tracker_Users.Name + " - " + subject.Tracker_Users.Tracker_User_Departments.Name}
								</Box>
								<Box fontSize={"xs"} backgroundColor={historyModalTextBackgoundColor} border={"1px solid lightgrey"} borderRadius={"base"} px={1}>
									{subject.FieldValue}
								</Box>
							</>
						);
					})}
				</ModalBody>

				<ModalFooter>
					<Button colorScheme="whatsapp" size={"sm"} onClick={onClose}>
						Close
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
}

export default TaskDescriptionHistoryModal;
