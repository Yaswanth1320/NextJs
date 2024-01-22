"use client"

import { MdTextFields } from "react-icons/md"
import { ElementType, FormElement } from "../FormElements"

const type: ElementType = "TextField"

export const TextFieldFormElement:FormElement = {
  type,
  construct: (id: string) => ({
    id,
    type,
    extraAttributes: {
        label: "Text Field",
        helperText: "Helper text",
        required: false,
        placeHolder: "Value here..."
    }
  }),

  designerBtnElement:{
    icon: MdTextFields,
    label: "Text field"
  },
  designerComponent: () => <div>Designer component</div>,    
  formComponent: () => <div>Form component</div>,    
  propertiesComponent: () => <div>Properties component</div>,       
}