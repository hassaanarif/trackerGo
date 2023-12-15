"use client";

import { Box, ChevronDownIcon, Input, InputGroup, InputRightElement, SearchIcon } from "@/components/Shared/ChakraComponentsWrapper";
import { useColorModeValue } from "@chakra-ui/react";
import lodash from "lodash";
import { Fragment, useEffect, useMemo, useState } from "react";

function DropdownMenu({ dataSource, groupBy, defaultId }) {
	const [selectedId, setSelectedId] = useState(defaultId);
	const [isOpen, setIsOpen] = useState(false);
	const [searchInput, setSearchInput] = useState("");
	const inputBackgroundColor = useColorModeValue("white", "gray.800");
	const hoverColor = useColorModeValue("lightgrey", "gray.500");
	const groupByColor = useColorModeValue("lightblue", "blue.400");
	const iconColor = useColorModeValue("gray.900", "white.900");

	const arrangeDataSourceByGroupBy = useMemo(() => {
		let filteredDataSource = searchInput ? lodash.filter(dataSource, (item) => item.text.toLowerCase().includes(searchInput)) : [...dataSource];
		return lodash.groupBy(filteredDataSource, groupBy);
	}, [dataSource, groupBy, searchInput]);

	useEffect(() => {
		const handleClickOutside = () => setIsOpen(false);

		document.addEventListener("click", handleClickOutside);

		return () => document.removeEventListener("click", handleClickOutside);
	});

	return (
		<Box width={"100%"} position={"relative"}>
			<Box display={"flex"} alignItems={"center"} border={"1px solid #CCC"} borderRadius={"base"} cursor={"pointer"} _focus={{ boxShadow: "0 0 2px 0 grey" }} tabIndex="0" onClick={() => setIsOpen(!isOpen)}>
				<Box fontSize={"small"} flexGrow={1} px={1}>
					{dataSource?.find((item) => item.id === selectedId)?.text}
				</Box>
				<Box borderLeft={"1px solid #CCC"}>
					<ChevronDownIcon minWidth={"25px"} transform={`rotate(${isOpen ? "180deg" : "0"})`} transition={"ease-in"} transitionDuration={"100ms"} />
				</Box>
			</Box>
			<Box position={"absolute"} border={"1px solid #CCC"} borderBottomLeftRadius={"base"} borderBottomRightRadius={"base"} width={"100%"} zIndex={2} fontSize={"small"} boxShadow="0 0 2px 0 grey" display={`${isOpen ? "block" : "none"}`}>
				<InputGroup size={"xs"} position={"sticky"} top={0} backgroundColor={inputBackgroundColor} border={"1px solid #CCC"} borderRadius={"base"} onClick={() => setIsOpen(setIsOpen)}>
					<InputRightElement pointerEvents="none">
						<SearchIcon color={iconColor} />
					</InputRightElement>
					<Input type="text" placeholder="Search" fontSize={"small"} px={1} value={searchInput} onInput={(event) => setSearchInput(event.currentTarget.value.toLowerCase())} backgroundColor={inputBackgroundColor} />
				</InputGroup>
				<Box overflowY={"auto"} maxH={"200px"} backgroundColor={inputBackgroundColor}>
					{Object.keys(arrangeDataSourceByGroupBy).map((group) => {
						return (
							<Fragment key={group}>
								{groupBy && (
									<Box fontWeight={"semibold"} backgroundColor={groupByColor} padding={1}>
										{group}
									</Box>
								)}
								{arrangeDataSourceByGroupBy[group].map((item) => {
									return (
										<Box
											key={item.id}
											id={item.id}
											padding={1}
											cursor={"pointer"}
											_hover={{ backgroundColor: hoverColor }}
											onClick={() => {
												setSelectedId(item.id);
												setIsOpen(false);
											}}
										>
											{item.text}
										</Box>
									);
								})}
							</Fragment>
						);
					})}
				</Box>
			</Box>
		</Box>
	);
}

export default DropdownMenu;
