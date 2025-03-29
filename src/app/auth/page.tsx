'use client';

import {useState} from "react";
import {LoginForm, RegisterForm} from "@/features/auth";


export default function AuthPage() {
    const [activeTab, setActiveTab] = useState("signin");

    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-white via-white-300 to-white text-white">
            {/* Main Content */}
            <main className="flex-grow flex justify-center items-center p-4 sm:p-6">
                <div
                    className="bg-white-900/90 backdrop-blur-md ring-1 ring-white-700 shadow-lg rounded-lg w-full max-w-md p-6 sm:p-8">
                    {/* Tabs for Sign-In and Sign-Up */}
                    <div className="flex space-x-4 mb-6 border-b border-gray-700">
                        <button
                            onClick={() => setActiveTab("signin")}
                            className={`text-lg font-semibold pb-2 border-b-2 ${activeTab === "signin"
                                ? "text-gray-500 border-gray-300"
                                : "text-gray-400 border-transparent hover:border-blue-500 hover:text-white"
                            } focus:outline-none transition-all duration-300`}
                        >
                            Sign In
                        </button>
                        <button
                            onClick={() => setActiveTab("signup")}
                            className={`text-lg font-semibold pb-2 border-b-2 ${activeTab === "signup"
                                ? "text-gray-500 border-gray-300"
                                : "text-gray-400 border-transparent hover:border-blue-500 hover:text-white"
                            } focus:outline-none transition-all duration-300`}
                        >
                            Sign Up
                        </button>
                    </div>


                    {/* Form Container with Animation */}
                    <div className="relative overflow-hidden">
                        {/* Sign-In Form */}
                        <div
                            className={`transition-all duration-500 ease-in-out ${activeTab === "signin" ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full absolute"
                            }`}
                        >
                            <LoginForm/>
                        </div>

                        {/* Sign-Up Form */}
                        <div
                            className={`transition-all duration-500 ease-in-out ${activeTab === "signup" ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full absolute"
                            }`}
                        >
                            <RegisterForm/>
                        </div>
                    </div>

                    {/* Divider */}
                    {/*<div className="mt-6">*/}
                    {/*    <div className="relative">*/}
                    {/*        <div className="absolute inset-0 flex items-center">*/}
                    {/*            <div className="w-full border-t border-gray-700"></div>*/}
                    {/*        </div>*/}
                    {/*        <div className="relative flex justify-center text-sm">*/}
                    {/*            <span className="px-2 bg-gray-900 text-gray-400">Or continue with</span>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    {/*/!* Social Login Buttons *!/*/}
                    {/*<div className="mt-6 grid grid-cols-2 gap-4">*/}
                    {/*    <button*/}
                    {/*        type="button"*/}
                    {/*        className="w-full py-2 px-4 bg-gray-800 hover:bg-gray-700 rounded-md text-white font-semibold focus:outline-none focus:ring-2 focus:ring-gray-500"*/}
                    {/*    >*/}
                    {/*        Google*/}
                    {/*    </button>*/}
                    {/*    <button*/}
                    {/*        type="button"*/}
                    {/*        className="w-full py-2 px-4 bg-gray-800 hover:bg-gray-700 rounded-md text-white font-semibold focus:outline-none focus:ring-2 focus:ring-gray-500"*/}
                    {/*    >*/}
                    {/*        GitHub*/}
                    {/*    </button>*/}
                    {/*</div>*/}
                </div>
            </main>



        </div>
    );
}