import { places } from "@/data";


function Places() {
  return (
    <div className="flex flex-col">
      <div>
        <h1 className="text-2xl font-bold mb-8">Destinations we love</h1>
      </div>
      <div className="flex flex-wrap gap-x-32 gap-y-8">
        {places.map((item,i) =>(
            <div key={i} className="flex flex-col">
                <p className="font-bold text-[1.1rem]">{item.name}</p>
                <p className="text-[0.9rem] text-gray-500">{item.count} properties</p>
            </div>
        ))}
      </div>
    </div>
  );
}

export default Places
