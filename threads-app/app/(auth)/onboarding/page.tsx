import AccountProfile from "@/components/form/AccountProfile";
import { currentUser } from "@clerk/nextjs";

export default async function page() {
  const user = await currentUser();
  const userInfo = {};

  const userData = {
    id: user?.id,
    objectId: userInfo?._id,
    username: userInfo?.username || user?.username,
    name: userInfo?.name || user?.firstName,
    bio: userInfo?.bio || "",
    image: userInfo?.image || user?.imageUrl,
  };

  return (
    <main className="font-kanit mx-auto flex max-w-2xl flex-col justify-start px-10 py-5">
      <h1 className="head-text">Profile</h1>
      <p className="mt-1 text-base-regular text-light-2">
        Chnage your profile to use Threads
      </p>

    <section className="p-10 mt-5 bg-dark-2">
      <AccountProfile user={userData} btnTitle="Continue"/>
    </section>

    </main>
  )
}
