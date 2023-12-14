"use client"
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";
import { usePathname } from "next/navigation"

function Navbar() {
    const pathname = usePathname()
  return (
    <div className="navbar">
      <div className="nav-name">{pathname.split('/').pop()}</div>
      <div className="icons">
        <div className="search">
          <MdSearch size={23} />
          <input type="text" placeholder="Search..." />
        </div>
        <div className="extra">
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </div>
  );
}

export default Navbar