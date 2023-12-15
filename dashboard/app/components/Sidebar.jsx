import "../Styles/Menu.css";
import Link from "next/link";
import Image from "next/image";
import { MdDashboard } from "react-icons/md";
import { LuUsers } from "react-icons/lu";
import { FaProductHunt } from "react-icons/fa";
import { FaMoneyCheckDollar, FaMoneyBillTransfer } from "react-icons/fa6";
import { RiTeamFill } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { IoMdHelpCircle, IoMdSettings } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="profile">
          <Image
            className="user-img"
            src='/noavatar.png'
            width={50}
            height={50}
            alt="Picture of the author"
          />
        <div>
          <p>username</p>
          <p>status</p>
        </div>
      </div>
      <span className="title">Pages</span>
      <div className="pages">
        <Link href="/dashboard">
          <MdDashboard />
          Dashboard
        </Link>
        <Link href="/dashboard/users">
          <LuUsers />
          Users
        </Link>
        <Link href="/dashboard/products">
          <FaProductHunt />
          Products
        </Link>
        <Link href="/dashboard">
          <FaMoneyBillTransfer />
          Transcations
        </Link>
      </div>
      <span className="title">Analytics</span>
      <div className="pages">
        <Link href="/">
          <RiTeamFill />
          Teams
        </Link>
        <Link href="/">
          <TbReportAnalytics />
          Report
        </Link>
        <Link href="/">
          <FaMoneyCheckDollar />
          Revenue
        </Link>
      </div>
      <span className="title">User</span>
      <div className="pages">
        <Link href="/">
          <IoMdHelpCircle />
          Help
        </Link>
        <Link href="/">
          <IoMdSettings />
          Settings
        </Link>
        <Link href="/login">
          <IoLogOut />
          Logout
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
