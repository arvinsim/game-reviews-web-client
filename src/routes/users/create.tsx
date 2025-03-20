import { createFileRoute } from "@tanstack/react-router";
import CreateUserForm from "../../components/CreateUserForm";
import { LinkButton } from "../../components/common/LinkButton";

export const Route = createFileRoute("/users/create")({
	component: UsersCreate,
});

function UsersCreate() {
	return (
		<div className="p-4">
			<h2 className="text-2xl font-bold mb-5">Create New User</h2>
			<LinkButton to="/users">Back to users List</LinkButton>
			<CreateUserForm />
		</div>
	);
}
