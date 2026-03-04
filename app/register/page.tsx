import SignIn from "@/components/SignIn";
import Link from "next/link";
import React from "react";

import { registerAction } from "@/libs/registerAction";

export default function Register() {
  return (
    <>
      <div className="w-full flex items-center justify-center pt-16 border-0">
        <div className="w-104 bg-white rounded-lg shadow-lg p-8 flex flex-col gap-[1.2rem]">
          <h1 className="text-[1.7rem] font-semibold text-center">
            Registration
          </h1>

          <form action={registerAction} className="flex flex-col gap-4">
            <input
              name="firstName"
              placeholder="First Name"
              required
              className="w-full border border-neutral-300 rounded-md p-[0.8rem] text-[1rem] outline-none focus:border-black"
            />

            <input
              name="lastName"
              placeholder="Last Name"
              required
              className="w-full border border-neutral-300 rounded-md p-[0.8rem] text-[1rem] outline-none focus:border-black"
            />

            <input
              name="email"
              type="email"
              placeholder="Email"
              required
              className="w-full border border-neutral-300 rounded-md p-[0.8rem] text-[1rem] outline-none focus:border-black"
            />

            <input
              name="password"
              type="password"
              placeholder="Password"
              required
              className="w-full border border-neutral-300 rounded-md p-[0.8rem] text-[1rem] outline-none focus:border-black"
            />

            <button
              type="submit"
              className="w-full bg-black text-white rounded-md py-[0.8rem] text-[1rem] hover:opacity-90 transition cursor-pointer"
            >
              Register
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

          <p className="text-center text-[0.9rem] text-neutral-600 flex gap-1 self-center">
            Already Have Account?
            <Link
              href="/login"
              className="text-black font-medium hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
