import { Box } from "@/components/Shared/ChakraComponentsWrapper";
import Header from "@/components/TaskDetails/Header";
import RightPanel from "@/components/TaskDetails/RightPanel";
import TaskDescription from "@/components/TaskDetails/TaskDescription";
import TaskNotes from "@/components/TaskDetails/TaskNotes";
import TaskSearch from "@/components/TaskDetails/TaskSearch";
import { getTaskData } from "@/services/Task/taskDetail";

export async function generateMetadata({ params }) {
	return {
		title: `Task ${params.id}`,
	};
}

async function Page({ params }) {
	const taskData = await getTaskData(parseInt(params.id));

	return (
		<>
			<Header taskData={taskData} />
			<Box as="main" className="flex  h-[calc(100vh_-_81px)] ">
				<Box className="basis-[75%]  overflow-y-auto">
					<TaskDescription taskData={taskData} />
					<TaskSearch />
					<TaskNotes taskData={taskData} />
				</Box>
				<Box className="basis-[25%]  overflow-y-auto ">
					<RightPanel />
				</Box>
			</Box>
		</>
	);
}

export default Page;
