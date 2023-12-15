"use client";

import { Box, Link } from "@/components/Shared/ChakraComponentsWrapper";
import { DownloadIcon } from "@chakra-ui/icons";
import { useColorModeValue } from "@chakra-ui/react";
import moment from "moment";
import { Link as NextLink } from "next/link";

function AttachmentEvent() {
	const attachmentDivBackgoundColor = useColorModeValue("#CCC", "#000");
	const attachmentTextBackgoundColor = useColorModeValue("#FFF", "#000");

	return (
		<Box py={1} px={2} borderRight={"1px solid lightgrey"} borderTop={"1px solid lightgrey"} borderLeft={"5px solid pink"} cursor={"pointer"} _hover={{ backgroundColor: attachmentDivBackgoundColor }}>
			<Box display={"flex"} alignItems={"center"}>
				<Box flexBasis={"33.33%"}>
					<Box as="span" fontWeight={"bold"}>
						New Attachment
					</Box>
				</Box>
				<Box flexBasis={"33.33%"} textAlign={"center"} fontSize={"xs"}>
					<Box as="span" fontWeight={"semibold"}>
						Changed By:
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

			<Box display={"flex"} alignItems={"center"} gap={1} fontSize={"xs"} backgroundColor={attachmentTextBackgoundColor} border={"1px solid lightgrey"} borderRadius={"full"} px={2} width={"20%"}>
				<DownloadIcon color={"blue.600"} />
				<Link as={NextLink} href="/" color={"blue.600"}>
					Attachment.pdf
				</Link>
			</Box>
		</Box>
	);
}

export default AttachmentEvent;
