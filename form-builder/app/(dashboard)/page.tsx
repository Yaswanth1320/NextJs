import { CardWrapper } from "@/components/CardWrapper";
import { StatsCards } from "@/components/StatsCards";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="pt-4 font-kanit container">
      <Suspense fallback={<StatsCards loading={true}/>}>
      <CardWrapper />
      </Suspense>
    </div>
  )
}
