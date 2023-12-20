"use client";
import DropzoneComponent from "react-dropzone";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { db, storage } from "@/firebase";
import { serverTimestamp } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import toast from "react-hot-toast";

export default function Dropzone() {
    const [loading,setLoading] = useState<boolean>(false);
    const { isLoaded, isSignedIn, user } = useUser()

    const onDrop = (acceptedFiles: File[]) => {
        acceptedFiles?.forEach((file) =>{
            const reader = new FileReader();
            reader.onabort = () =>{
                console.log('File reading was aboarded')
            }
            reader.onerror = () => {
              console.log("File reading was failed");
            };

            reader.onload = async () => {
                await uploadPost(file)
            }
            reader.readAsArrayBuffer(file)
        })
    };

    const uploadPost = async(selectedFile: File) =>{
        if(loading) return;
        if(!user) return;

        setLoading(true);
        const toastId = toast.loading('uploading file...')

        const docRef = await addDoc(collection(db,"users",user.id,"files"),{
            userId: user.id,
            fileName: selectedFile.name,
            fullName: user.fullName,
            profileImage: user?.imageUrl,
            timeStamp: serverTimestamp(),
            type: selectedFile.type,
            size: selectedFile.size
        })

        const imgRef = ref(storage,`users/${user.id}/files/${docRef.id}`)

        uploadBytes(imgRef,selectedFile).then(async(snapshot) =>{
            const downloadUrl = await getDownloadURL(imgRef);

            await updateDoc(doc(db,"users",user.id,"files",docRef.id),{
                downloadUrl: downloadUrl
            })
        })

        toast.success("uploaded successfully",{
          id: toastId
        })
        setLoading(false);
    }


  const maxSize = 20971520;
  return (
    <DropzoneComponent
      minSize={0}
      maxSize={maxSize}
      onDrop={onDrop}
    >
      {({
        getRootProps,
        getInputProps,
        isDragActive,
        isDragReject,
        fileRejections,
      }) => {
        const isFileTooLarge =
          fileRejections.length > 0 && fileRejections[0].file.size > maxSize;

        return (
          <section className="m-4">
            <div
              {...getRootProps()}
              className={cn(
                "w-full h-52 flex justify-center items-center p-5 border border-dashed rounded-lg text-center",
                isDragActive ? "bg-[#035FFE] text-white animate-pulse" : "bg-slate-100/50 dark:bg-slate-800/80 text-slate-400"
              )}
            >
              <input {...getInputProps()} />
              {!isDragActive && "Click here or Drag a file to Upload!"}
              {isDragActive && !isDragReject && "Drop to upload this file"}
              {isDragReject && "file type not accepted, try others"}
              {isFileTooLarge && (
                <div className="text-danger mt-2">File too large</div>
              )}
            </div>
          </section>
        );
      }}
    </DropzoneComponent>
  );
}
