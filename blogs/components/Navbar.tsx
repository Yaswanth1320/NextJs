import Link from "next/link";
import LoginForm from "./LoginForm";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between">
      <div className="text-xl">
        <Link href="/">Trendy</Link>
      </div>
      <LoginForm />
    </nav>
  );
};
