import React from "react";
import Image from "next/image";

interface Props{
    accountId:string;
    authUserId:string;
    name:string;
    username:string;
    imgUrl: string;
    bio:string;
    type?: 'User' | 'Community';
}

function ProfileHead({ accountId, authUserId, name, username, imgUrl, bio }: Props) {
  return (
    <div className="font-kanit flex flex-col justify-start w-full">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-1.5">
          <div className="relative h-20 w-20 object-cover">
            <Image
              src={imgUrl}
              alt={`Profile picture of ${username}`}
              fill
              className="object-cover rounded-full shadow-2xl"
            />
          </div>

          <div className="flex-1">
            <h2 className="text-light-1 text-left text-heading3-bold">
              {name}
            </h2>
            <p className="text-base-medium text-gray-1">@{username}</p>
          </div>
        </div>
      </div>
      <p className="max-w-lg mt-6 text-light-2 text-base-regular">{bio}</p>
      <div className="w-full h-0.5 bg-dark-3 mt-12" />
    </div>
  );
}

export default ProfileHead;
