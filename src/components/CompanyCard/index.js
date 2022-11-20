import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Button,
	Flex,
	Heading,
	Text,
} from "@chakra-ui/react";
import Image from "next/image";
import { MdLocationPin, MdPerson } from "react-icons/md";
import SendMessagesModal from "../SendMessagesModal";

export default function CompanyCard({
	name,
	role,
	numberOfVerifiedEmployees,
	logoUrl,
	location,
}) {
	return (
		<Card width={400} height={400}>
			<CardHeader display="flex" flexDirection="column">
				<Flex justify="center" marginTop={10}>
					<Image src={logoUrl} alt={`${name} logo`} width={200} height={200} />
				</Flex>
			</CardHeader>
			<CardBody
				display="flex"
				flexDirection="column"
				alignItems="center"
				justifyContent="center"
				gap={2}
			>
				<Flex align="center" gap={1}>
					<MdPerson />
					<Text fontSize="lg">{role}</Text>
				</Flex>
				<Flex align="center" gap={1}>
					<MdLocationPin />
					<Text fontSize="lg">{location}</Text>
				</Flex>
				<Flex align="center" gap={1}>
					<Text fontSize="xl" fontWeight={600} textAlign="center">
						{`${numberOfVerifiedEmployees} ${
							numberOfVerifiedEmployees === 1 ? "Employee" : "Employees"
						}`}
					</Text>
				</Flex>
			</CardBody>
			<CardFooter display="flex" justify="center">
				<SendMessagesModal company={name} role={role} location={location} />
			</CardFooter>
		</Card>
	);
}
