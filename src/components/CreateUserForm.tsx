import type React from "react";
import { type SubmitHandler, useForm } from "react-hook-form";

type FormValues = {
	username: string;
	email: string;
	password: string;
};

export const CreateUserForm: React.FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>();

	const onSubmit: SubmitHandler<FormValues> = (data) => {
		console.log(data);
	};

	return (
		<div className="max-w-md mx-auto mt-10">
			<h2 className="text-2xl font-bold mb-5">Create New User</h2>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="bg-white p-6 rounded shadow-md"
			>
				<div className="mb-4">
					<label
						htmlFor="create-user-form-username"
						className="block text-gray-700"
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
				<button
					type="submit"
					className="w-full bg-blue-500 text-white py-2 rounded"
				>
					Create User
				</button>
			</form>
		</div>
	);
};

export default CreateUserForm;
