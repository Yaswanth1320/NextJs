import { useDraggable } from "@dnd-kit/core";
import { FormElement } from "./FormElements";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

function SideButtonElement({ formElement }: { formElement: FormElement }) {
  const { label, icon: Icon } = formElement.designerBtnElement;
  const draggable = useDraggable({
    id: `designer-btn-${formElement.type}`,
    data: {
      type: formElement.type,
      isDesignerBtnElement: true,
    },
  });
  return (
    <Button
      ref={draggable.setNodeRef}
      variant={"outline"}
      className={cn("h-[120px] w-[120px] cursor-grab flex flex-col gap-2",draggable.isDragging && "ring-2 ring-primary")}
      {...draggable.listeners}
      {...draggable.attributes}
    >
      <Icon className="h-8 w-8 text-primary cursor-grab" />
      <p className="text-xs">{label}</p>
    </Button>
  );
}


export function SideButtonElementDargOverlay({ formElement }: { formElement: FormElement }) {
    const { label, icon: Icon } = formElement.designerBtnElement;
    const draggable = useDraggable({
      id: `designer-btn-${formElement.type}`,
      data: {
        type: formElement.type,
        isDesignerBtnElement: true,
      },
    });
    return (
      <Button
        variant={"outline"}
        className="h-[120px] w-[120px] cursor-grab flex flex-col gap-2"
      >
        <Icon className="h-8 w-8 text-primary cursor-grab" />
        <p className="text-xs">{label}</p>
      </Button>
    );
  }

export default SideButtonElement;
