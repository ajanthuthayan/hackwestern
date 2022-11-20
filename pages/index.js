import { useEffect, useState } from "react";
import Head from "next/head";
import { Box } from "@chakra-ui/react";
import Navbar from "../src/components/Navbar";
import AuthWrapper from "../src/containers/AuthWrapper";
import CompanyContainer from "../src/containers/CompanyContainer";

export default function Home() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const signIn = () => {
		localStorage.setItem("isLoggedIn", true);
		setIsLoggedIn(true);
	};

	const signOut = () => {
		localStorage.setItem("isLoggedIn", false);
		setIsLoggedIn(false);
	};

	// FLASK TEST (WORKS, BUT IMPLEMENT IN THE FUTURE)
	// const fetchAmazonEmployees = async () => {
	// 	const response = await fetch(
	// 		"http://127.0.0.1:5000/amazon/software-engineer"
	// 	);
	// 	const data = await response.json();
	// 	console.log(data);
	// };

	useEffect(() => {
		if (
			localStorage.getItem("isLoggedIn") === null ||
			localStorage.getItem("isLoggedIn") === "false"
		) {
			localStorage.setItem("isLoggedIn", false);
		} else {
			setIsLoggedIn(true);
		}
		// fetchAmazonEmployees();
	}, []);

	return (
		<Box width="100vw">
			<Head>
				<title>Mass Connect</title>
				<meta
					name="description"
					content="Mass email employees at your dream company!"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar onSignIn={signIn} onSignOut={signOut} isLoggedIn={isLoggedIn} />
			<Box
				width="100%"
				margin="0 auto"
				display="flex"
				flexDirection="column"
				gap={20}
			>
				<AuthWrapper isLoggedIn={isLoggedIn}>
					<CompanyContainer />
				</AuthWrapper>
			</Box>
		</Box>
	);
}
