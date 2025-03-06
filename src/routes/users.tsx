import {
	QueryClient,
	QueryClientProvider,
	useQuery,
} from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { CreateUserForm } from "../components/CreateUserForm";

type UserInfoData = {
	id: number;
	username: string;
	email: string;
};

export const Route = createFileRoute("/users")({
	component: Users,
});

const queryClient = new QueryClient();

function Users() {
	return (
		<QueryClientProvider client={queryClient}>
			<div className="p-4">
				<h1 className="text-2xl font-bold mb-4">User Dashboard</h1>
				<CreateUserForm />
				<UsersInfo />
			</div>
		</QueryClientProvider>
	);
}

function UsersInfo() {
	const { isPending, error, data } = useQuery<UserInfoData[]>({
		queryKey: ["userInfo"],
		queryFn: async () => {
			const res = await fetch("http://localhost:8080/users");
			return res.json();
		},
	});

	if (isPending) return "Loading...";

	if (error) return `An error has occurred: ${error.message}`;

	return (
		<>
			{data.map((user) => {
				return (
					<div
						key={user.id}
						className="flex flex-col gap-4 w-1/2 border border-gray-300 p-4 rounded-lg"
					>
						<UserInfo user={user} />
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
				);
			})}
		</>
	);
}

function UserInfo({ user }: { user: UserInfoData }) {
	return (
		<div className="bg-green-100 p-4 rounded-lg shadow-md">
			<h2 className="text-xl font-semibold mb-2 text-green-900">User Info</h2>
			<p className="text-green-800">Username: {user.username}</p>
			<p className="text-green-800">Email: {user.email}</p>
		</div>
	);
}
