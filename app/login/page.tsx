import LoginForm from "@/components/LoginForm";
import SignIn from "@/components/SignIn";
import Link from "next/link";

export default function Login() {
  return (
    <>
      <div className="w-full flex items-center justify-center pt-16 border-0">
        <div className="w-104 bg-white rounded-lg shadow-lg p-8 flex flex-col gap-[1.2rem]">
          <h1 className="text-[1.7rem] font-semibold text-center">Login</h1>

          <LoginForm />

          <div className="flex items-center gap-[0.6rem]">
            <div className="flex-1 h-[0.06rem] bg-neutral-300" />
            <span className="text-[0.9rem] text-neutral-500">or</span>
            <div className="flex-1 h-[0.06rem] bg-neutral-300" />
          </div>

          <div className="flex items-center border-0 justify-center">
            <SignIn />
          </div>

          <p className="text-center text-[0.9rem] text-neutral-600 flex gap-1 self-center">
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
