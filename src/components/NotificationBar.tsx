import { useSearch } from "@tanstack/react-router";

export function NotificationBar() {
	const search = useSearch({ strict: false });
	const queryParams = new URLSearchParams(search);
	const message = queryParams.get("message");
	const messageType: string = queryParams.get("type") || "info";

	if (!message) return null;

	let bgColor: string;
	switch (messageType) {
		case "success":
			bgColor = "bg-green-100 border-green-400 text-green-700";
			break;
		case "error":
			bgColor = "bg-red-100 border-red-400 text-red-700";
			break;
		case "warning":
			bgColor = "bg-yellow-100 border-yellow-400 text-yellow-700";
			break;
		case "info":
			bgColor = "bg-blue-100 border-blue-400 text-blue-700";
			break;
		default:
			bgColor = "bg-blue-100 border-blue-400 text-blue-700";
	}

	return (
		<div className={`px-4 py-3 mb-4 rounded border ${bgColor}`} role="alert">
			<span className="block sm:inline">{message}</span>
		</div>
	);
}
