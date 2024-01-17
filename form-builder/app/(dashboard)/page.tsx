import { CardWrapper } from "@/components/CardWrapper";
import { CreateFormBtn } from "@/components/CreateForm";
import { FormCard } from "@/components/FormCard";
import { FormCardSkeleton } from "@/components/FormCardSkeleton";
import { FormCards } from "@/components/FormCards";
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <CreateFormBtn />
        <Suspense
          fallback={[1, 2, 3, 4].map((ele) => (
            <FormCardSkeleton key={ele} />
          ))}
        >
          <FormCards />
        </Suspense>
      </div>
    </div>
  );
}
