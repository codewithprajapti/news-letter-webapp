import { signIn } from "@/auth";

export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google", {
          redirectTo: "/",
        });
      }}
      className="flex w-full"
    >
      <button
        type="submit"
        className="w-full flex items-center justify-center gap-[0.6rem] border border-neutral-300 rounded-md py-[0.8rem] text-[1rem] font-medium bg-white hover:bg-neutral-100 transition cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          className="w-[1.4rem] h-[1.4rem]"
        >
          <path
            fill="#EA4335"
            d="M24 9.5c3.4 0 6.3 1.2 8.6 3.2l6.4-6.4C34.9 2.3 29.8 0 24 0 14.6 0 6.6 5.5 2.7 13.5l7.6 5.9C12.3 13.4 17.7 9.5 24 9.5z"
          />
          <path
            fill="#4285F4"
            d="M46.1 24.5c0-1.6-.1-3.1-.4-4.5H24v9h12.5c-.5 2.7-2 5-4.3 6.6l6.7 5.2c3.9-3.6 6.2-9 6.2-16.3z"
          />
          <path
            fill="#FBBC05"
            d="M10.3 28.6c-.5-1.4-.8-2.9-.8-4.6s.3-3.2.8-4.6l-7.6-5.9C1 16.8 0 20.3 0 24s1 7.2 2.7 10.5l7.6-5.9z"
          />
          <path
            fill="#34A853"
            d="M24 48c6.5 0 11.9-2.1 15.9-5.8l-6.7-5.2c-2 1.3-4.5 2.1-9.2 2.1-6.3 0-11.7-3.9-13.7-9.9l-7.6 5.9C6.6 42.5 14.6 48 24 48z"
          />
        </svg>
        Sign in with Google
      </button>
    </form>
  );
}
