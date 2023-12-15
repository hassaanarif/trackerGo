"use client";

import { Box, Link } from "@/components/Shared/ChakraComponentsWrapper";
import { useColorModeValue } from "@chakra-ui/react";
import moment from "moment";
import { Link as NextLink } from "next/link";

function NoteEvent() {
	const noteDivBackgoundColor = useColorModeValue("#CCC", "#000");
	const noteTextBackgoundColor = useColorModeValue("#EEE", "gray.700");
	return (
		<Box py={1} px={2} borderRight={"1px solid lightgrey"} borderTop={"1px solid lightgrey"} borderLeft={"5px solid black"} cursor={"pointer"} _hover={{ backgroundColor: noteDivBackgoundColor }}>
			<Box display={"flex"} alignItems={"center"}>
				<Box flexBasis={"33.33%"}>
					<Box as="span" fontWeight={"bold"}>
						Added Note
					</Box>
					<Box as="span" fontSize={"xs"}>
						{"   "}(Status: Outstanding)
					</Box>
				</Box>
				<Box flexBasis={"33.33%"} textAlign={"center"} fontSize={"xs"}>
					<Box as="span" fontWeight={"semibold"}>
						Author:
					</Box>
					<Box as="span">
						{"   "}{" "}
						<Link as={NextLink} href="/" color={"blue.600"}>
							Hassaan Arif
						</Link>
					</Box>
				</Box>
				<Box flexBasis={"33.33%"} textAlign={"end"} fontSize={"xs"}>
					<Box as="span" fontWeight={"semibold"}>
						Date Logged:
					</Box>
					<Box as="span">
						{"   "}
						{moment().format("DD/MM/YYYY HH:mm:ss")}
					</Box>
				</Box>
			</Box>

			<Box fontSize={"xs"} backgroundColor={noteTextBackgoundColor} border={"1px solid lightgrey"} borderRadius={"base"} px={1}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, facere sit quis corporis voluptatum perspiciatis unde repudiandae autem quae deleniti ex, id dignissimos exercitationem veniam doloremque modi aspernatur? Eius velit reprehenderit similique distinctio! Illum voluptatum,
				veritatis aut eius itaque aliquid, ipsum commodi cupiditate tenetur delectus asperiores autem iusto vel quam.
			</Box>
		</Box>
	);
}

export default NoteEvent;
