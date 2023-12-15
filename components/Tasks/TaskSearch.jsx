"use client";

import { RepeatIcon, SearchIcon } from "@chakra-ui/icons";
import { Button, Checkbox, Flex, Box, Input, Select, SimpleGrid, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";

function TaskSearch() {
	return (
		<Flex
			flexWrap={"wrap"}
			gap={2}
			paddingY={2}
			paddingX={2}
			direction={{ base: "column", md: "row" }}
			// backgroundColor={`${mode === "dark" ? "blackAlpha.500" : "whiteAlpha.900"}`}
		>
			<Box as={"div"} fontSize={"x-small"} flexGrow={1} flexBasis={{ base: 0, md: 150 }}>
				<Text marginBottom={1} fontWeight={"bold"}>
					Search
				</Text>
				<Input
					placeholder="Search"
					borderRadius={3}
					size={"xs"}
					// backgroundColor={`${mode === "dark" ? "blackAlpha.500" : "whiteAlpha.900"}`}
				/>
			</Box>
			<Box as={"div"} fontSize={"x-small"} flexGrow={1} flexBasis={{ base: 0, md: 150 }}>
				<Text marginBottom={1} fontWeight={"bold"}>
					Search By
				</Text>
				<Select
					borderRadius={3}
					fontSize={"x-small"}
					outline={"none"}
					size={"xs"}
					// backgroundColor={`${mode === "dark" ? "blackAlpha.500" : "whiteAlpha.900"}`}
				>
					<option value="option1">Option 1</option>
					<option value="option2">Option 2</option>
					<option value="option3">Option 3</option>
				</Select>
			</Box>
			<Box as={"div"} fontSize={"x-small"} flexGrow={1} flexBasis={{ base: 0, md: 150 }}>
				<Text marginBottom={1} fontWeight={"bold"}>
					Priority
				</Text>
				<Select
					borderRadius={3}
					fontSize={"x-small"}
					outline={"none"}
					size={"xs"}
					// backgroundColor={`${mode === "dark" ? "blackAlpha.500" : "whiteAlpha.900"}`}
				>
					<option value="option1">Option 1</option>
					<option value="option2">Option 2</option>
					<option value="option3">Option 3</option>
				</Select>
			</Box>
			<Box as={"div"} fontSize={"x-small"} flexGrow={1} flexBasis={{ base: 0, md: 150 }}>
				<Text marginBottom={1} fontWeight={"bold"}>
					DateLogged
				</Text>
				<Input
					fontSize={"x-small"}
					type="date"
					placeholder="Search"
					borderRadius={3}
					size={"xs"}
					// backgroundColor={`${mode === "dark" ? "blackAlpha.500" : "whiteAlpha.900"}`}
				/>
			</Box>
			<Box as={"div"} fontSize={"x-small"} flexGrow={1} flexBasis={{ base: 0, md: 150 }}>
				<Text marginBottom={1} fontWeight={"bold"}>
					Source
				</Text>
				<Select
					borderRadius={3}
					fontSize={"x-small"}
					outline={"none"}
					size={"xs"}
					// backgroundColor={`${mode === "dark" ? "blackAlpha.500" : "whiteAlpha.900"}`}
				>
					<option value="option1">Option 1</option>
					<option value="option2">Option 2</option>
					<option value="option3">Option 3</option>
				</Select>
			</Box>
			<Box as={"div"} fontSize={"x-small"} flexGrow={1} flexBasis={{ base: 0, md: 150 }}>
				<Text marginBottom={1} fontWeight={"bold"}>
					Call Type
				</Text>
				<Select
					borderRadius={3}
					fontSize={"x-small"}
					outline={"none"}
					size={"xs"}
					// backgroundColor={`${mode === "dark" ? "blackAlpha.500" : "whiteAlpha.900"}`}
				>
					<option value="option1">Option 1</option>
					<option value="option2">Option 2</option>
					<option value="option3">Option 3</option>
				</Select>
			</Box>
			<Box as={"div"} fontSize={"x-small"} flexGrow={1} flexBasis={{ base: 0, md: 150 }}>
				<Text marginBottom={1} fontWeight={"bold"}>
					Status
				</Text>
				<Select
					borderRadius={3}
					fontSize={"x-small"}
					outline={"none"}
					size={"xs"}
					// backgroundColor={`${mode === "dark" ? "blackAlpha.500" : "whiteAlpha.900"}`}
				>
					<option value="option1">Option 1</option>
					<option value="option2">Option 2</option>
					<option value="option3">Option 3</option>
				</Select>
			</Box>
			<Box as={"div"} fontSize={"x-small"} flexGrow={1} flexBasis={{ base: 0, md: 150 }}>
				<Text marginBottom={1} fontWeight={"bold"}>
					Order By
				</Text>
				<Select
					borderRadius={3}
					fontSize={"x-small"}
					outline={"none"}
					size={"xs"}
					// backgroundColor={`${mode === "dark" ? "blackAlpha.500" : "whiteAlpha.900"}`}
				>
					<option value="option1">Option 1</option>
					<option value="option2">Option 2</option>
					<option value="option3">Option 3</option>
				</Select>
			</Box>
			<Box as={"div"} fontSize={"x-small"} flexGrow={1} flexBasis={{ base: 0, md: 150 }}>
				<Text marginBottom={1} fontWeight={"bold"}>
					Department
				</Text>
				<Select
					borderRadius={3}
					fontSize={"x-small"}
					outline={"none"}
					size={"xs"}
					// backgroundColor={`${mode === "dark" ? "blackAlpha.500" : "whiteAlpha.900"}`}
				>
					<option value="option1">Option 1</option>
					<option value="option2">Option 2</option>
					<option value="option3">Option 3</option>
				</Select>
			</Box>
			<Box as={"div"} fontSize={"x-small"} flexGrow={1} flexBasis={{ base: 0, md: 150 }}>
				<Text marginBottom={1} fontWeight={"bold"}>
					Assigned To
				</Text>
				<Select
					borderRadius={3}
					fontSize={"x-small"}
					outline={"none"}
					size={"xs"}
					// backgroundColor={`${mode === "dark" ? "blackAlpha.500" : "whiteAlpha.900"}`}
				>
					<option value="option1">Option 1</option>
					<option value="option2">Option 2</option>
					<option value="option3">Option 3</option>
				</Select>
			</Box>
			<Box as={"div"} fontSize={"x-small"} flexGrow={1} flexBasis={{ base: 0, md: 150 }}>
				<Text marginBottom={1} fontWeight={"bold"}>
					Logged By
				</Text>
				<Select
					borderRadius={3}
					fontSize={"x-small"}
					outline={"none"}
					size={"xs"}
					// backgroundColor={`${mode === "dark" ? "blackAlpha.500" : "whiteAlpha.900"}`}
				>
					<option value="option1">Option 1</option>
					<option value="option2">Option 2</option>
					<option value="option3">Option 3</option>
				</Select>
			</Box>
			<Box as={"div"} fontSize={"x-small"} flexGrow={1} flexBasis={{ base: 0, md: 150 }}>
				<Text marginBottom={1} fontWeight={"bold"}>
					Domain
				</Text>
				<Select
					borderRadius={3}
					fontSize={"x-small"}
					outline={"none"}
					size={"xs"}
					// backgroundColor={`${mode === "dark" ? "blackAlpha.500" : "whiteAlpha.900"}`}
				>
					<option value="option1">Option 1</option>
					<option value="option2">Option 2</option>
					<option value="option3">Option 3</option>
				</Select>
			</Box>
			<Box as={"div"} fontSize={"x-small"} flexGrow={1} flexBasis={{ base: 0, md: 150 }}>
				<Text marginBottom={1} fontWeight={"bold"}>
					Product
				</Text>
				<Select
					borderRadius={3}
					fontSize={"x-small"}
					outline={"none"}
					size={"xs"}
					// backgroundColor={`${mode === "dark" ? "blackAlpha.500" : "whiteAlpha.900"}`}
				>
					<option value="option1">Option 1</option>
					<option value="option2">Option 2</option>
					<option value="option3">Option 3</option>
				</Select>
			</Box>
			<Box as={"div"} fontSize={"x-small"} flexGrow={1} flexBasis={{ base: 0, md: 150 }}>
				<Text marginBottom={1} fontWeight={"bold"}>
					Task Updated
				</Text>
				<Select
					borderRadius={3}
					fontSize={"x-small"}
					outline={"none"}
					size={"xs"}
					// backgroundColor={`${mode === "dark" ? "blackAlpha.500" : "whiteAlpha.900"}`}
				>
					<option value="option1">Option 1</option>
					<option value="option2">Option 2</option>
					<option value="option3">Option 3</option>
				</Select>
			</Box>
			<Box as={"div"} fontSize={"x-small"} flexGrow={1} flexBasis={{ base: 0, md: 150 }}>
				<Text marginBottom={1} fontWeight={"bold"}>
					Teams
				</Text>
				<Select
					borderRadius={3}
					fontSize={"x-small"}
					outline={"none"}
					size={"xs"}
					// backgroundColor={`${mode === "dark" ? "blackAlpha.500" : "whiteAlpha.900"}`}
				>
					<option value="option1">Option 1</option>
					<option value="option2">Option 2</option>
					<option value="option3">Option 3</option>
				</Select>
			</Box>
			<Box as={"div"} fontSize={"x-small"} flexGrow={1} flexBasis={{ base: 0, md: 150 }}>
				<Text marginBottom={1} fontWeight={"bold"}>
					Show Watchlist
				</Text>
				<Checkbox
					size={"lg"}
					colorScheme={"whatsapp"}
					// backgroundColor={`${mode === "dark" ? "blackAlpha.500" : "whiteAlpha.900"}`}
				/>
			</Box>
			<Box as={"div"} fontSize={"x-small"} display={"flex"} gap={1} alignItems={"end"} marginLeft={"auto"}>
				<Button colorScheme="blue" size={"xs"}>
					<SearchIcon />
				</Button>
				<Button colorScheme="purple" size={"xs"}>
					<RepeatIcon />
				</Button>
				<Button size={"xs"} colorScheme="whatsapp" flexGrow={1} flexBasis={{ base: 0, md: 150 }}>
					Change Filters
				</Button>
			</Box>
		</Flex>
	);
}

export default TaskSearch;
