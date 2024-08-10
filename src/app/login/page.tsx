import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <section className="h-screen flex flex-row bg-white">
      <div className="left w-1/2 h-full flex justify-center items-center">
        <img
          src="/logo.png"
          alt="Image Logo"
          className="w-4/5 object-contain ml-20"
        />
      </div>
      <div className="right w-1/2 h-full flex ml-10 items-center">
        <div className="form-container h-3/4 w-4/5 bg-slate-200 rounded-xl  shadow-lg shadow-cyan-500/50 flex flex-col items-center">
          <div className="forms space-y-10 w-4/5 mt-24">
            <Input
              className="h-16 text-lg"
              type="text"
              placeholder="Username"
            />
            <Input
              className="h-16 text-lg"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="btn-container mt-12 w-full flex flex-col items-center space-y-10">
            <Button className="h-16 w-4/5 text-white text-2xl font-bold bg-gradient-to-r from-blue-500 to-red-500">
              Login
            </Button>
            <Button className="h-16 w-4/5 text-blue-500 text-2xl font-bold bg-white border border-blue-500 rounded-lg">
              Create Account
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
