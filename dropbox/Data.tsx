import { FaUser, FaUsers, FaLock, FaSearch } from "react-icons/fa";
import { LuMessagesSquare } from "react-icons/lu";
import { FaFileSignature } from "react-icons/fa6";

export const professionalsData = {
  icon: <FaUser size={13} />,
  name: "For professionals",
  title: "Essentials",
  cost: "US$22/month",
  users: "1",
  storage: "3TB of storage",
  time: "180 days to restore deleted files",
  delivery: "Large file delivery up to 100 GB",
  features: "Read, write, edit and delete",
};

export const smallerData = {
  icon: <FaUsers size={18} />,
  name: "For smaller teams",
  title: "Business",
  cost: "US$24/user/month",
  users: "3+ users",
  storage: "Starts at 9 TB for the team",
  time: "180 days to restore deleted files",
  delivery: "Large file delivery up to 100 GB",
  features: "Read, write, edit and delete",
};

export const LargerData = {
  icon: <FaUsers size={18} />,
  name: "For large teams",
  title: "Business Plus",
  cost: "US$32/user/month",
  users: "3+ users", 
  storage: "Starts at 15 TB for the team",
  time: "One year to restore deleted files",
  delivery: "Large file delivery up to 250 GB",
  features: "Read, write, edit and delete",
};

export const feature1 = {
  icon: <FaLock size={40}/>,
  title: "Store and protect your files",
  desc: "Starting at 3 TB of team storage and backup, with security features like file recovery, password protection, watermarking and viewer history.",
};

export const feature2 = {
  icon: <FaSearch size={40}/>,
  title: "Share your content",
  desc: "Forget email attachments. With Dropbox, you can deliver large files and share trackable links with real-time document analytics to help make data-driven decisions.",
};

export const feature3 = {
  icon: <LuMessagesSquare size={40} />,
  title: "Collaborate on your work",
  desc: "Reduce meetings with Capture and use Replay to streamline feedback and approval processes on video projects.",
};

export const feature4 = {
  icon: <FaFileSignature size={40} />,
  title: "Manage your business",
  desc: "Make it easy to prepare, send and eSign your most important contracts. Automate manual processes with tools like eSignature templates, which let you reuse documents in seconds.",
};

