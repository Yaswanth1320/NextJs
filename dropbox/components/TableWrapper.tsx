"use client"
import { FileType } from "@/types";
import { Button } from "./ui/button";
import { DataTable } from "./Table";
import { columns } from "./Colums";
import { useUser } from "@clerk/nextjs";
import { useState } from "react";



export default function TableWrapper({Data} : { Data : FileType[]}) {
    const { user } = useUser();
    const [sort, setSort] = useState('desc')
    const [intialData,setIntialData] = useState<FileType[]>([])

  return (
    <div>
      <Button onClick={() => setSort(sort === 'desc'? 'asc' : 'desc')} className="mb-4">Sort by {sort === 'desc'? 'old' : 'new'}</Button>
      <DataTable columns={columns} data={Data}/>
    </div>
  )
}
