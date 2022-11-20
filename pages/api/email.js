// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const fs = require("fs");
const client = require("@sendgrid/mail");
client.setApiKey(process.env.SENDGRID_API_KEY);

export default function handler(req, res) {
	if (req.method === "POST") {
		const { email, name, role, subject, message } = req.body;

		const formattedMessage = message
			.replace("{{name}}", name)
			.replace("{{role}}", role);

		const data = {
			to: email, // Change to your recipient
			from: process.env.SENDGRID_VERIFIED_SENDER, // Change to your verified sender
			subject: subject,
			text: formattedMessage,
		};

		try {
			client
				.send(data)
				.then((response) => {
					res.end(JSON.stringify(`Successfully sent email to ${email}!`));
				})
				.catch((error) => {
					throw Error(error);
				});
		} catch (error) {
			console.error("error", error);
			res.end(JSON.stringify(`Email not sent, something went wrong!`));
		}
	}
	res.json("GET requests not supported by this endpoint.");
}
