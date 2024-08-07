"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { v4 as uuid } from "uuid";

export default function Home() {
  const router = useRouter();
  const [meetingId, setMeetingId] = useState();
  const joinMeeting = () => {
    router.push(`/room/${meetingId}`);
  };

  return (
    <main>
      <Card className="p-4 mx-auto mt-12 max-w-96 space-y-4">
        <Link href={`room/${uuid()}`}>
          <Button>Create new meeting</Button>
        </Link>
        <p className="text-gray-500">or,</p>
        <div className="flex space-x-4">
          <Input
            value={meetingId}
            onChange={(e) => setMeetingId(e.target.value)}
            name="MeetingCode"
            placeholder="Enter the meeting link"
          />
          <Button onClick={joinMeeting}>Join meeting</Button>
        </div>
      </Card>
    </main>
  );
}
