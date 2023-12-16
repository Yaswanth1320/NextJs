"use client"
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { signIn } from "next-auth/react";

function SignInGithub() {
  return (
    <Button onClick={() => signIn('github',{
        callbackUrl: `${window.location.origin}`
    })} className="mt-4 bg-violet-600">
      Login with Github <Github className="w-4 h-4 mx-2" />
    </Button>
  );
}

export default SignInGithub