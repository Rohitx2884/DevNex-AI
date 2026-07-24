"use client";

import { useState } from "react";
import api from "@/lib/api";
import Link from "next/link";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function SignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      const response = await api.post("/auth/register", {
  name,
  email,
  password,
});

      alert(response.data.message);

      setName("");
      setEmail("");
      setPassword("");
    } catch (error: any) {
      if (error.response) {
        alert(error.response.data.detail);
      } else {
        alert("Server Error");
      }
    }
  };

  return (
    <Card className="w-full max-w-md rounded-3xl p-8 shadow-xl">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold">
          Create Account
        </h1>

        <p className="mt-2 text-gray-500">
          Join DevNex AI today
        </p>
      </div>

      <div className="space-y-5">
        <div>
          <Label>Full Name</Label>

          <Input
            className="mt-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John Doe"
          />
        </div>

        <div>
          <Label>Email</Label>

          <Input
            className="mt-2"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="john@gmail.com"
          />
        </div>

        <div>
          <Label>Password</Label>

          <Input
            className="mt-2"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="********"
          />
        </div>

        <Button
          onClick={handleSignup}
          className="w-full h-11"
        >
          Create Account
        </Button>
      </div>

      <p className="mt-8 text-center text-sm text-gray-500">
        Already have an account?

        <Link
          href="/login"
          className="ml-1 font-semibold text-black"
        >
          Login
        </Link>
      </p>
    </Card>
  );
}