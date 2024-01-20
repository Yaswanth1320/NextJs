"use client"

import { ElementType, FormElement } from "../FormElements"

const type: ElementType = "TextField"

export const TextFieldFormElement:FormElement = {
  type,
  designerComponent: () => <div>Designer component</div>,    
  formComponent: () => <div>Form component</div>,    
  propertiesComponent: () => <div>Properties component</div>,       
}