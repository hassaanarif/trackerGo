"use client";

import { AddIcon, Badge, Box, Button, ChevronDownIcon, Heading, Input, Tag, TagCloseButton, TagLabel, Textarea, TimeIcon, Tooltip, UnlockIcon } from "@/components/Shared/ChakraComponentsWrapper";
import { useColorModeValue, useDisclosure } from "@chakra-ui/react";
import { useRef, useState } from "react";
import TaskDescriptionHistoryModal from "./TaskDescriptionHistoryModal";

function TaskDescription({ taskData }) {
	const inputBackgroundColor = useColorModeValue("whiteAlpha.900", "blackAlpha.300");
	const anchorTagColor = useColorModeValue("linkedin.800", "linkedin.200");

	const { isOpen, onOpen, onClose } = useDisclosure();

	const [titleEditable, setTitleEditable] = useState(false);
	const [descriptionEditable, setDescriptionEditable] = useState(false);
	const [taskTitle, setTaskTitle] = useState("");
	const [taskDescription, setTaskDescription] = useState("");

	const taskDescriptionTextRef = useRef();
	const taskTitleTextRef = useRef();

	function toggleTitleInput() {
		setTaskTitle(taskTitleTextRef.current.textContent);
		setTitleEditable(!titleEditable);
	}

	function toggleDescriptionInput() {
		setTaskDescription(taskDescriptionTextRef.current.textContent);
		setDescriptionEditable(true);
	}

	return (
		<>
			<Box as={"div"} className="px-2 py-1" backgroundColor={"blackAlpha.100"}>
				{titleEditable ? (
					<Box className="mb-2">
						<Input backgroundColor={inputBackgroundColor} paddingY={0} paddingX={1} size={"sm"} className="mb-1" value={taskTitle} onChange={(event) => setTaskTitle(event.target.value)} />
						<Box className="flex items-center gap-1">
							<Button size={"xs"} colorScheme="linkedin">
								Save
							</Button>
							<Button size={"xs"} colorScheme="red" onClick={() => setTitleEditable(false)}>
								Cancel
							</Button>
						</Box>
					</Box>
				) : (
					<Box ref={taskTitleTextRef} fontWeight={"bold"} className="mb-2" as={"p"} onClick={toggleTitleInput} cursor={"pointer"}>
						{taskData?.Title}
					</Box>
				)}

				<Box as={"article"}>
					<Box className="flex items-center justify-between">
						<Heading as={"h2"} size={"sm"} fontWeight={"semibold"}>
							Description
						</Heading>
						<Box className="flex items-center gap-5">
							<Tooltip label="Task Description History">
								<TimeIcon cursor={"pointer"} onClick={onOpen} />
							</Tooltip>
							<UnlockIcon cursor={"pointer"} />
						</Box>
					</Box>
					{descriptionEditable ? (
						<Textarea backgroundColor={inputBackgroundColor} key={1} padding={1} fontSize={"xs"} rows={6} className="mt-1 overflow-y-auto resize-none" value={taskDescription} onChange={(event) => setTaskDescription(event.target.value)} textAlign={"justify"} />
					) : (
						<Box key={2} cursor={"pointer"} onClick={toggleDescriptionInput} fontSize={"xs"} className="mt-1 max-h-24 overflow-hidden text-ellipsis line-clamp-3" ref={taskDescriptionTextRef} textAlign={"justify"}>
							{taskData?.Subject}
						</Box>
					)}
					<Box className="mt-1 flex justify-between items-center" fontSize={"small"}>
						{descriptionEditable ? (
							<Box className="flex items-center gap-1">
								<Button size={"xs"} colorScheme="linkedin">
									Save
								</Button>
								<Button size={"xs"} colorScheme="red" onClick={() => setDescriptionEditable(false)}>
									Cancel
								</Button>
							</Box>
						) : (
							<Box></Box>
						)}

						{!descriptionEditable ? (
							<Box color={anchorTagColor} fontWeight={"semibold"} onClick={toggleDescriptionInput} cursor={"pointer"}>
								see more <ChevronDownIcon />
							</Box>
						) : (
							<Box></Box>
						)}
					</Box>
				</Box>
				<Box display={"flex"} alignItems={"center"} gap={2} my={2}>
					<Button flexShrink={0} size={"xs"} colorScheme="whatsapp" fontSize={"small"} leftIcon={<AddIcon width={3} height={3} />}>
						Add Intercom Link
					</Button>

					<Box display={"flex"} alignItems={"center"} gap={1} overflowX={"auto"}>
						{taskData.Tracker_Task_IntercomLinks.map((link) => {
							return (
								<Badge key={link.Id} colorScheme="purple" borderRadius={"sm"} textTransform={"lowercase"}>
									{link.Link}
								</Badge>
							);
						})}
					</Box>
				</Box>

				<Box display={"flex"} alignItems={"center"} gap={2} my={2}>
					<Button flexShrink={0} size={"xs"} colorScheme="whatsapp" fontSize={"small"} leftIcon={<AddIcon width={3} height={3} />}>
						Add Tags
					</Button>

					<Box display={"flex"} alignItems={"center"} gap={1} overflowX={"auto"}>
						{taskData.Tracker_Task_Tags.map((taskTag) => {
							return (
								<Tag size={"sm"} key={taskTag.Tracker_Tags.Id} borderRadius="md" variant="solid" backgroundColor={taskTag.Tracker_Tags.Colour}>
									<TagLabel>{taskTag.Tracker_Tags.Tracker_User_Departments?.Name + " - " + taskTag.Tracker_Tags.Description}</TagLabel>
									<TagCloseButton />
								</Tag>
							);
						})}
					</Box>
				</Box>
			</Box>

			<TaskDescriptionHistoryModal taskData={taskData} onClose={onClose} isOpen={isOpen} />
		</>
	);
}

export default TaskDescription;
