import { fetchUserPosts } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";
import ThreadCard from "../cards/ThreadCard";

interface Props{
    currentUserId: string;
    accountId: string;
    accountType: string;
}

async function ThreadsTab({ currentUserId, accountId, accountType}: Props) {

    let result = await fetchUserPosts(accountId);
    if(!result) return redirect('/');

  return (
    <div className="font-kanit mt-9 flex flex-col gap-8">
      {result.threads.map((thread: any) => (
        <ThreadCard
          key={thread._id}
          id={thread._id}
          currentUserId={currentUserId}
          parentId={thread.parentId}
          content={thread.text}
          author={
            accountType === 'User'
            ? { name: result.name, image: result.image, id: result.id }
            : { name: thread.author.name, image: thread.author.image, id: thread.author.id}
          }
          community={thread.community}
          createdAt={thread.createdAt}
          comments={thread.children}
        />
      ))}
    </div>
  );
}

export default ThreadsTab
