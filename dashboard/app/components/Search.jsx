import { MdSearch } from "react-icons/md";

export default function Search({placeholder}) {
  return (
    <div className="searches">
      <MdSearch/>
      <input type="text" placeholder={placeholder} />
    </div>
  );
}
