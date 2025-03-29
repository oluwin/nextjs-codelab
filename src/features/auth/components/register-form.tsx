import { useState } from "react";
import { useRouter } from "next/navigation";
import { useRegister } from "@/features/auth";
import toast from "react-hot-toast";
import { InputField } from "@/components/forms/input-field";
import { PasswordInputField } from "@/components/forms/password-input-field";
import { Button } from "@/components/button";
import {SelectField} from "@/components/forms/select-field";


export function RegisterForm() {
    const router = useRouter();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [role, setRole] = useState("");

    const rolesOptions = [
        { label: "User", value: "USER" },
        { label: "Super Admin", value: "SUPER_ADMIN" },
        { label: "Admin", value: "ADMIN" },
        { label: "QA User", value: "QA_USER" },
        { label: "Operator", value: "OPERATOR" },
        { label: "Data Entry", value: "DATA_ENTRY" },
    ];

    const mutation = useRegister();

    const handleSignUpSubmit = async (event) => {
        event.preventDefault(); // Prevent default form submission
        if (password !== confirmPassword) {
            return toast.error("Passwords do not match");
        }

        try {
            await mutation.mutateAsync({ username, email, password, role });
            toast.success("User registered successfully");
           window.location.reload();
        } catch (error) {
            toast.error(error.message || "Error adding user");
        }
    };

    return (
        <form className="space-y-6" onSubmit={handleSignUpSubmit}>
            <div className="grid grid-cols-2 space-x-1">
                <InputField
                    type="text"
                    name="username"
                    label="Username"
                    required={true}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <InputField
                    type="email"
                    name="email"
                    label="Email"
                    required={true}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <PasswordInputField
                    type="password"
                    label="Password"
                    required={true}
                    value={password}
                    onInput={(e) => setPassword(e.target.value)}
                />
                <PasswordInputField
                    type="password"
                    label="Confirm Password"
                    required={true}
                    value={confirmPassword}
                    onInput={(e) => setConfirmPassword(e.target.value)}
                />

                {/*<SelectField*/}
                {/*    label="User Role"*/}
                {/*    options={rolesOptions}*/}
                {/*    placeholder="Select a role..."*/}
                {/*    defaultOption={{ label: "Select a role...", value: "" }}*/}
                {/*    // onChange={(e) => setRole(e.target.value)}*/}
                {/*   required={true}*/}
                {/*/>*/}

                <InputField
                    type="text"
                    name="role"
                    label="User Role"
                    required={true}
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                />
                <div>
                    <Button
                        type="submit"
                        variant="secondary"
                        size="lg"
                        className="w-full mt-5"
                        isLoading={mutation.isPending}
                        disabled={!username || !password }
                    >
                        Sign Up
                    </Button>
                </div>
            </div>
        </form>
    );
}