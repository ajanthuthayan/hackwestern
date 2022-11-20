import {
	Box,
	Flex,
	Heading,
	Stack,
	Input,
	InputGroup,
	InputLeftAddon,
	Select,
} from "@chakra-ui/react";
import { useState } from "react";
import CompanyCard from "../../components/CompanyCard";

export default function CompanyContainer() {
	const [location, setLocation] = useState("Toronto");
	const [role, setRole] = useState("Software Engineer");

	const COMPANIES = [
		{
			name: "Amazon",
			logoUrl:
				"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png",
		},
		{
			name: "Google",
			logoUrl:
				"https://www.freepnglogos.com/uploads/google-logo-png/file-google-logo-svg-wikimedia-commons-23.png",
		},
		{
			name: "Microsoft",
			logoUrl:
				"https://www.freepnglogos.com/uploads/microsoft-logo-png-transparent-background-1.png",
		},
	];
	return (
		<Box padding={10}>
			<Heading marginBottom={4}>Companies</Heading>
			<InputGroup marginBottom={4}>
				<InputLeftAddon>Location</InputLeftAddon>
				<Select
					borderLeftRadius={0}
					onChange={(e) => {
						setLocation(e.target.value);
					}}
				>
					<option value="Toronto">Toronto</option>
					<option value="Vancouver">Vancouver</option>
					<option value="Calgary">Calgary</option>
				</Select>
			</InputGroup>
			<InputGroup marginBottom={4}>
				<InputLeftAddon>Role</InputLeftAddon>
				<Select
					borderLeftRadius={0}
					onChange={(e) => {
						if (e.target.value === "software-engineer") {
							setRole("Software Engineer");
						} else if (e.target.value === "product-manager") {
							setRole("Product Manager");
						} else {
							setRole("UI/UX Designer");
						}
					}}
				>
					<option value="software-engineer">Software Engineer</option>
					<option value="product-manager">Product Manager</option>
					<option value="ui-ux-designer">UI/UX Designer</option>
				</Select>
			</InputGroup>
			<Stack>
				<Flex gap={5} justify="space-between">
					{COMPANIES.map((company, index) => {
						return (
							<CompanyCard
								key={index}
								name={company.name}
								role={role}
								location={location}
								numberOfVerifiedEmployees={
									company.name === "Amazon" ? 1 : Math.floor(Math.random() * 50)
								}
								logoUrl={company.logoUrl}
							/>
						);
					})}
				</Flex>
			</Stack>
		</Box>
	);
}
