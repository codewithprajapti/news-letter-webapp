import Image from "next/image";
import { auth } from "../auth";
import { SignOut } from "./SignOut";
import LoginBtn from "./LoginBtn";

export default async function UserComponent() {
  const session = await auth();
  const user = session?.user;

  if (!user) {
    return <LoginBtn />;
  }

  const image = user.image || "/Avatar.png";

  return (
    <div className="flex flex-col items-center gap-3 border-0 rounded-xl w-fit">
      <div className="relative w-16 h-16">
        <Image
          src={image}
          alt={user.name ?? "User"}
          fill
          sizes="(max-width: 40em) 3rem, 4rem"
          className="rounded-full object-cover border border-gray-200"
        />
      </div>
      <div className="flex border-0 gap-2 items-center">
        <p className="text-sm font-semibold text-gray-800">{user.name}</p>
        <SignOut />
      </div>
    </div>
  );
}
