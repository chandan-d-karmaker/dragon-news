"use client";
import { authClient, useSession } from "@/lib/auth-client";
import React from "react";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Login = () => {
    const user = useSession();

    const handleGoogleSignIn = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    };
    const handleGitHUbeSignIn = async () => {
        const data = await authClient.signIn.social({
            provider: "github",
        });
    };
    return (
        <div className="space-y-2">
            <h2 className="text-xl font-semibold">Login with</h2>
            <div
                onClick={handleGoogleSignIn}
                className="btn flex gap-2 items-center justify-center border p-2 rounded-sm text-blue-500"
            >
                {" "}
                <FaGoogle /> Login with google
            </div>
            <div onClick={handleGitHUbeSignIn} className="btn flex gap-2 items-center justify-center border p-2 rounded-sm">
                {" "}
                <FaGithub /> Login with github
            </div>
        </div>
    );
};

export default Login;
