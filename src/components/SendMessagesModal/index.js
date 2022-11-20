import { useState } from "react";
import {
	Button,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	ModalFooter,
	Text,
	Input,
	useDisclosure,
	Textarea,
} from "@chakra-ui/react";
import Select from "react-select";

export default function SendMessagesModal({
	colorScheme = "green",
	width = "fit-content",
	company,
	role,
	location,
}) {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [subject, setSubject] = useState("Coffee Chat?");
	const [message, setMessage] = useState(
		`Hi {{name}}, \nMy name is Ajanth, and I'm interested in learning how to become a better engineer. I see you are a {{role}} at Amazon. Would you be available for a coffee chat this week?\nRegards,\nAjanth Uthayan`
	);

	const options = [{ value: "arjun", label: "Arjun" }];

	return (
		<>
			<Button onClick={onOpen} colorScheme={colorScheme} width={width}>
				Send Message(s)
			</Button>

			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>{company}</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Text fontWeight={500}>{`Employees (${role})`}</Text>
						<Select isMulti options={options} />
						<Text fontWeight={500} marginTop={4}>
							Subject
						</Text>
						<Input
							type="text"
							id="subject"
							value={subject}
							onChange={(e) => {
								setSubject(e.target.value);
							}}
						/>
						<Text fontWeight={500} marginTop={4}>
							Message
						</Text>
						<Textarea
							type="text"
							id="message"
							minHeight={200}
							value={message}
							onChange={(e) => {
								setMessage(e.target.value);
							}}
						/>
					</ModalBody>
					<ModalFooter>
						<Button colorScheme="green" mr={3} onClick={onClose}>
							Send
						</Button>
						<Button variant="ghost" colorScheme="red" onClick={onClose}>
							Cancel
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}
