"use client";

import { useActionState } from "react";
import { loginAction } from "@/libs/loginActions";

const initialState = { error: null };

export default function LoginForm() {
  const [state, formAction] = useActionState(loginAction, initialState);

  return (
    <form action={formAction} className="flex flex-col gap-4">
      <input
        type="email"
        name="email"
        required
        placeholder="Email"
        className="w-full border border-neutral-300 rounded-md p-[0.8rem]"
      />

      <input
        type="password"
        name="password"
        required
        placeholder="Password"
        className="w-full border border-neutral-300 rounded-md p-[0.8rem]"
      />

      <button
        type="submit"
        className="w-full bg-black text-white rounded-md py-[0.8rem] cursor-pointer"
      >
        Login
      </button>

      {state?.error && (
        <p className="text-red-500 text-sm text-center">{state.error}</p>
      )}
    </form>
  );
}
