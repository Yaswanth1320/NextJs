"use client";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

function Logout() {
  return (
    <Button
      onClick={() => signOut({ callbackUrl: `${window.location.origin}/auth` })}
      className="mt-2"
    >
      Logout
    </Button>
  );
}

export default Logout;
