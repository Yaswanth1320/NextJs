import { FormElements } from "./FormElements";
import SideButtonElement from "./SideButtonElement";

function EditerSidebar() {
  return (
    <aside className="flex flex-col flex-grow gap-2 w-[400px] max-w-[400px] h-full border-l-2 p-4 border-muted bg-background overflow-y-auto">
      <SideButtonElement formElement={FormElements.TextField}/>
    </aside>
  );
}

export default EditerSidebar;
