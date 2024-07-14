"use client";
import React, { useEffect } from "react";
import {
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "../ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import {SubmitButton} from "../SubmitButton";
import { useFormState } from "react-dom";
import { type State, updateUserSettings } from "@/app/action";
import { toast } from "sonner";

type SettingFormProps = {
	firstName: string;
	lastName: string;
	email: string;
};

const SettingForm = ({ email, firstName, lastName }: SettingFormProps) => {
	const initialState: State = { message: "", status: undefined };
	const [state, formAction] = useFormState(updateUserSettings, initialState);

	useEffect(() => {
		if (state?.status === "error") {
			toast.error(state.message);
		} else if (state?.status === "success") {
			toast.success(state.message);
		}
	}, [state]);

	return (
		<form action={formAction}>
			<CardHeader>
				<CardTitle>Settings</CardTitle>
				<CardDescription>
					Here you will find settings regarding your account
				</CardDescription>
			</CardHeader>
			<CardContent className="flex flex-col gap-y-5">
				<div className="flex flex-col gap-y-2">
					<Label>First Name</Label>
					<Input name="firstName" type="text" defaultValue={firstName} />
				</div>
				<div className="flex flex-col gap-y-2">
					<Label>Last Name</Label>
					<Input name="lastName" type="text" defaultValue={lastName} />
				</div>
				<div className="flex flex-col gap-y-2">
					<Label>Email</Label>
					<Input name="Email" type="text" disabled defaultValue={email} />
				</div>
			</CardContent>
			<CardFooter>
				<SubmitButton title="Update your settings" />
			</CardFooter>
		</form>
	);
};

export default SettingForm;
