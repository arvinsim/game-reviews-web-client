interface CreateUserData {
	username: string;
	email: string;
	password: string;
}

// Define a config file or use environment variables
const API_BASE_URL =
	import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

export const createUser = async (userData: CreateUserData) => {
	console.log(
		"import.meta.env.VITE_API_BASE_URL",
		import.meta.env.VITE_API_BASE_URL,
	);

	const response = await fetch(`${API_BASE_URL}/users`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(userData),
	});

	if (!response.ok) {
		throw new Error("Failed to create user");
	}

	return await response.json();
};
