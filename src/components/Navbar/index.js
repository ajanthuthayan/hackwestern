import { UnorderedList, ListItem, Heading, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";

export default function Navbar({ onSignIn, onSignOut, isLoggedIn }) {
	const router = useRouter();

	return (
		<>
			<nav>
				<UnorderedList
					style={{
						listStyleType: "none",
						margin: 0,
						padding: "1rem 2rem",
						display: "flex",
						justifyContent: "space-between",
					}}
				>
					<ListItem
						style={{ cursor: "pointer", display: "flex", gap: "0.5rem" }}
						onClick={() => {
							router.push("/");
						}}
					>
						<Heading size="lg">MassConnect</Heading>
					</ListItem>
					{!isLoggedIn && (
						<Button
							colorScheme="blue"
							size="sm"
							onClick={() => {
								onSignIn();
							}}
						>
							Sign In
						</Button>
					)}
					{isLoggedIn && (
						<Button
							colorScheme="blue"
							size="sm"
							rightIcon={<ArrowForwardIcon />}
							onClick={() => {
								onSignOut();
							}}
						>
							Sign Out
						</Button>
					)}
				</UnorderedList>
			</nav>
		</>
	);
}
