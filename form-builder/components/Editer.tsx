"use client";

import EditerSidebar from "./EditerSidebar";
import { useDroppable } from '@dnd-kit/core'

function Editer() {

  const droppable = useDroppable({
    id: "drop-area",
    data:{
      isDesignerDropArea: true,
    }
  })

  return (
    <div className="w-full h-full flex">
      <div className="p-4 w-full">
        <div
          className="bg-background flex flex-col flex-grow items-center justify-start flex-1 overflow-y-auto 
        max-w-[900px] h-full m-auto rounded-xl"
        >
          <p className="flex flex-grow items-center text-3xl text-muted-foreground">
            Drag and drop here
          </p>
        </div>
      </div>
      <EditerSidebar />
    </div>
  );
}

export default Editer;
