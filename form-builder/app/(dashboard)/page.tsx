import { CardWrapper } from "@/components/CardWrapper";
import { CreateForm } from "@/components/CreateForm";
import { StatsCards } from "@/components/StatsCards";
import { Separator } from "@/components/ui/separator";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="pt-4 font-kanit container">
      <Suspense fallback={<StatsCards loading={true} />}>
        <CardWrapper />
      </Suspense>
      <Separator className="my-6" />
      <h2 className="col-span-2 text-3xl">Your Forms</h2>
      <Separator className="my-6" />
      <CreateForm />
    </div>
  );
}
