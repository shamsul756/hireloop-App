"use client";

import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

import { Check, Mail, Lock, User, ImageIcon } from "lucide-react";
import Link from "next/link";

const SignUp = () => {
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    console.log(user);

   
    const { data, error } = await authClient.signUp.email({
      email: user.email,
      password: user.password,
      name: user.name,
      image: user.photoURL,
    });
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-cyan-900/50 to-black p-4 antialiased">
      {/* Decorative Background */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-indigo-400/20 blur-3xl" />

      {/* Card */}
      <div className="relative w-full max-w-md rounded-3xl border border-white/60 bg-white/70 p-8 shadow-xl backdrop-blur-xl">

        {/* Header */}
        <div className="mb-8 text-center">
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700">
            Create Account
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Join us and start your journey today
          </p>
        </div>

        {/* Form */}
        <Form className="flex flex-col gap-5" onSubmit={onSubmit}>
          
          <TextField isRequired name="name">
            <Label>Name</Label>
            <Input startContent={<User size={18} />} placeholder="John Doe" />
          </TextField>

          <TextField isRequired name="email" type="email">
            <Label>Email</Label>
            <Input startContent={<Mail size={18} />} placeholder="john@example.com" />
          </TextField>

          <TextField isRequired name="photoURL" type="url">
            <Label>Profile Image</Label>
            <Input startContent={<ImageIcon size={18} />} placeholder="https://..." />
          </TextField>

          <TextField isRequired minLength={8} name="password" type="password">
            <Label>Password</Label>
            <Input startContent={<Lock size={18} />} placeholder="Enter password" />
            <Description>Must be 8+ characters</Description>
          </TextField>

          <Button type="submit" className="w-full">
            <Check size={18} />
            Create Account
          </Button>
        </Form>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-600 hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;