import { Fragment, useState, useEffect } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import { useProduct } from "../context/productContext/context";
import Navbar from "../components/Navbar";
import { api } from "../constants/api";
import axios from "axios";
const sortOptions = [
  { name: "Price: Low to High", href: "#", current: false },
  { name: "Price: High to Low", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const AdminProducts = () => {
  const [sortVal, setSortVal] = useState("Price: Low to High");

  const {
    productState: { products },
    productDispatch,
  } = useProduct();

  const getProducts = async () => {
    try {
      const { data } = await axios.get(`${api}products/`);
      productDispatch({ type: "GET_PRODUCTS", payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleSort = (e, option) => {
    setSortVal(option.name);
  };

  const sortedProducts = products.sort((a, b) =>
    sortVal === "Price: Low to High" ? a.price - b.price : b.price - a.price
  );
  return (
    <Navbar>
      <div>
        <div>
          <div className="bg-white">
            <div>
              {/* Mobile filter dialog */}

              <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-4">
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                    All Products
                  </h1>

                  <div className="flex items-center">
                    <Menu as="div" className="relative inline-block text-left">
                      <div>
                        <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                          Sort
                          <ChevronDownIcon
                            className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                            aria-hidden="true"
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
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <div className="py-1">
                            {sortOptions.map((option) => (
                              <Menu.Item key={option.name}>
                                {({ active }) => (
                                  <p
                                    onClick={(e) => handleSort(e, option)}
                                    className={classNames(
                                      option.current
                                        ? "font-medium text-gray-900"
                                        : "text-gray-500",
                                      active ? "bg-gray-100" : "",
                                      "block px-4 py-2 text-sm"
                                    )}
                                  >
                                    {option.name}
                                  </p>
                                )}
                              </Menu.Item>
                            ))}
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </div>

                <section
                  aria-labelledby="products-heading"
                  className="pb-24 pt-2"
                >
                  <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                    <div className="lg:col-span-4">
                      <div className="bg-white">
                        <div className="mx-auto max-w-2xl px-4 py-0 sm:px-6 sm:py-4 lg:max-w-7xl lg:px-8">
                          <div className="mt-2">
                            <button className="bg-red-600 px-2 py-1 text-white uppercase">
                              <Link to="/product/form">add products</Link>
                            </button>
                          </div>
                          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
                            {sortedProducts.map((product) => (
                              <div key={product._id}>
                                <div className="group relative border-2 p-2 shadow-sm ">
                                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none  lg:h-80">
                                    <img
                                      src={product.mainImageUrl}
                                      alt={product.title}
                                      className="h-full w-full object-cover object-top lg:h-full lg:w-full"
                                    />
                                  </div>
                                  <div className="mt-4 flex justify-between px-3">
                                    <div>
                                      <h3 className="text-sm text-gray-700">
                                        <a href={product.href}>
                                          <span
                                            aria-hidden="true"
                                            className="absolute inset-0"
                                          />
                                          {product.title}
                                        </a>
                                      </h3>
                                    </div>
                                    <p className="text-sm font-medium text-gray-900">
                                      {product.price}
                                    </p>
                                  </div>
                                </div>
                                <div className="flex bg-red-600 justify-center mt-2 ">
                                  <Link
                                    to={`/product/form/edit/${product._id}`}
                                  >
                                    <button className=" text-white py-1 ">
                                      edit
                                    </button>
                                  </Link>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </main>
            </div>
          </div>
        </div>
      </div>
    </Navbar>
  );
};

export default AdminProducts;
