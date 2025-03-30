"use client";

import { useState } from "react";
import { X, ChromeIcon as Google, Twitter, Facebook } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [mode, setMode] = useState<"login" | "register">("login");

  const toggleMode = () => {
    setMode(mode === "login" ? "register" : "login");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md p-0 gap-0 border-none">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <DialogTitle className="text-2xl font-bold">
              {mode === "login" ? "Login" : "Register"}
            </DialogTitle>
            <button
              onClick={onClose}
              className="rounded-full p-1 hover:bg-gray-100"
            >
              {/* <X className="h-5 w-5" /> */}
            </button>
          </div>

          {mode === "login" ? (
            <LoginForm toggleMode={toggleMode} />
          ) : (
            <RegisterForm toggleMode={toggleMode} />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

function LoginForm({ toggleMode }: { toggleMode: () => void }) {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <div className="relative">
          <Input
            id="username"
            placeholder="User Name*"
            className="h-12 pl-4 pr-10 border-gray-300"
          />
        </div>
      </div>

      <div className="space-y-2">
        <div className="relative">
          <Input
            id="password"
            type="password"
            placeholder="Password*"
            className="h-12 pl-4 pr-10 border-gray-300"
          />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember" className="text-sm">
            Remember me
          </Label>
        </div>
        <a href="#" className="text-sm text-gray-900 hover:underline">
          Lost Your password?
        </a>
      </div>

      <Button
        className="w-full h-12 bg-yellow-400 hover:bg-yellow-500 text-black font-medium"
        type="submit"
      >
        Login
      </Button>

      <div className="text-center mt-4">
        <p className="text-sm text-gray-600">
          Not a member?{" "}
          <button
            onClick={toggleMode}
            className="text-gray-900 font-medium hover:underline"
          >
            Register here
          </button>
        </p>
      </div>

      <div className="flex justify-center space-x-4 mt-4">
        <button className="rounded-full p-2 hover:bg-gray-100">
          <Google className="h-5 w-5" />
        </button>
        <button className="rounded-full p-2 hover:bg-gray-100">
          <Twitter className="h-5 w-5" />
        </button>
        <button className="rounded-full p-2 hover:bg-gray-100">
          <Facebook className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

function RegisterForm({ toggleMode }: { toggleMode: () => void }) {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <div className="relative">
          <Input
            id="fullname"
            placeholder="Full Name*"
            className="h-12 pl-4 pr-10 border-gray-300"
          />
        </div>
      </div>

      <div className="space-y-2">
        <div className="relative">
          <Input
            id="email"
            type="email"
            placeholder="Email Address*"
            className="h-12 pl-4 pr-10 border-gray-300"
          />
        </div>
      </div>

      <div className="space-y-2">
        <div className="relative">
          <Input
            id="reg-password"
            type="password"
            placeholder="Password*"
            className="h-12 pl-4 pr-10 border-gray-300"
          />
        </div>
      </div>

      <div className="space-y-2">
        <div className="relative">
          <Input
            id="confirm-password"
            type="password"
            placeholder="Confirm Password*"
            className="h-12 pl-4 pr-10 border-gray-300"
          />
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms" className="text-sm">
          I agree to the{" "}
          <a href="#" className="text-gray-900 hover:underline">
            Terms & Conditions
          </a>
        </Label>
      </div>

      <Button
        className="w-full h-12 bg-yellow-400 hover:bg-yellow-500 text-black font-medium"
        type="submit"
      >
        Register
      </Button>

      <div className="text-center mt-4">
        <p className="text-sm text-gray-600">
          Already have an account?{" "}
          <button
            onClick={toggleMode}
            className="text-gray-900 font-medium hover:underline"
          >
            Login here
          </button>
        </p>
      </div>

      <div className="flex justify-center space-x-4 mt-4">
        <button className="rounded-full p-2 hover:bg-gray-100">
          <Google className="h-5 w-5" />
        </button>
        <button className="rounded-full p-2 hover:bg-gray-100">
          <Twitter className="h-5 w-5" />
        </button>
        <button className="rounded-full p-2 hover:bg-gray-100">
          <Facebook className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
