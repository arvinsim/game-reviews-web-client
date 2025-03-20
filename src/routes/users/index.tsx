import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { UsersInfo } from "../../components/UsersInfo";
import { LinkButton } from "../../components/common/LinkButton";

export const Route = createFileRoute("/users/")({
	component: Users,
});

const queryClient = new QueryClient();

function Users() {
	return (
		<QueryClientProvider client={queryClient}>
			<div className="p-4">
				<h1 className="text-2xl font-bold mb-4">Users</h1>

				<LinkButton to="/users/create">Create new user</LinkButton>
				<UsersInfo />
			</div>
		</QueryClientProvider>
	);
}
