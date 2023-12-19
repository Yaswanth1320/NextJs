"use client"
import { FileType } from "@/types";
import { Button } from "./ui/button";
import { DataTable } from "./Table";
import { columns } from "./Colums";
import { useUser } from "@clerk/nextjs";
import { useState,useEffect } from "react";
import { useCollection } from 'react-firebase-hooks/firestore';
import { collection,orderBy, query } from "firebase/firestore";
import { db } from "@/firebase";
import { Skeleton } from "@/components/ui/skeleton";


export default function TableWrapper({Data} : { Data : FileType[]}) {
    const { user } = useUser();
    const [sort, setSort] = useState<'desc' | 'asc'>('desc')
    const [intialData,setIntialData] = useState<FileType[]>([]);

    const [ docs,loading,error ] = useCollection(
        user &&
        query(
            collection(db,"users",user.id,"files"),
            orderBy("timeStamp", sort)
        )
    )

    useEffect(() => {
       if(!docs) return;

       const files: FileType[] = docs.docs.map((item) => ({
         id: item.id,
         fileName: item.data().fileName || item.id,
         timeStamp:
           new Date(item.data().timeStamp?.seconds * 1000) || undefined,
         fullName: item.data().fullName,
         downloadUrl: item.data().downloadUrl,
         type: item.data().type,
         size: item.data().size,
       }));

       setIntialData(files)

    }, [docs])

    if(docs?.docs.length === undefined){
        return (
          <div className="flex flex-col">
            <Button variant={"outline"} className="ml-auto w-36 h-10 mb-5">
              <Skeleton className="h-5 w-full" />
            </Button>

            <div className="border rounded-lg">
              <div className="border-b h-12" />
              {Data.map((file) => (
                <div
                  key={file.id}
                  className="flex items-center space-x-4 p-5 w-full"
                >
                  <Skeleton className="h-12 w-12" />
                  <Skeleton className="h-12 w-full" />
                </div>
              ))}

              {Data.length === 0 && (
                <div
                  className="flex items-center space-x-4 p-5 w-full"
                >
                  <Skeleton className="h-12 w-12" />
                  <Skeleton className="h-12 w-full" />
                </div>
              )}
            </div>
          </div>
        );
    }

  return (
    <div className="flex flex-col space-y-5 pb-10">
      <Button
        onClick={() => setSort(sort === "desc" ? "asc" : "desc")}
        className="ml-auto w-fit"
      >
        Sort by {sort === "desc" ? "old" : "new"}
      </Button>
      <DataTable columns={columns} data={intialData} />
    </div>
  );
}
