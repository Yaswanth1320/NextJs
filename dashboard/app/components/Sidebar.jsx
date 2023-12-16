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
import { signOut } from "../auth";
import { auth } from "../auth";

async function Sidebar() {
  const { user } = await auth();
  return (
    <div className="sidebar">
      <div className="profile">
        <Image
          className="user-img"
          src={user.img || "/noavatar.png"}
          width={50}
          height={50}
          alt="Picture of the author"
        />
        <div className="user-info">
          <p>{user.username}</p>
          <span>administrator</span>
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
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <button>
            <IoLogOut />
            Logout
          </button>
        </form>
      </div>
    </div>
  );
}

export default Sidebar;
