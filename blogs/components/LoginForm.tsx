"use client";
import { IoLogoGithub } from "react-icons/io5";
import { Button } from "./ui/button";
import { createBrowserClient } from "@supabase/ssr";
import { usePathname } from "next/navigation";

const LoginForm = () => {
  const pathname = usePathname();

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const handleLogin = () => {
    supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: location.origin + "/auth/callback?next=" + pathname,
      },
    });
  };

  return (
    <Button className="flex text-[1rem] items-center gap-1" onClick={handleLogin}>
      <IoLogoGithub />
      Login
    </Button>
  );
};

export default LoginForm;
