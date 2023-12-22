import { Skeleton } from "@/components/ui/skeleton"

function LoadingResult() {
  return (
    <section>
      <div className="mx-auto max-w-[1120px] font-abc">
        <p className="text-center animate-pulse font-bold text-[#344e41] pt-10">
          Please wait - we are scanning the market for the best places!
        </p>
      </div>

      <div className="flex justify-center py-10">
        <div className="w-10 h-10 bg-[#344e41] rounded-full animate-bounce"></div>
      </div>

      <div className="space-y-5 p-5">
        {[...Array(10)].map((_, i) =>(
            <div key={i} className="flex space-x-2 mx-auto max-w-[1120px]">
                <Skeleton className="h-20 w-20 md:h-44 md:w-44 rounded-lg" />
                <Skeleton className="h-44 w-full rounded-lg"/>
            </div>
        ))}
      </div>
    </section>
  );
}

export default LoadingResult
