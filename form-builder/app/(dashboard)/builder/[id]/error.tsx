"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect } from "react";

function error({ error }: { error: Error }) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className="w-full h-full flex items-center justify-center gap-4 flex-col">
      <h1 className="font-kanit text-4xl">Oops! Something went wrong</h1>
      <Button>
        <Link href={"/"}>Home page</Link>
      </Button>
    </div>
  );
}

export default error;
