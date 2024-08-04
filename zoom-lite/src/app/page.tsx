import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { v4 as uuid } from 'uuid';

export default function Home() {
  return (
    <main>
      <Card className="p-4 mx-auto mt-12 max-w-96 space-y-4">
        <Link href={`room/${uuid()}`}>
          <Button>Create new meeting</Button>
        </Link>
        <p className="text-gray-500">or,</p>
        <form className="flex space-x-4">
          <Input type="text" placeholder="Enter the meeting link" />
          <Button>Join meeting</Button>
        </form>
      </Card>
    </main>
  );
}
