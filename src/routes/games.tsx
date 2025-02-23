import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/games")({
	component: Games,
});

function Games() {
	return (
		<div>
			<h1>Games</h1>
			<p>Games page content</p>
		</div>
	);
}
