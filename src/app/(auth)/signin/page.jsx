"use client";

import { authClient } from "@/lib/auth-client";
import {
    Button,
    Card,
    Form,
    Input,
    TextField,
    Label,
    FieldError,
} from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const SignIn = () => {
    const router = useRouter();

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries());

        const { data, error } = await authClient.signIn.email({
            email: user.email,
            password: user.password,
            callbackURL: "/"
        });

        if (data) {
            router.push("/");
        }

        if (error) {
            console.log(error);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-blue-100 flex items-center justify-center px-4">
            <Card className="w-full max-w-md p-8 shadow-2xl rounded-2xl border border-gray-200">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-300">
                        Welcome Back 👋
                    </h1>
                    <p className="text-gray-500 mt-2">
                        Sign in to your account
                    </p>
                </div>

                <Form onSubmit={onSubmit} className="flex flex-col gap-5">
                    <TextField
                        isRequired
                        name="email"
                        type="email"
                    >
                        <Label>Email</Label>
                        <Input placeholder="john@example.com" />
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        name="password"
                        type="password"
                    >
                        <Label>Password</Label>
                        <Input placeholder="Enter your password" />
                        <FieldError />
                    </TextField>
                   
                        <Button
                            type="submit"
                            color="primary"
                            className="w-full h-12 text-base font-semibold"
                        >
                            Sign In
                        </Button>
                    

                    <Link href={"/signup"}>
                        <p className="text-center text-sm text-gray-500">
                            Don't have an account?
                            <span className="ml-1 text-blue-600 font-medium cursor-pointer hover:underline">
                                Sign Up
                            </span>
                        </p>
                    </Link>

                </Form>
            </Card>
        </div>
    );
};

export default SignIn;