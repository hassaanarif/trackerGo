import prisma from "@/prisma/prismaClient";

export async function getTaskData(taskId) {
	const taskData = await prisma.tracker_Tasks.findUnique({
		where: { Id: taskId },
		include: {
			Tracker_Task_Statuses: {
				select: {
					Description: true,
				},
			},
			Tracker_Task_IntercomLinks: {
				select: {
					Id: true,
					Link: true,
				},
			},
			Tracker_Task_Tags: {
				select: {
					Tracker_Tags: {
						select: {
							Id: true,
							Colour: true,
							Description: true,
							Tracker_User_Departments: {
								select: {
									Name: true,
								},
							},
						},
					},
				},
			},
			Tracker_Task_Audit: {
				select: {
					FieldValue: true,
					FieldName: true,
					Timestamp: true,
					Tracker_Users: {
						select: {
							Id: true,
							Name: true,
							Tracker_User_Departments: {
								select: {
									Id: true,
									Name: true,
								},
							},
						},
					},
				},
				orderBy: {
					Timestamp: "desc",
				},
			},
			Tracker_Task_Notes: {
				include: {
					Tracker_Users_Tracker_Task_Notes_AuthorUserIdToTracker_Users: {
						select: {
							Id: true,
							Name: true,
							Tracker_User_Departments: {
								select: {
									Id: true,
									Name: true,
								},
							},
						},
					},
					Tracker_Users_Tracker_Task_Notes_DeletedbyUserIdToTracker_Users: {
						select: {
							Id: true,
							Name: true,
							Tracker_User_Departments: {
								select: {
									Id: true,
									Name: true,
								},
							},
						},
					},
					Tracker_Task_Statuses: true,
				},
			},
			Company: {
				select: {
					Id: true,
					isActive: true,
				},
			},
			Tracker_Tasks_Watchlist: {
				select: {
					TaskID: true,
				},
				where: {
					TaskID: taskId,
				},
			},
		},
	});

	return taskData;
}
