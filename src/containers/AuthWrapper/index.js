import { Flex, Heading } from "@chakra-ui/react";
export default function AuthWrapper({ isLoggedIn, children }) {
	if (isLoggedIn) {
		return children;
	} else {
		return (
			<Flex justify="center" align="center">
				<Heading size="md">
					Please log in to gain access to the application!
				</Heading>
			</Flex>
		);
	}
}
