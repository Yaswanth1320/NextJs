"use client"
import { Form } from "@prisma/client"
import PreviewDialog from "./PreviewDialog"
import SaveFormButton from "./SaveFormButton"
import PublishFormBtn from "./PublishFormBtn"

function FormBuilder({ form }: { form: Form }) {
  return (
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
    </main>
  )
}

export default FormBuilder