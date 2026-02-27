import { signOut } from "@/auth.ts";
import { LogOut } from "lucide-react";

export function SignOut() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <button type="submit">
        <LogOut className="cursor-pointer text-red-900 hover:text-red-500" />
      </button>
    </form>
  );
}
