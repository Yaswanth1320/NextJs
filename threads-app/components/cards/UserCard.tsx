"use client"
import Image from "next/image";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
interface Props{
    id:string;
    name:string;
    username:string;
    imgUrl:string;
    personType:string;
}

function UserCard({ id, name, username, imgUrl, personType }: Props) {
    const router = useRouter();
  return (
    <article className="font-kanit user-card">
      <div className="flex items-center gap-2">
        <div className="relative h-14 w-14 object-cover">
          <Image
            src={imgUrl}
            alt="comment-profile"
            fill
            className="object-cover rounded-full"
          />
        </div>
        <div className="flex-1 text-ellipsis">
          <h4 className="text-base-semibold text-light-2">{name}</h4>
          <p className="text-small-medium text-gray-1">{username}</p>
        </div>
      </div>

      <Button className="user-card_button bg-slate-600 text-light-2" onClick={() => router.push(`/profile/${id}`)}>view</Button>
    </article>
  );
}

export default UserCard
