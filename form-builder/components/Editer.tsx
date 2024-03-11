"use client";

import { cn } from "@/lib/utils";
import EditerSidebar from "./EditerSidebar";
import { DragEndEvent, useDndMonitor, useDroppable } from "@dnd-kit/core";
import useDesigner from "./Hooks/useDesigner";

function Editer() {
  const { elements, addElement } = useDesigner()
  const droppable = useDroppable({
    id: "drop-area",
    data: {
      isDesignerDropArea: true,
    },
  });

  useDndMonitor({
    onDragEnd : (event : DragEndEvent ) => {
      const { active,over } = event;
      if(!active || !over ) return;
      console.log("Darg end", event);
    }
  })

  return (
    <div className="w-full h-full flex">
      <div className="p-4 w-full">
        <div
          ref={droppable.setNodeRef}
          className={cn(
            "bg-background flex flex-col flex-grow items-center justify-start flex-1 overflow-y-auto max-w-[900px] h-full m-auto rounded-xl",
            droppable.isOver && "ring-2 ring-primary/20"
          )}
        >
          {!droppable.isOver && (
            <p className="flex flex-grow items-center text-3xl text-muted-foreground">
              Drag and drop here
            </p>
          )}
          {droppable.isOver && (
            <div className="p-4 w-full">
              <div className="bg-primary/20 rounded-md h-[120px]"></div>
            </div>
          )}
        </div>
      </div>
      <EditerSidebar />
    </div>
  );
}

export default Editer;
