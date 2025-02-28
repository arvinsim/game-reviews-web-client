import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/users")({
	component: Users,
});

function Users() {
	return (
		<div className="p-4">
			<h1 className="text-2xl font-bold mb-4">User Dashboard</h1>
			<div className="flex flex-col gap-4 w-1/2">
				<div className="bg-green-100 p-4 rounded-lg shadow-md">
					<h2 className="text-xl font-semibold mb-2 text-green-900">
						User Info
					</h2>
					<p className="text-green-800">Name: John Doe</p>
					<p className="text-green-800">Email: john.doe@example.com</p>
				</div>
				<div className="bg-green-100 p-4 rounded-lg shadow-md">
					<h2 className="text-xl font-semibold mb-2 text-green-900">
						Recent Activity(Dummy Data)
					</h2>
					<ul className="text-green-800">
						<li>Logged in 2 hours ago</li>
						<li>Posted a review 1 day ago</li>
					</ul>
				</div>
				<div className="bg-green-100 p-4 rounded-lg shadow-md">
					<h2 className="text-xl font-semibold mb-2 text-green-900">
						Statistics(Dummy Data)
					</h2>
					<p className="text-green-800">Reviews: 10</p>
					<p className="text-green-800">Comments: 25</p>
				</div>
			</div>
		</div>
	);
}
