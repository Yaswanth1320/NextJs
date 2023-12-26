import { fetchUser, getActivity } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

async function page() {
  const user = await currentUser();
  if (!user) return null;

  const userInfo = await fetchUser(user.id);
  if (!userInfo?.onboarded) redirect("/onboarding");

  const activity = await getActivity(userInfo._id);

  return (
    <div>
      <h1 className="head-text mb-4 font-kanit">Activity</h1>
      <section className="flex flex-col mt-2 gap-5">
        {activity.length > 0 ? (
          <>
            {activity.map((activity) => (
              <Link href={`/thread/${activity.parentId}`} key={activity._id}>
                <article className="activity-card">
                  <div className="relative w-7 h-7 object-cover">
                    <Image
                      src={activity.author.image}
                      alt="avtivity"
                      fill
                      className="object-cover rounded-full shadow-2xl"
                    />
                  </div>
                  <p className="text-light-1 text-[0.8rem] font-kanit">
                    <span className="text-slate-600">{activity.author.name}</span> replied to your thread.
                  </p>
                </article>
              </Link>
            ))}
          </>
        ) : (
          <p className="no-result">no current activity</p>
        )}
      </section>
    </div>
  );
}

export default page;
