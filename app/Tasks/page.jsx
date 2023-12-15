import TaskList from "@/components/Tasks/TaskList";
import TaskSearch from "@/components/Tasks/TaskSearch";
import prisma from "@/prisma/prismaClient";

async function getData() {
	return await prisma.tracker_Tasks.findMany({
		include: {
			Company: {
				select: {
					Name: true,
					GroupId: true,
					Tracker_Client_Groups: {
						select: {
							Name: true,
						},
					},
				},
			},
			Tracker_Users_Tracker_Tasks_LoggedByUserIdToTracker_Users: {
				select: {
					Name: true,
				},
			},
			Tracker_Users_Tracker_Tasks_AllocatedToUserIdToTracker_Users: {
				select: {
					Name: true,
				},
			},
		},
		take: 30,
	});
}

async function Tasks() {
	const tasks = await getData();

	return (
		<>
			<TaskSearch />
			<TaskList tasks={tasks} />
		</>
	);
}

export default Tasks;
