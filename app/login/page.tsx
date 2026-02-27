import SignIn from "@/components/SignIn";
import { loginAction } from "@/libs/loginActions";
import Link from "next/link";
import React from "react";

export default function Login() {
  return (
    <>
      <div className="w-full flex items-center justify-center pt-16 border-0">
        <div className="w-104 bg-white rounded-lg shadow-lg p-8 flex flex-col gap-[1.2rem]">
          <h1 className="text-[1.7rem] font-semibold text-center">Login</h1>

          <form action={loginAction} className="flex flex-col gap-4">
            <input
              type="email"
              name="email"
              required
              placeholder="Email"
              className="w-full border border-neutral-300 rounded-md p-[0.8rem] text-[1rem] outline-none focus:border-black"
            />

            <input
              type="password"
              name="password"
              required
              placeholder="Password"
              className="w-full border border-neutral-300 rounded-md p-[0.8rem] text-[1rem] outline-none focus:border-black"
            />

            <button
              type="submit"
              className="w-full bg-black text-white rounded-md py-[0.8rem] text-[1rem] hover:opacity-90 transition cursor-pointer"
            >
              Login
            </button>
          </form>

          <div className="flex items-center gap-[0.6rem]">
            <div className="flex-1 h-[0.06rem] bg-neutral-300" />
            <span className="text-[0.9rem] text-neutral-500">or</span>
            <div className="flex-1 h-[0.06rem] bg-neutral-300" />
          </div>

          <div className="flex items-center border-0 justify-center">
            <SignIn />
          </div>

          <p className="text-center text-[0.9rem] text-neutral-600">
            No account?
            <Link
              href="/register"
              className="text-black font-medium hover:underline"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
