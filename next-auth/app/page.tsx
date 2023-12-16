import { getServerSession } from "next-auth"
import { authOptions } from "./utils/auth"
import Logout from "./components/Logout";
import Link from "next/link";
import { Button } from "@/components/ui/button";


export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <div className="p-10">
      <h1>Home page public access</h1>
      {session ? (
        <div>
          <h1>logged in</h1>
          <Logout />
        </div>
      ) : (
        <div>
          <Button>
            <Link href="/auth">Login</Link>
          </Button>
        </div>
      )}
    </div>
  );
}
