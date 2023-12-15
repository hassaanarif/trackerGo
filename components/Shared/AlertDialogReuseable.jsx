import { useRef } from "react";
import { AlertDialog, AlertDialogBody, AlertDialogCloseButton, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button } from "./ChakraComponentsWrapper";

function AlertDialogReuseable({ heading, description, isOpen, onClose, onYes }) {
	const cancelRef = useRef();
	return (
		<AlertDialog motionPreset="slideInBottom" leastDestructiveRef={cancelRef} onClose={onClose} isOpen={isOpen} isCentered>
			<AlertDialogOverlay />

			<AlertDialogContent>
				<AlertDialogHeader fontSize={"md"}>{heading}</AlertDialogHeader>
				<AlertDialogCloseButton />
				<AlertDialogBody fontSize={"sm"}>{description}</AlertDialogBody>
				<AlertDialogFooter>
					<Button ref={cancelRef} onClick={onClose} size={"sm"}>
						No
					</Button>
					<Button colorScheme="red" ml={3} size={"sm"} onClick={onYes}>
						Yes
					</Button>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}

export default AlertDialogReuseable;
