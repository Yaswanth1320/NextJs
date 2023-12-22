import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <div className="w-full bg-[#344e41] text-white font-abc">
      <div className="w-full flex flex-col items-center bg-[#192921] p-8">
        <h1 className="text-2xl lg:text-3xl mb-1">Save time, save money!</h1>
        <h1 className="lg:text-xl text-[0.9rem] mb-6 text-gray-500">
          Sign up and we will send the best deals to you
        </h1>
        <div className="flex flex-col lg:flex-row lg:items-start items-center gap-4">
          <input
            type="text"
            className="px-4 py-2 w-[400px] rounded-sm border-none outline-none text-black"
            placeholder="Your email address"
          />
          <Link
            className="py-2 px-6 bg-[#188d52] rounded-sm hover:bg-[#115c36]"
            href="/"
          >
            Subscribe
          </Link>
        </div>
      </div>

      <div className="w-full px-24 py-14">
        <div className="flex flex-col lg:flex-row lg:gap-4 gap-8 mb-10">
          <div className="w-full flex flex-col gap-2 text-center lg:text-left">
            <h1 className="mb-4 text-xl font-bold">Destination.com</h1>
            <p>Desktop App</p>
            <p>Mobile App</p>
            <p>Integration</p>
            <p>Features</p>
            <p>Solutions</p>
            <p>Security</p>
            <p>Early access</p>
            <p>Templates</p>
          </div>
          <hr className="text-white dark:text-black lg:text-transparent" />
          <div className="w-full flex flex-col gap-2 text-center lg:text-left">
            <h1 className="mb-4 text-xl font-bold">Products</h1>
            <p>Plus</p>
            <p>Proffessical</p>
            <p>Business</p>
            <p>Enterprise</p>
            <p>Dash (beta)</p>
            <p>DropZone Sign</p>
            <p>DocSend</p>
            <p>Plans</p>
          </div>
          <hr className="text-white dark:text-black lg:text-transparent" />
          <div className="w-full flex flex-col gap-2 text-center lg:text-left">
            <h1 className="mb-4 text-xl font-bold">Support</h1>
            <p>Help Center</p>
            <p>Contact Us</p>
            <p>Privacy & Terms</p>
            <p>Cookie Poilcy</p>
            <p>All principal</p>
            <p>Sitemap</p>
            <p>Learning Map</p>
          </div>
          <hr className="text-white dark:text-black lg:text-transparent" />
          <div className="w-full flex flex-col gap-2 text-center lg:text-left">
            <h1 className="mb-4 text-xl font-bold">Community</h1>
            <p>Blog</p>
            <p>Developers</p>
            <p>Community Formus</p>
            <p>Referrals</p>
            <p>Reseller Partner</p>
            <p>Integration Partner</p>
          </div>
        </div>
        <div className="flex gap-4 pb-6 items-center">
          <FaXTwitter size={20} />
          <FaFacebook size={20} />
          <FaYoutube size={23} />
        </div>
        <hr className="text-white dark:text-black mb-10" />
        <div className="flex justify-between">
          <p className="text-xl">Destination.com</p>
          <p>All rights reserved</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
