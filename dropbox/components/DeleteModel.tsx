"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { db, storage } from "@/firebase";
import { useAppStore } from "@/store/store";
import { useUser } from "@clerk/nextjs";
import { deleteDoc, doc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import toast from "react-hot-toast";

export function DeleteModel() {
    const { user } = useUser()
  const [fileId, setFileId, setIsDeleteModelOpen, isDeleteModelOpen] =
    useAppStore((state) => [
      state.fileId,
      state.setFileId,
      state.setIsDeleteModelOpen,
      state.isDeleteModelOpen
    ]);

async function deleteFile(){
    if(!user || !fileId) return

    const toastId = toast.loading("Deleting file");

    const fileRef = ref(storage,`users/${user.id}/files/${fileId}`)

    try {
        deleteObject(fileRef).then(async () => {
          
          deleteDoc(doc(db, "users", user.id, "files", fileId)).then(() =>{
             toast.success("File deleted successfully", {
               id: toastId,
             });
          })
        }).finally(() =>{
            setIsDeleteModelOpen(false);
        }) 
    } catch (error) {
        console.log(error)
        setIsDeleteModelOpen(false);
    }
    setIsDeleteModelOpen(false);
}

  return (
    <Dialog
      open={isDeleteModelOpen}
      onOpenChange={(isOpen) => {
        setIsDeleteModelOpen(isOpen);
      }}
    >
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Are you sure want to delete ?</DialogTitle>
          <DialogDescription>
            If you delete it cannot be restored.
          </DialogDescription>
        </DialogHeader>
        <div className="flex space-x-2">
          <Button
            size="sm"
            className="px-3 flex-1"
            variant={"ghost"}
            onClick={() => setIsDeleteModelOpen(false)}
          >
            <span className="sr-only">cancel</span>
            <span>cancel</span>
          </Button>
          <Button
            type="submit"
            size="sm"
            className="px-3 flex-1"
            onClick={() => deleteFile()}
          >
            <span className="sr-only">delete</span>
            <span>delete</span>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
