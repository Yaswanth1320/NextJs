import { fetchUser, fetchUsers } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import UserCard from "@/components/cards/UserCard";

async function page() {
  const user = await currentUser();
  if (!user) return null;

  const userInfo = await fetchUser(user.id);
  if (!userInfo?.onboarded) redirect("/onboarding");

  const result = await fetchUsers({
    userId: user.id,
    searchString: '',
    pageNumber: 1,
    pageSize: 25
  })

  return (
    <div>
      <h1 className="head-text mb-10 font-kanit">Search</h1>


      <div className="flex flex-col gap-6 mt-14">
        {result.users.length === 0 ? (
          <p className="no-result">No users</p>
        ): (
          <>
          {result.users.map((user) =>(
              <UserCard 
              key={user.id}
              id={user.id}
              name={user.name}
              username={user.username}
              imgUrl={user.image}
              personType="User"
              />
          ))}
          </>
        )}
      </div>
    </div>
  );
}

export default page;
