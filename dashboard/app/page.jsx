import Link from "next/link";

const Homepage = () => {
  return (
    <div className="w-screen h-screen flex item-center justify-center">
      Login to view the dashboard <Link href="/login">click here</Link>
    </div>
  );
};

export default Homepage;
