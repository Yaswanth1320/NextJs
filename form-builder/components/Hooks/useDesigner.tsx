"use client";

import React, { useContext } from "react";
import { DesignerContext } from "../Context/DesignerContext";

function useDesigner() {
  const context = useContext(DesignerContext);

  if (!context) {
    throw new Error("Hook should be used within its range");        
}

  return context;
}

export default useDesigner;
