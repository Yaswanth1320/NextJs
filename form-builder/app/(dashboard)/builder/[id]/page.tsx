import { getFormById } from "@/serveractions/form";
import React from "react";

async function BuilderPage({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const { id } = params;
  const form = await getFormById(Number(id));
  if (!form) {
    throw new Error("Form not found");
  }
  return <div>{form.name}</div>;
}

export default BuilderPage;
