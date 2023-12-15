"use client";
import {
	Box,
	Checkbox,
	ChevronDownIcon,
	Heading,
	Input,
	InputGroup,
	InputRightElement,
	RepeatIcon,
	SearchIcon,
	Select,
	Tag,
	TagCloseButton,
	TagLabel,
} from "@/components/Shared/ChakraComponentsWrapper";
import { useColorModeValue } from "@chakra-ui/react";
import { useEffect, useState } from "react";

function TaskSearch() {
	const taskSearchBackgroundColor = useColorModeValue("#353535", "gray.700");
	const inputBackgroundColor = useColorModeValue("white", "gray.800");
	const inputFontColor = useColorModeValue("black", "");
	const eventListItemHoverBackground = useColorModeValue("#CCCCCC", "gray.700");
	const eventListDropdownBackground = useColorModeValue("white", "gray.800");
	const selectListDropdown = useColorModeValue("#353535", "");

	const [toggleEventList, setToggleEventList] = useState(false);

	useEffect(() => {
		const handleClickOutside = () => setToggleEventList(false);

		document.addEventListener("click", handleClickOutside);

		return () => document.removeEventListener("click", handleClickOutside);
	});

	return (
		<Box backgroundColor={taskSearchBackgroundColor} className="mx-2 mt-1 py-1 px-2" borderTopRightRadius={"5px"} borderTopLeftRadius={"5px"}>
			<Heading as={"h3"} marginBottom={2} size={"sm"} fontWeight={"semibold"} color={"whiteAlpha.900"}>
				Event List
			</Heading>
			<Box className="flex items-center justify-between gap-2">
				<InputGroup size={"xs"} flexBasis={"200%"} color={inputFontColor} backgroundColor={inputBackgroundColor}>
					<InputRightElement backgroundColor={"blue.500"}>
						<SearchIcon color="whiteAlpha.900" />
					</InputRightElement>
					<Input type="tel" placeholder="Phone number" />
				</InputGroup>

				<Select size={"xs"} placeholder="All Departments" color={inputFontColor} backgroundColor={inputBackgroundColor}>
					<option value="option1">Option 1</option>
					<option value="option2">Option 2</option>
					<option value="option3">Option 3</option>
				</Select>

				<Select size={"xs"} placeholder="All Departments" color={inputFontColor} backgroundColor={inputBackgroundColor}>
					<option value="option1">Option 1</option>
					<option value="option2">Option 2</option>
					<option value="option3">Option 3</option>
				</Select>
			</Box>

			<Heading marginBottom={2} marginTop={2} size={"xs"} fontWeight={"semibold"} color={"whiteAlpha.900"}>
				Event Types
			</Heading>

			<Box position={"relative"}>
				<Box
					className="flex items-center justify-between"
					backgroundColor={inputBackgroundColor}
					rounded={"base"}
					onClick={() => setToggleEventList(!toggleEventList)}
					cursor={"pointer"}
					border={"1px solid var(--chakra-colors-whiteAlpha-400)"}
				>
					<Box overflowX={"auto"} className="min-h-3 flex items-center gap-2 px-2 py-1" onClick={(e) => e.stopPropagation()}>
						<Tag size="sm" colorScheme="gray" borderRadius="md" border={"1px solid #CCCCCC"} flexShrink={0}>
							<Box borderRadius={"full"} className="h-3 w-3" backgroundColor={"orange"} mr={2}></Box>
							<TagLabel fontWeight={"semibold"}>Notes</TagLabel>
							<TagCloseButton />
						</Tag>
					</Box>

					<ChevronDownIcon mr={1} fontSize={"xl"} />
				</Box>

				<Box
					backgroundColor={eventListDropdownBackground}
					rounded={"base"}
					mt={2}
					maxHeight={"150px"}
					overflowY={"auto"}
					position={"absolute"}
					top={"100%"}
					width={"100%"}
					border={"1px solid #CCCCCC"}
					display={toggleEventList ? "block" : "none"}
					zIndex={1}
				>
					<Box className="flex gap-2 items-center" _hover={{ backgroundColor: eventListItemHoverBackground }} rounded={"sm"}>
						<Checkbox id="event-Note" ml={2} my={2} colorScheme="whatsapp" />
						<Box borderRadius={"full"} className="h-4 w-4" backgroundColor={"orange"}></Box>
						<Box as="label" htmlFor="event-Note" fontSize={"sm"} flexGrow={1} cursor={"pointer"}>
							Notes
						</Box>
					</Box>
					<Box className="flex gap-2 items-center" _hover={{ backgroundColor: eventListItemHoverBackground }} rounded={"sm"}>
						<Checkbox id="event-Attachment" ml={2} my={2} colorScheme="whatsapp" />
						<Box borderRadius={"full"} className="h-4 w-4" backgroundColor={"red"}></Box>
						<Box as="label" htmlFor="event-Attachment" fontSize={"sm"} flexGrow={1} cursor={"pointer"}>
							Attachments
						</Box>
					</Box>
					<Box className="flex gap-2 items-center" _hover={{ backgroundColor: eventListItemHoverBackground }} rounded={"sm"}>
						<Checkbox id="event-JiraLink" ml={2} my={2} colorScheme="whatsapp" />
						<Box borderRadius={"full"} className="h-4 w-4" backgroundColor={"blue"}></Box>
						<Box as="label" htmlFor="event-JiraLink" fontSize={"sm"} flexGrow={1} cursor={"pointer"}>
							Jira Link
						</Box>
					</Box>
					<Box className="flex gap-2 items-center" _hover={{ backgroundColor: eventListItemHoverBackground }} rounded={"sm"}>
						<Checkbox id="event-TitleChange" ml={2} my={2} colorScheme="whatsapp" />
						<Box borderRadius={"full"} className="h-4 w-4" backgroundColor={"green"}></Box>
						<Box as="label" htmlFor="event-TitleChange" fontSize={"sm"} flexGrow={1} cursor={"pointer"}>
							Title Change
						</Box>
					</Box>
				</Box>
			</Box>

			<Box className="flex items-center justify-between mt-2" color={"white"} fontSize={"xs"}>
				<Box className="flex items-center gap-5">
					<Box className="flex items-center gap-2">
						<Box fontWeight={"semibold"} color={"gray.300"}>
							Found:{" "}
						</Box>
						<Box>40 Events</Box>
					</Box>

					<Box className="flex items-center gap-2">
						<Box fontWeight={"semibold"} color={"gray.300"}>
							Order By:
						</Box>
						<Select size={"xs"} backgroundColor={selectListDropdown} outline={"none"} border={"none"}>
							<option style={{ backgroundColor: selectListDropdown }} value="option1">
								Old To New
							</option>
							<option style={{ backgroundColor: selectListDropdown }} value="option2">
								New To Old
							</option>
						</Select>
					</Box>
				</Box>

				<Box className="flex items-center gap-5">
					<Box className="flex items-center gap-2">
						<Checkbox id="expandAllCheckbox" colorScheme="whatsapp" color={"gray.300"} />
						<Box as="label" htmlFor="expandAllCheckbox" cursor={"pointer"}>
							Expand All
						</Box>
					</Box>
					<Box className="flex items-center gap-2" cursor={"pointer"}>
						<RepeatIcon width={4} height={4} />
						<Box>Clear and Reset</Box>
					</Box>
				</Box>
			</Box>
		</Box>
	);
}

export default TaskSearch;
