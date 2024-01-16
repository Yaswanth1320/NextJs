import { getFormStats } from "@/serveractions/form";
import { MdPreview } from "react-icons/md";
import { BsBoxFill } from "react-icons/bs";
import { MdEditSquare } from "react-icons/md";
import { TbBounceRightFilled } from "react-icons/tb";
import { StatsCard } from "./StatsCard";

interface cardProps {
  data?: Awaited<ReturnType<typeof getFormStats>>;
  loading: boolean;
}

export const StatsCards = (props: cardProps) => {
  const { data, loading } = props;
  return (
    <div className="w-full pt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      <StatsCard
        title="Total visits"
        icon={<MdPreview className="text-green-600" />}
        helperText="Form visits"
        loading={loading}
        value={data?.visits.toLocaleString() || ""}
        className="shadow-md shadow-green-600"
      />

      <StatsCard
        title="Total Submissions"
        icon={<BsBoxFill className="text-red-600" />}
        helperText="All time submissions"
        loading={loading}
        value={data?.submission.toLocaleString() || ""}
        className="shadow-md shadow-red-600"
      />

      <StatsCard
        title="Submission Rate"
        icon={<MdEditSquare className="text-yellow-600" />}
        helperText="Submission rate of the visits"
        loading={loading}
        value={data?.submissionRate.toLocaleString() + "%" || ""}
        className="shadow-md shadow-yellow-600"
      />

      <StatsCard
        title="Bounce Rate"
        icon={<TbBounceRightFilled className="text-blue-600" />}
        helperText="Visits that leaves with interaction"
        loading={loading}
        value={data?.bounceRate.toLocaleString() + "%" || ""}
        className="shadow-md shadow-blue-600"
      />
    </div>
  );
};
