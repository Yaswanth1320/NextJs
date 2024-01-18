import { MdPreview } from "react-icons/md";
import { Button } from "./ui/button";

function PreviewDialog() {
  return (
    <Button className="flex items-center gap-1" variant={"outline"}>
      <MdPreview className="h-5 w-5" /> Preview
    </Button>
  );
}

export default PreviewDialog;
