"use client";

import { Box, Link } from "@/components/Shared/ChakraComponentsWrapper";
import { useColorModeValue } from "@chakra-ui/react";
import moment from "moment";
import { Link as NextLink } from "next/link";

function ChangeEvent() {
	const eventtDivBackgoundColor = useColorModeValue("#CCC", "#000");
	const eventTextBackgoundColor = useColorModeValue("#EEE", "gray.700");

	return (
		<Box py={1} px={2} borderRight={"1px solid lightgrey"} borderTop={"1px solid lightgrey"} borderLeft={"5px solid green"} cursor={"pointer"} _hover={{ backgroundColor: eventtDivBackgoundColor }}>
			<Box as="div" fontWeight={"bold"}>
				Event Change
			</Box>

			<Box as="div" fontSize={"small"}>
				<Link as={NextLink} href="/" color={"blue.600"}>
					Hassaan Arif
				</Link>
				<Box as={"span"}> changed the event on {moment().format("DD/MM/YYYY HH:mm:ss")}</Box>
			</Box>

			<Box display={"flex"} alignItems={"center"} gap={2}>
				<Box display={"flex"} alignItems={"center"} gap={1} fontSize={"xs"}>
					<Box fontWeight={"semibold"}>Previous Event</Box>
					<Box backgroundColor={eventTextBackgoundColor} border={"1px solid lightgrey"} borderRadius={"base"} px={1}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, facere sit quis
					</Box>
				</Box>

				<Box> &#10140; </Box>

				<Box display={"flex"} alignItems={"center"} gap={1} fontSize={"xs"}>
					<Box fontWeight={"semibold"}>New Event</Box>
					<Box backgroundColor={eventTextBackgoundColor} border={"1px solid lightgrey"} borderRadius={"base"} px={1}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</Box>
				</Box>
			</Box>
		</Box>
	);
}

export default ChangeEvent;
