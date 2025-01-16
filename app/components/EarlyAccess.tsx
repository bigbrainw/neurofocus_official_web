"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function EarlyAccess() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log({ name, email, interest });
  };

  return (
    <section
      id="early-access"
      className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 flex justify-center"
    >
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
          Early Access
        </h2>
        <p className="text-center mb-8">
          Be the first to experience the future of brain technology.
        </p>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
          <Input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Select onValueChange={setInterest} required>
            <SelectTrigger>
              <SelectValue placeholder="Select your interest" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="personal">Personal Use</SelectItem>
              <SelectItem value="research">Research</SelectItem>
              <SelectItem value="enterprise">Enterprise</SelectItem>
            </SelectContent>
          </Select>
          <Button type="submit" className="w-full">
            Join the Waitlist
          </Button>
        </form>
      </div>
    </section>
  );
}
