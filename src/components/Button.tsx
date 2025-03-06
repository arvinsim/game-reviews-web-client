import type { PropsWithChildren } from "react";

interface ButtonProps extends PropsWithChildren {
	className?: string;
	buttonType?: "primary" | "secondary";
}

export function Button(props: ButtonProps) {
	const { children, className, buttonType, ...rest } = props;
	let buttonTypeClass = "bg-primary";

	if (buttonType === "secondary") {
		buttonTypeClass = "bg-secondary";
	}

	return (
		<button
			className={`w-full text-white py-2 rounded cursor-pointer hover:bg-blue-600 active:bg-blue-700 transition-colors ${buttonTypeClass} ${className}`}
			{...rest}
		>
			{children}
		</button>
	);
}
