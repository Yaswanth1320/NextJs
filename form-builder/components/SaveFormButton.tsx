import { IoMdSave } from "react-icons/io";
import { Button } from "./ui/button";

function SaveFormButton() {
  return (
    <Button className="flex items-center gap-1" variant={"outline"}>
      <IoMdSave className="h-5 w-5" /> Save
    </Button>
  )
}

export default SaveFormButton