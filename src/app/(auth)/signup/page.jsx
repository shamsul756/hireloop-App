"use client";
import { Radio, RadioGroup} from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import {
    Button,
    Card,

    Form,
    Input,
    TextField,
    Label,
    FieldError,
    Description,
} from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const SignUpPage = () => {
    const router = useRouter();

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries());

        const { data, error } = await authClient.signUp.email({
            email: user.email,
            password: user.password,
            name: user.name,
            image: user.image,
            role: user.role,
        });

        if (data) {
            router.push("/signin");
        }

        if (error) {
            console.log(error);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-blue-100 flex items-center justify-center px-4">
            <Card className="w-full max-w-md shadow-2xl border border-gray-200">

                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-100">
                        Create Account
                    </h1>
                    <p className="text-gray-300 mt-2">
                        Join us and start your journey today
                    </p>
                </div>

                <Form
                    onSubmit={onSubmit}
                    className="flex flex-col gap-5"
                >
                    <TextField
                        isRequired
                        name="name"
                        type="text"
                    >
                        <Label>Full Name</Label>
                        <Input placeholder="John Doe" />
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        name="image"
                        type="url"
                    >
                        <Label>Profile Image URL</Label>
                        <Input placeholder="https://example.com/avatar.jpg" />
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (
                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
                            ) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <Label>Email Address</Label>
                        <Input placeholder="john@example.com" />
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                        validate={(value) => {
                            if (value.length < 8) {
                                return "Password must be at least 8 characters";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }
                            if (!/[0-9]/.test(value)) {
                                return "Password must contain at least one number";
                            }
                            return null;
                        }}
                    >
                        <Label>Password</Label>
                        <Input placeholder="Enter your password" />
                        <Description>
                            Minimum 8 characters, 1 uppercase letter, and 1 number.
                        </Description>
                        <FieldError />
                    </TextField>
                    {/* role based section */}
                    <div className="flex flex-col gap-4">
      <Label>whats your role</Label>
      <RadioGroup defaultValue="seeker" name="role" orientation="horizontal">
        <Radio value="seeker">
          <Radio.Control>
            <Radio.Indicator />
          </Radio.Control>
          <Radio.Content>
            <Label>job seeker</Label>
         
          </Radio.Content>
        </Radio>
        <Radio value="recruiter">
          <Radio.Control>
            <Radio.Indicator />
          </Radio.Control>
          <Radio.Content>
            <Label>job recruiter</Label>
           
          </Radio.Content>
        </Radio>
      
      </RadioGroup>
    </div>
                    <Link href={"/signin"}>
                        <Button
                            type="submit"
                            color="primary"
                            className="w-full h-12 font-semibold text-base"
                        >
                            Create Account
                        </Button></Link>

                    <Link href={"/signin"}>
                        <p className="text-center text-sm text-gray-500">
                            Already have an account?
                            <span className="text-primary font-medium cursor-pointer ml-1 hover:underline text-blue-300">
                                Sign In
                            </span>
                        </p></Link>

                </Form>

            </Card>
        </div>
    );
};

export default SignUpPage;