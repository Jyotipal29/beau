import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  ShoppingCartIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import logo from "../assets/beau-new-logo.jpg";
import { useUser } from "../context/userContext/context";

const navigation = [
  { name: "Home", link: "/", user: true },
  { name: "Products", link: "/products", user: true },
  { name: "Contact", link: "/contacts", user: true },
  { name: "admin", link: "/admin", admin: true },
  { name: "orders", link: "/admin/orders", admin: true },
];
const userNavigation = [
  { name: "Your Profile", link: "/profile" },
  { name: "Orders", link: "/orders" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// eslint-disable-next-line react/prop-types
const Navbar = ({ children }) => {
  const {
    userState: { user },
  } = useUser();
  return (
    <>
      <div className="min-h-full z-50">
        <Disclosure
          as="nav"
          className={`sticky top-0 z-50  w-full px-10 !bg-red-600 `}
        >
          {({ open }) => (
            <>
              <div className="max-md:-ml-8">
                <div className="flex h-16 items-center lg:ml-6 md:ml-0 rounded-lg">
                  <Link href="/">
                    <img
                      className="h-12 w-52 object-contain object-center"
                      src={logo}
                      alt="Beau"
                    />
                  </Link>
                  <div className="hidden md:block">
                    <div className=" flex items-baseline space-x-4">
                      {navigation.map((item) =>
                        item[user.role] ? (
                          <Link
                            key={item.name}
                            to={item.link}
                            className="text-white hover:bg-red-500 bg-red-600  font-bold
                            rounded-md px-3 py-2 text-sm"
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </Link>
                        ) : null
                      )}
                    </div>
                  </div>
                  <div className="hidden z-50 md:block md:ml-auto lg:mr-20 md:mr-8">
                    <div className="flex items-center">
                      <button
                        type="button"
                        className="rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 "
                      >
                        <Link to="/cart">
                          <ShoppingCartIcon
                            className="h-[38px] w-[38px] bg-transparent p-2 rounded-full "
                            stroke="white"
                            aria-hidden="true"
                          />
                        </Link>
                      </button>
                      <button type="button" className="rounded-full  ">
                        <Link to="/wish">
                          <HeartIcon
                            className="h-[38px] w-[38px] bg-transparent p-2 rounded-full "
                            stroke="white"
                            aria-hidden="true"
                          />
                        </Link>
                      </button>

                      {/* Profile dropdown */}
                      <Menu as="div" className="relative ml-3">
                        <div>
                          <Menu.Button className="flex max-w-xs items-center rounded-full  text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-red-600">
                            <span className="sr-only">Open user menu</span>
                            <img
                              className="h-8 w-8 rounded-full"
                              src={user.image}
                              alt=""
                            />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-red-600 overflow-hidden shadow-lg ring-1  ring-opacity-5 focus:outline-none">
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <Link
                                    to={item.link}
                                    className={classNames(
                                      active ? "bg-gray-100" : "",
                                      "block px-4 py-2 text-sm text-red-600  md:bg-white md:hover:bg-gray-100"
                                    )}
                                  >
                                    {item.name}
                                  </Link>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                  <div className="-mr-2 ml-auto flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md  p-2  hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2  mr-5">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {navigation.map((item) =>
                    item[user.role] ? (
                      <Link
                        key={item.name}
                        to={item.link}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-white",
                          "block rounded-md px-3 py-2 text-base font-medium "
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ) : null
                  )}
                </div>
                <div className="border-t  pb-3 pt-4">
                  <div className="flex items-center px-5 bg-red-600">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={user.image}
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-white">
                        {user.name}
                      </div>
                    </div>
                    <button
                      type="button"
                      className="ml-auto flex-shrink-0 rounded-full  p-1  text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      <span className="sr-only">View notifications</span>
                      <Link to="/cart">
                        <ShoppingCartIcon
                          className="h-6 w-6"
                          aria-hidden="true"
                        />
                      </Link>
                    </button>
                    <button
                      type="button"
                      className="ml-auto flex-shrink-0 rounded-full  p-1  text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      <span className="sr-only">View notifications</span>
                      <Link to="/wish">
                        <HeartIcon className="h-6 w-6" aria-hidden="true" />
                      </Link>
                    </button>
                  </div>
                  <div className="mt-3 space-y-1 px-2">
                    {userNavigation.map((item) => (
                      <Link
                        key={item.name}
                        as="a"
                        to={item.link}
                        className="block rounded-md px-3 py-2 text-base font-medium  hover:bg-red-600 text-white"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <main>
          <div className="mx-auto max-w-7xl">{children}</div>
        </main>
      </div>
    </>
  );
};

export default Navbar;
