"use client";
import {
  Bars3Icon,
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { LuLogIn } from "react-icons/lu";
import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  ChatBubbleLeftIcon,
  ChevronUpDownIcon,
  HomeIcon,
  PaperAirplaneIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { cn } from "@/lib/utils";

const products = [
  {
    name: "Book a stay",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: HomeIcon,
  },
  {
    name: "Book a Flight",
    description: "Speak directly to your customers",
    href: "#",
    icon: PaperAirplaneIcon,
  },
  {
    name: "Contact our support team",
    description: "Your customers data will be safe and secure",
    href: "#",
    icon: ChatBubbleLeftIcon,
  },
];

const call = [
  { name: "See Demo Booking", href: "#", icon: PlayCircleIcon },
  { name: "Contact & Support", href: "#", icon: PhoneIcon },
];

export default function componentName() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [menu, setMenu] = useState(false);
  return (
    <>
      <nav className="bg-[#344e41] font-abc mx-auto flex items-center lg:px-32 w-full justify-between p-6">
        <div className="flex lg:flex-1">
          <Link href="/" className="text-white text-xl">
            GoBeyond
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white "
            onClick={() => setMenu(!menu)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <Popover.Group className="lg:flex hidden lg:gap-x-12">
          <Popover className="relative">
            <Popover.Button className="flex outline-none border-none item-center gap-x-1 text-[1.1rem] font-semibold  text-white">
              <div className="flex items-center">
                Stays
                <ChevronDownIcon
                  className="text-white w-4 h-4 mt-1 flex items-center"
                  aria-hidden="true"
                />
              </div>
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute bg-white -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((product) => (
                    <div
                      key={product.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-100"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-gray-300">
                        <product.icon
                          className="h-6 w-6 text-[#588157] group-hover:text-[#344e41]"
                          aria-hidden="true"
                        />
                      </div>

                      <div className="flex-auto">
                        <a
                          href={product.href}
                          className="block font-semibold text-[#588157]"
                        >
                          {product.name}
                          <span className="absolute inset-4" />
                        </a>
                        <p className="mt-1 text-[#588157]">
                          {product.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {call.map((item) => (
                    <a
                      href={item.href}
                      key={item.name}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6
                            text-[#588157] hover:text-[#344e41]"
                    >
                      <item.icon
                        className="h-5 w-5 flex-none text-[#588157]"
                        aria-hidden="true"
                      >
                        {item.name}
                      </item.icon>
                    </a>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <a
            href="#"
            className="text-[1rem] font-semibold leading-6 text-white"
          >
            Bookings
          </a>
          <a
            href="#"
            className="text-[1rem]  font-semibold leading-6 text-white"
          >
            Hotels
          </a>
          <a
            href="#"
            className="text-[1rem]  font-semibold leading-6 text-white"
          >
            Flights
          </a>
          <a
            href="#"
            className="text-[1rem]  font-semibold leading-6 text-white"
          >
            Hostel+Flight
          </a>
        </Popover.Group>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="#"
            className="text-[1.1rem] font-semibold leading-6 text-white flex items-center"
          >
            <div className="flex items-center gap-x-1">
              Login{" "}
              <span aria-hidden="true">
                <LuLogIn />
              </span>
            </div>
          </a>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={menu} onClose={setMenu}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel
          className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto
        bg-[#344e41] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
        >
          <div className="flex font-abc items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Close menu</span>
              <h1 className="text-white text-xl">GoBeyond</h1>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white"
              onClick={() => setMenu(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6 " aria-hidden="true" />
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3 font-abc">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-white hover:bg-[#344e41]">
                        Stay
                        <ChevronDownIcon
                          className={cn(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products, ...call].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block text-[1rem] rounded-lg py-2 pl-6 pr-3 font-semibold leading-7 text-white hover:bg-[#588157]"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-white hover:bg-[#588157]"
                >
                  Bookings
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-white hover:bg-[#588157]"
                >
                  Hotels
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-white hover:bg-[#588157]"
                >
                  Flights
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base  leading-7 text-white hover:bg-[#588157]"
                >
                  Hostel+Flight
                </a>
              </div>
              <div className="py-4">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-white hover:bg-[#588157]"
                >
                  Login
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </>
  );
}
