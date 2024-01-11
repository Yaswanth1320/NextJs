"use client"
import Link from "next/link";
import LoginForm from "./LoginForm";
import { useUser } from "@/lib/store/user";
import { Profile } from "./Profile";

export const Navbar = () => {
  const user = useUser((state) => state.user)
  console.log(user)
  return (
    <nav className="flex items-center justify-between">
      <div className="text-xl">
        <Link href="/">Trendy</Link>
      </div>
      {user?.id ? <Profile /> : <LoginForm />}
    </nav>
  );
};
