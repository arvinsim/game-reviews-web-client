import { Link } from "@tanstack/react-router";

export function LinkButton({
	to,
	children,
}: { to: string; children: React.ReactNode }) {
	return (
		<Link
			to={to}
			className="inline-block bg-green-500 text-white px-4 py-2 rounded mb-4"
		>
			{children}
		</Link>
	);
}
