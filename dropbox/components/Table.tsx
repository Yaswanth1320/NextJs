"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FileType } from "@/types";
import { Button } from "./ui/button";
import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import { useAppStore } from "@/store/store";
import { DeleteModel } from "./DeleteModel";
import RenameModel from "./RenameModel";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}



export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const [setIsDeleteModelOpen, setFileId, setFileName, setIsRenameModelOpen] =
    useAppStore((state) => [
      state.setIsDeleteModelOpen,
      state.setFileId,
      state.setFileName,
      state.setIsRenameModelOpen,
    ]);

  const deleteFile = (fileId: string) => {
    setFileId(fileId);
    setIsDeleteModelOpen(true);
  };

  const renameFile = (fileId: string,fileName: string) =>{
    setFileId(fileId);
    setFileName(fileName);
    setIsRenameModelOpen(true);
  }


  return (
    <div className="rounded-md border w-[1207px]">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                <DeleteModel/>
                <RenameModel/>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {cell.column.id === "timeStamp" ? (
                      <div className="flex flex-col">
                        <div className="text-sm">
                          {(cell.getValue() as Date).toLocaleDateString()}
                        </div>

                        <div className="text-xs text-gray-500">
                          {(cell.getValue() as Date).toLocaleTimeString()}
                        </div>
                      </div>
                    ) : cell.column.id === "fileName" ? (
                      <p
                        onClick={() => renameFile((row.original as FileType).id,(row.original as FileType).fileName)}
                        className="underline flex item-center text-blue-500 hover:cursor-pointer"
                      >
                        {cell.getValue() as string}{" "}
                        <Pencil1Icon className="ml-2" />
                      </p>
                    ) : (
                      flexRender(cell.column.columnDef.cell, cell.getContext())
                    )}
                  </TableCell>
                ))}

                <TableCell key={(row.original as FileType).id}>
                  <Button
                    variant={"outline"}
                    onClick={() => deleteFile((row.original as FileType).id)
                    }
                  >
                    <TrashIcon fontSize={10} />
                  </Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No files found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
