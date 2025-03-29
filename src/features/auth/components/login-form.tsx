import { useEffect, useState } from "react";

import { useLogin } from "@/features/auth";
import { Button } from "@/components/button";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import {InputField} from "@/components/forms/input-field";
import {PasswordInputField} from "@/components/forms/password-input-field";

export function LoginForm() {
    const router = useRouter();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const [resetEmail, setResetEmail] = useState("");
    const mutation = useLogin();

    // Handle main login submission
    const handleSignInSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        mutation.mutate({ username, password });
    };

    const handleLoginSuccess = async () => {
        try {
            if (mutation?.error) {
                toast.error("User does not exist")
            } else if (mutation?.isSuccess) {
                toast.success("User authenticated successfully")
                router.push('/dashboard')
            } else {
                toast.error("Something went wrong")
            }
        } catch (error) {
            toast.error("Something unexpected happened")
        }
    }

    useEffect(() => {
        if (mutation.isSuccess) {
            handleLoginSuccess()
        }
    },[mutation.isSuccess, router])

    // Handle password reset submission
    const handleForgotPasswordSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            // Replace with actual password reset API call
            const response = await fetch('/api/reset-password', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: resetEmail }),
            });

            if (response.ok) {
                toast.success('Password reset instructions sent to your email');
                setShowForgotPassword(false);
            } else {
                toast.error('Failed to send reset instructions');
            }
        } catch (e) {
            toast.error(`Unexpected error: ${e.message}`);
        }
    };

    // Handle login mutation results
    // useEffect(() => {
    //     if (mutation.isSuccess) {
    //         toast.success("User authenticated successfully");
    //         router.push("/dashboard");
    //     }
    //
    //     if (mutation.isError) {
    //         toast.error((mutation.error as any).message || "Invalid credentials");
    //     }
    // }, [mutation.isSuccess, mutation.isError, mutation.error, router]);

    return (
        <>
            <form className="space-y-6" onSubmit={handleSignInSubmit}>
                <div>
                    <InputField
                        type="text"
                        name="username"
                        label="Username"
                        required={true}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>

                <div>
                    <PasswordInputField
                        type="password"
                        label="Password"
                        required
                        value={password}
                        onInput={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="remember-me"
                            className="h-4 w-4 text-blue-500 bg-gray-800 border-gray-700 rounded focus:ring-blue-500"
                        />
                        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-400">
                            Remember me
                        </label>
                    </div>
                    <button
                        type="button"
                        onClick={() => setShowForgotPassword(true)}
                        className="text-sm text-blue-500 hover:text-blue-400 focus:outline-none"
                    >
                        Forgot password?
                    </button>
                </div>

                <Button
                    type="submit"
                    variant="secondary"
                    size="md"
                    className="w-full mt-5"
                    isLoading={mutation.isPending}
                    disabled={!username || !password}
                >
                    Log In
                </Button>
            </form>

            {/* Forgot Password Modal */}
            {showForgotPassword && (
                <div className="fixed inset-0 bg-black/50 flex justify-center items-center p-4">
                    <div className="bg-gray-900/90 backdrop-blur-md ring-1 ring-gray-700 shadow-lg rounded-lg w-full max-w-md p-6 sm:p-8">
                        <h2 className="text-2xl font-bold text-white mb-6">Forgot Password</h2>
                        <form className="space-y-6" onSubmit={handleForgotPasswordSubmit}>
                            <div>
                                <label htmlFor="forgot-email" className="block text-sm font-medium text-gray-400">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="forgot-email"
                                    placeholder="Enter your email"
                                    className="mt-1 block w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                    required
                                    value={resetEmail}
                                    onChange={(e) => setResetEmail(e.target.value)}
                                />
                            </div>

                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    onClick={() => setShowForgotPassword(false)}
                                    className="mr-4 px-4 py-2 text-sm text-gray-400 hover:text-gray-300 focus:outline-none"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    Reset Password
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}