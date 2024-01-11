import { useUser } from "@/lib/store/user";
import Image from "next/image";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";
import { MdDashboard } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";
import { Button } from "./ui/button";
import { createBrowserClient } from "@supabase/ssr";

export const Profile = () => {
  const user = useUser((state) => state.user);
  const setuser = useUser((state) => state.setuser);

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const handleLogout = async() => {
      await supabase.auth.signOut();
      setuser(undefined);
  }

  return (
    <Popover>
      <PopoverTrigger>
        <Image
          className="rounded-full ring-2 ring-blue-600"
          src={user?.user_metadata.avatar_url}
          alt="users"
          width={45}
          height={45}
        />
      </PopoverTrigger>
      <PopoverContent className="space-y-3 p-2 mr-28 mt-2">
        <div className="font-kanit text-sm px-2">
          <p className="text-[1rem]">{user?.user_metadata?.user_name}</p>
          <p className="text-blue-400 mb-1.5">{user?.user_metadata?.email}</p>
        </div>
        <Link href="/dashboard">
          <Button
            className="w-full flex items-center justify-between gap-2"
            variant="ghost"
          >
            Dashboard
            <MdDashboard />
          </Button>
        </Link>
        <Button
          className="w-full flex items-center justify-between gap-2"
          variant="ghost"
          onClick={handleLogout}
        >
          Logout
          <IoLogOut />
        </Button>
      </PopoverContent>
    </Popover>
  );
};
