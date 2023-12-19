import Dropzone from "@/components/Dropzone";
import TableWrapper from "@/components/TableWrapper";
import { db } from "@/firebase";
import { FileType } from "@/types";
import { auth } from "@clerk/nextjs";
import { collection, getDocs } from "firebase/firestore";

async function page() {
  const { userId } = auth();

  const results = await getDocs(collection(db, "users", userId!, "files"));
  const Data: FileType[] = results.docs.map((item) => ({
    id: item.id,
    fileName: item.data().fileName || item.id,
    timeStamp: new Date(item.data().timeStamp?.seconds * 1000) || undefined,
    fullName: item.data().fullName,
    downloadUrl: item.data().downloadUrl,
    type: item.data().type,
    size: item.data().size,
  }));

  

  return (
    <div className="border-t font-abc">
      <Dropzone />

      <section className="container px-24">
        <h2 className="font-semibold">All Files</h2>
        <div>
          <TableWrapper Data={Data}/>
        </div>
      </section>
    </div>
  );
}

export default page;
