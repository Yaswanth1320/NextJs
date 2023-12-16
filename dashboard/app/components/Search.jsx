'use client'
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { MdSearch } from "react-icons/md";
import { useDebouncedCallback } from "use-debounce";

export default function Search({placeholder}) {
  const searchParams = useSearchParams()
  const {replace} = useRouter();
  const pathname = usePathname();

  const handleSearch = useDebouncedCallback((e) =>{
      const params = new URLSearchParams(searchParams);
      
      params.set("page", 1);

      if(e.target.value){
         e.target.value.length > 2 && params.set("q", e.target.value);
      }else{
          params.delete("q");
      }
      replace(`${pathname}?${params}`);
  },300);
  
  return (
    <div className="searches">
      <MdSearch/>
      <input type="text" placeholder={placeholder} onChange={handleSearch}/>
    </div>
  );
}
