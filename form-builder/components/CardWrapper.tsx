import { getFormStats } from "@/serveractions/form"
import { StatsCards } from "./StatsCards"


export const CardWrapper = async() => {
     const stats = await getFormStats()
  return (
    <StatsCards loading={false} data={stats}/>
  )
}
