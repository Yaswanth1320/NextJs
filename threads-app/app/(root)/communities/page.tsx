import PostThread from "@/components/form/PostThread";
import ProfileHead from "@/components/shared/ProfileHead";
import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { profileTabs } from "@/constants";
import Image from "next/image";
import ThreadsTab from "@/components/shared/ThreadsTab";


async function page() {
    const user = await currentUser();
    if (!user) return null;

    const userInfo = await fetchUser(user.id);
    if (!userInfo?.onboarded) redirect("/onboarding");

  return (
    <div>
      <h1 className="head-text mb-10 font-kanit">communities</h1>
    </div>
  );
}

export default page;