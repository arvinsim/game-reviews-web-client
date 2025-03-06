interface CreateUserData {
	username: string;
	email: string;
	password: string;
}

// Define a config file or use environment variables
const API_BASE_URL =
	import.meta.env.VITE_API_BASE_URL || "http://localhost:8080";

export const createUser = async (userData: CreateUserData) => {
	const response = await fetch(`${API_BASE_URL}/users`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(userData),
	});

	if (!response.ok) {
		const errorText = await response.text();
		throw new Error(`Failed to create user: ${response.status} ${errorText}`);
	}

	return await response.json();
};
