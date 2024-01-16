import { getFormStats } from "@/serveractions/form"
import { LuView } from "react-icons/lu";
import { StatsCard } from "./StatsCard";

interface cardProps {
    data? : Awaited<ReturnType<typeof getFormStats>>
    loading : boolean
}

export const StatsCards = (props : cardProps) => {
    const { data, loading } = props;
  return (
    <div className="w-full pt-8 grid grid-cols-1 md:grid-col-2 lg:grid-cols-4">
        <StatsCard
        title="Total visits"
        icon={<LuView className="text-blue-600"/>}
        helperText= "Form visits"
        loading={loading}
        value={data?.visits.toLocaleString() || ""}
        className="shadow-md shadow-blue-600"
        />
    </div>
  )
}
