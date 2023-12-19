"use client";
import moment from "moment";
import { FileType } from "@/types";
import {FileIcon} from "react-file-icon"
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import prettyBytes from "pretty-bytes";
import { COLORS_MAP } from "@/constants";

export const columns: ColumnDef<FileType>[] = [
  {
    accessorKey: "type",
    header: "Type",
    cell: ({ renderValue, ...props }) => {
        const type = renderValue() as string;
        const extension: string = type.split('/')[1];
      return <div className="w-10">
        <FileIcon
        extension={extension}
        labelColor={COLORS_MAP[extension]}
        //@ts-ignore
        

        />
      </div>;
    },
  },
  {
    accessorKey: "fileName",
    header: "Filename",
  },
  {
    accessorKey: "timeStamp",
    header: "Data added",
  },
  {
    accessorKey: "size",
    header: "Link",
    cell: ({ renderValue, ...props }) => {
      return <span>{prettyBytes(renderValue() as number)}</span>;
    },
  },
  {
    accessorKey: "downloadUrl",
    header: "Download",
    cell: ({ renderValue, ...props }) => {
      return (
        <a
          href={renderValue() as string}
          target="_blank"
          className="underline text-blue-500 hover:text-blue-600"
        >
          Download
        </a>
      );
    },
  },
];
