import { useNavigate } from "@tanstack/react-router";
import type React from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { createUser } from "../api/userApi";

type FormValues = {
	username: string;
	email: string;
	password: string;
	confirmPassword: string;
};

export const CreateUserForm: React.FC = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<FormValues>();

	const navigate = useNavigate();

	const password = watch("password");

	const onSubmit: SubmitHandler<FormValues> = async (data) => {
		try {
			await createUser({
				username: data.username,
				email: data.email,
				password: data.password,
			});
			navigate({
				to: "/users",
				search: {
					message: "New user created!",
					type: "success",
				},
			});
		} catch (error) {
			console.error("Error creating user:", error);
			// Handle error (e.g., show error message to user)
		}
	};

	return (
		<div className="max-w-md mt-10 border border-gray-300 rounded-lg overflow-hidden">
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="bg-white p-6 rounded shadow-md"
			>
				<div className="mb-4">
					<label
						htmlFor="create-user-form-username"
						className="bl</div>ock text-gray-700"
					>
						Username
					</label>
					<input
						id="create-user-form-username"
						{...register("username", { required: "Username is required" })}
						className="w-full px-3 py-2 border rounded"
					/>
					{errors.username && (
						<p className="text-red-500 text-sm">{errors.username.message}</p>
					)}
				</div>
				<div className="mb-4">
					<label
						htmlFor="create-user-form-email"
						className="block text-gray-700"
					>
						Email
					</label>
					<input
						id="create-user-form-email"
						{...register("email", {
							required: "Email is required",
							pattern: {
								value: /^\S+@\S+$/i,
								message: "Invalid email address",
							},
						})}
						className="w-full px-3 py-2 border rounded"
					/>
					{errors.email && (
						<p className="text-red-500 text-sm">{errors.email.message}</p>
					)}
				</div>
				<div className="mb-4">
					<label
						htmlFor="create-user-form-password"
						className="block text-gray-700"
					>
						Password
					</label>
					<input
						id="create-user-form-password"
						type="password"
						{...register("password", {
							required: "Password is required",
							minLength: {
								value: 6,
								message: "Password must be at least 6 characters",
							},
						})}
						className="w-full px-3 py-2 border rounded"
					/>
					{errors.password && (
						<p className="text-red-500 text-sm">{errors.password.message}</p>
					)}
				</div>
				<div className="mb-4">
					<label
						htmlFor="create-user-form-confirm-password"
						className="block text-gray-700"
					>
						Confirm Password
					</label>
					<input
						id="create-user-form-confirm-password"
						type="password"
						{...register("confirmPassword", {
							required: "Please confirm your password",
							validate: (value) =>
								value === password || "Passwords do not match",
						})}
						className="w-full px-3 py-2 border rounded"
					/>
					{errors.confirmPassword && (
						<p className="text-red-500 text-sm">
							{errors.confirmPassword.message}
						</p>
					)}
				</div>
				<button
					type="submit"
					className="w-full bg-green-500 text-white py-2 rounded cursor-pointer hover:bg-green-600 active:bg--700 transition-colors"
				>
					Create User
				</button>
			</form>
		</div>
	);
};

export default CreateUserForm;
