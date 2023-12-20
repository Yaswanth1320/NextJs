"use client"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { UserData } from "@/types";
import { Button } from "./ui/button";
import { FaAngleRight } from "react-icons/fa";
import { GrStorage } from "react-icons/gr";
import { IoTime } from "react-icons/io5";
import { RiFileTransferFill } from "react-icons/ri";
import { LuFileEdit } from "react-icons/lu";

export default function Plans({ data }: { data: UserData }) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex gap-2 text-xl items-center">
          {data.icon}
          {data.name}
        </CardTitle>
        <CardDescription className="flex flex-col gap-2">
          <p className="text-3xl">{data.title}</p>
          <p className="text-xl pb-4">{data.cost}</p>
          <Button className="transition-all duration-700 ease-in-out flex bg-blue-500 hover:bg-blue-400 dark:text-white dark:hover:bg-blue-700 items-center justify-between hover:justify-between text-[1rem] py-5">
            Try for free <FaAngleRight />
          </Button>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <p className="flex items-center gap-4">
          {data.icon}
          {data.users}
        </p>
        <p className="flex items-center gap-4">
          <GrStorage />
          {data.storage}
        </p>
        <p className="flex items-center gap-4">
          <IoTime />
          {data.time}
        </p>
        <p className="flex items-center gap-4">
          <RiFileTransferFill />
          {data.delivery}
        </p>
        <p className="flex items-center gap-4">
          <LuFileEdit />
          {data.features}
        </p>
      </CardContent>
    </Card>
  );
}
