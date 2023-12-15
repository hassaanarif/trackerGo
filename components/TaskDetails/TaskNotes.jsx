import { Box } from "@/components/Shared/ChakraComponentsWrapper";
import AttachmentEvent from "./AttachmentEvent";
import ChangeEvent from "./ChangeEvent";
import NoteEvent from "./NoteEvent";

function TaskNotes({ taskData }) {
	return (
		<Box as={"section"} px={2}>
			{taskData.Tracker_Task_Notes.map((note) => {
				<NoteEvent />;
			})}
			<AttachmentEvent />
			<ChangeEvent />
		</Box>
	);
}

export default TaskNotes;
