import {useState} from "react";
import {useRouter} from "next/navigation";

export function ForgetPasswordModal(){
    const [showForgotPassword, setShowForgotPassword] = useState(false);

    return (
        <>
            {showForgotPassword && (
                <div className="fixed inset-0 bg-black/50 flex justify-center items-center p-4">
                    <div className="bg-gray-900/90 backdrop-blur-md ring-1 ring-gray-700 shadow-lg rounded-lg w-full max-w-md p-6 sm:p-8">
                        <h2 className="text-2xl font-bold text-white mb-6">Forgot Password</h2>
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="forgot-email" className="block text-sm font-medium text-gray-400">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="forgot-email"
                                    name="forgot-email"
                                    placeholder="Enter your email"
                                    className="mt-1 block w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                    required
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
    )
}