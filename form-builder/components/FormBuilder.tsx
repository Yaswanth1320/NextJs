"use client";
import { Form } from "@prisma/client";
import PreviewDialog from "./PreviewDialog";
import SaveFormButton from "./SaveFormButton";
import PublishFormBtn from "./PublishFormBtn";
import Editer from "./Editer";
import { DndContext } from "@dnd-kit/core";

function FormBuilder({ form }: { form: Form }) {
  return (
    <DndContext>
      <main className="font-kanit flex flex-col w-full">
        <nav className="flex justify-between border-b-2 p-4 gap-3 items-center">
          <h2 className="font-medium truncate">
            <span className="mr-2 text-muted-foreground">Form:</span>
            {form.name}
          </h2>
          <div className="flex items-center gap-2">
            <PreviewDialog />
            {!form.published && (
              <>
                <SaveFormButton />
                <PublishFormBtn />
              </>
            )}
          </div>
        </nav>
        <div className="w-full h-[200px] bg-accent bg-[url(/texture.svg)] flex items-center flex-grow justify-center relative overflow-y-auto">
          <Editer />
        </div>
      </main>
    </DndContext>
  );
}

export default FormBuilder;
