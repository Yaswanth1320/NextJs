import ThreadCard from "@/components/cards/ThreadCard";
import { fetchPosts } from "@/lib/actions/thread.action";
import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const user = await currentUser();
  const result = await fetchPosts(1,30);
  
  return (
    <div className="font-abc">
      <section className="mt-6 flex flex-col gap-6">
          {result.posts.length === 0 ? (
            <p className="no-result">No posts found.</p>
          ):(
              <>
              {result.posts.map((post) =>(
                <ThreadCard 
                key={post._id}
                id={post._id}
                currentUserId={user?.id || ""}
                parentId={post.parentId}
                content={post.text}
                author={post.author}
                community={post.community}
                createdAt={post.createdAt}
                comments={post.children}
                />
              ))}
              </>
          )}
      </section>
    </div>
  );
}
