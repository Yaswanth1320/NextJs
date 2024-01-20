import { MdPublish } from "react-icons/md";
import { Button } from "./ui/button";

function PublishFormBtn() {
  return (
    <Button
      className="flex items-center gap-1 bg-gradient-to-r from-[#066df1] to-[#00d2fe]"
      variant={"outline"}
    >
      <MdPublish className="h-5 w-5" /> Publish
    </Button>
  );
}

export default PublishFormBtn;
