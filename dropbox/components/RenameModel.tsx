"use client";

import { useAppStore } from "@/store/store";
import { useUser } from "@clerk/nextjs";
import { useState } from "react";
import { DialogContent, Dialog, DialogHeader, DialogTitle } from "./ui/dialog";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/firebase";
import toast from "react-hot-toast";

export default function RenameModel() {
  const { user } = useUser();
  const [input, setInput] = useState("");

  const [isRenameModelOpen, setIsRenameModelOpen, fileId, fileName] =
    useAppStore((state) => [
      state.isRenameModelOpen,
      state.setIsRenameModelOpen,
      state.fileId,
      state.fileName,
    ]);

  const renameFile = async() =>{
    if (!user || !fileId) return;

    const toastId = toast.loading("Renaming")

    await updateDoc(doc(db, "users", user.id, "files", fileId),{
        fileName: input
    });

    toast.success("Name changed sucessfully",{
        id: toastId
    })

    setInput("")
    setIsRenameModelOpen(false);
  }

  return (
    <Dialog
      open={isRenameModelOpen}
      onOpenChange={(isOpen) => {
        setIsRenameModelOpen(isOpen);
      }}
    >
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="pb-2">Rename the file</DialogTitle>
          <Input
            id="link"
            defaultValue={fileName}
            onChange={(e) => setInput(e.target.value)}
            onKeyDownCapture={(e) => {
              if (e.key == "Enter") {
                renameFile();
              }
            }}
          />
          <div className="flex py-3 justify-end space-x-2">
            <Button
              size="sm"
              className="px-3"
              variant={"ghost"}
              onClick={() => setIsRenameModelOpen(false)}
            >
              <span className="sr-only">cancel</span>
              <span>cancel</span>
            </Button>
            <Button
              type="submit"
              size="sm"
              className="px-3"
              onClick={() => renameFile()}
            >
              <span className="sr-only">Rename</span>
              <span>Rename</span>
            </Button>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
