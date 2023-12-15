import Link from "next/link";
import { GrStatusCritical, GrStatusGood, GrStatusInfo, GrStatusUnknown } from "react-icons/gr";
import { PiNumberCircleFive, PiNumberCircleFour, PiNumberCircleOne, PiNumberCircleSix, PiNumberCircleTen, PiNumberCircleThree, PiNumberCircleTwo } from "react-icons/pi";
import { SiJirasoftware } from "react-icons/si";
import { TbStatusChange } from "react-icons/tb";
import Bookmark from "../Shared/Bookmark";
import { AddIcon, Alert, AlertIcon, Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button } from "../Shared/ChakraComponentsWrapper";
import TimeLog from "./TimeLog";

function Header({ taskData }) {
	const priorityIcons = {
		1: <PiNumberCircleOne key={1} size={"1.5rem"} style={{ fill: "red" }} />,
		2: <PiNumberCircleTwo key={2} size={"1.5rem"} style={{ fill: "orange" }} />,
		3: <PiNumberCircleThree key={3} size={"1.5rem"} style={{ fill: "pink" }} />,
		4: <PiNumberCircleFour key={4} size={"1.5rem"} style={{ fill: "yellow" }} />,
		5: <PiNumberCircleFive key={5} size={"1.5rem"} style={{ fill: "green" }} />,
		6: <PiNumberCircleSix key={6} size={"1.5rem"} style={{ fill: "blue" }} />,
		10: <PiNumberCircleTen key={10} size={"1.5rem"} style={{ fill: "black" }} />,
	};

	const statusIcons = {
		1: <GrStatusInfo key={1} size={"1.5rem"} style={{ fill: "red" }} />,
		2: <GrStatusGood key={2} size={"1.5rem"} style={{ fill: "orange" }} />,
		3: <GrStatusCritical key={3} size={"1.5rem"} style={{ fill: "pink" }} />,
		4: <GrStatusUnknown key={4} size={"1.5rem"} style={{ fill: "yellow" }} />,
		5: <TbStatusChange key={5} size={"1.5rem"} style={{ fill: "green" }} />,
		6: <SiJirasoftware key={6} size={"1.5rem"} style={{ fill: "blue" }} />,
	};

	return (
		<Box as="header" display={"flex"} gap={5} alignItems={"center"} justifyContent={"space-between"} px={2} py={1} borderBottom={"1px solid grey"}>
			<Box display={"flex"} alignItems={"center"} gap={4} fontSize={"medium"}>
				<Breadcrumb>
					<BreadcrumbItem>
						<BreadcrumbLink as={Link} textColor={"blue.500"} href="/Tasks" fontWeight={"bold"}>
							Tasks
						</BreadcrumbLink>
					</BreadcrumbItem>

					<BreadcrumbItem className="font-bold">
						<Box>{taskData.Id}</Box>
					</BreadcrumbItem>
				</Breadcrumb>

				<Box className="flex items-center gap-1">
					{statusIcons[taskData.StatusId]}
					<Box as="span">{taskData.Tracker_Task_Statuses.Description}</Box>
				</Box>

				<Box className="flex items-center gap-1">
					{priorityIcons[taskData.PriorityId]}
					<Box as="span">{`P${taskData.PriorityId}`}</Box>
				</Box>

				{!taskData.Company.isActive && (
					<Alert status="error" className="rounded-md" paddingX={2} py={1} fontWeight={"semibold"} fontSize={"small"}>
						<AlertIcon width={4} height={4} />
						Client is Inactive
					</Alert>
				)}

				<Bookmark isActive={taskData.Tracker_Tasks_Watchlist[0]} />
				<TimeLog />
			</Box>

			<Box className="flex items-center gap-1 ">
				<Button colorScheme="twitter" size={"sm"} fontWeight={"normal"} fontSize={"small"}>
					Users
				</Button>
				<Button colorScheme="twitter" size={"sm"} fontWeight={"normal"} fontSize={"small"}>
					Linklogic
				</Button>
				<Button colorScheme="twitter" size={"sm"} fontWeight={"normal"} fontSize={"small"}>
					Mobile
				</Button>
				<Button leftIcon={<AddIcon width={3} height={3} />} colorScheme="whatsapp" size={"sm"} fontSize={"small"} fontWeight={"normal"}>
					Create Task
				</Button>
			</Box>
		</Box>
	);
}

export default Header;
